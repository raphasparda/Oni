from __future__ import annotations

import argparse
import re
import sys
import unicodedata
from functools import lru_cache
from pathlib import Path

from wordfreq import top_n_list, zipf_frequency


TOKEN_RE = re.compile(r"[A-Za-z]+")


def strip_accents(text: str) -> str:
  """Remove diacritic marks from a word."""
  return "".join(
      char
      for char in unicodedata.normalize("NFD", text)
      if unicodedata.category(char) != "Mn"
  )


def build_accent_map() -> dict[str, set[str]]:
  """Build map from accentless word to candidate accented forms."""
  mapping: dict[str, set[str]] = {}
  for word in top_n_list("pt", 500_000):
    if not word.isalpha():
      continue
    lower = word.lower()
    base = strip_accents(lower)
    if base == lower:
      # Word has no diacritics; nothing to map.
      continue
    mapping.setdefault(base, set()).add(lower)
  return mapping


ACCENT_MAP = build_accent_map()
FREQ_THRESHOLD = 0.75


@lru_cache(maxsize=None)
def word_frequency(word: str) -> float:
  """Return Zipf frequency for the given word in Portuguese."""
  return zipf_frequency(word, "pt")


def choose_accented_form(word: str) -> str | None:
  """Return accented form for word if it is more common than the plain form."""
  base = strip_accents(word.lower())
  candidates = ACCENT_MAP.get(base)
  if not candidates:
    return None

  best_form = max(candidates, key=word_frequency)
  if best_form == word.lower():
    return None

  if word_frequency(best_form) > word_frequency(word.lower()) + FREQ_THRESHOLD:
    return best_form
  return None


def apply_original_case(replacement: str, original: str) -> str:
  """Match the replacement casing with the original token."""
  if original.isupper():
    return replacement.upper()
  if original[0].isupper() and original[1:].islower():
    return replacement.capitalize()
  return replacement


def should_process_literal(literal: str) -> bool:
  """Only process strings that look like prose (contain spaces)."""
  if not any(char.isalpha() for char in literal):
    return False
  return " " in literal or "\n" in literal or "\t" in literal


def accentuate_segment(segment: str) -> str:
  """Add diacritics to plain Portuguese words inside the provided segment."""

  def replacer(match: re.Match[str]) -> str:
    start, end = match.span()
    token = match.group(0)

    # Skip words that are part of hyphenated identifiers (e.g., Tamamo-no-Mae).
    if (start > 0 and segment[start - 1] == "-") or (end < len(segment) and segment[end] == "-"):
      return token

    candidate = choose_accented_form(token)
    if not candidate:
      return token
    return apply_original_case(candidate, token)

  return TOKEN_RE.sub(replacer, segment)


def process_template_literal(content: str) -> str:
  """Handle template literals with ${} blocks."""
  result: list[str] = []
  buffer: list[str] = []
  index = 0
  length = len(content)

  while index < length:
    if content[index] == "$" and index + 1 < length and content[index + 1] == "{":
      if buffer:
        result.append(accentuate_segment("".join(buffer)))
        buffer.clear()
      # Copy the expression as-is, accounting for nested braces.
      result.append("${")
      index += 2
      brace_depth = 1
      expression: list[str] = []

      while index < length and brace_depth > 0:
        char = content[index]
        expression.append(char)
        if char == "{":
          brace_depth += 1
        elif char == "}":
          brace_depth -= 1
        index += 1

      result.append("".join(expression))
    else:
      buffer.append(content[index])
      index += 1

  if buffer:
    result.append(accentuate_segment("".join(buffer)))
  return "".join(result)


def process_literal(literal: str, quote: str) -> str:
  """Process a string literal, preserving escapes and template syntax."""
  if not should_process_literal(literal):
    return literal
  if quote == "`":
    return process_template_literal(literal)
  return accentuate_segment(literal)


def transform_text(source: str) -> str:
  """Traverse source code, processing string literals only."""
  result: list[str] = []
  index = 0
  length = len(source)

  while index < length:
    char = source[index]

    if char in {"'", '"', "`"}:
      quote = char
      result.append(quote)
      index += 1
      literal_chars: list[str] = []
      escaped = False

      while index < length:
        current = source[index]
        if escaped:
          literal_chars.append("\\")
          literal_chars.append(current)
          escaped = False
        elif current == "\\":
          escaped = True
        elif current == quote:
          literal = "".join(literal_chars)
          result.append(process_literal(literal, quote))
          result.append(current)
          index += 1
          break
        else:
          literal_chars.append(current)
        index += 1
      else:
        # Unterminated string; append remainder and exit.
        result.extend(literal_chars)
        return "".join(result)
    else:
      result.append(char)
      index += 1

  return "".join(result)


def main() -> None:
  parser = argparse.ArgumentParser(description="Restore Portuguese diacritics in story strings.")
  parser.add_argument("files", nargs="+", help="Files to process.")
  args = parser.parse_args()

  for file_path in args.files:
    path = Path(file_path)
    original = path.read_text(encoding="utf-8")
    transformed = transform_text(original)
    if transformed != original:
      path.write_text(transformed, encoding="utf-8")


if __name__ == "__main__":
  sys.exit(main())
