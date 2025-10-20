export function generateVariants(term: string): string[] {
  const variants = new Set<string>()
  const base = term

  const add = (value: string) => {
    if (value && value.length > 2) {
      variants.add(value)
    }
  }

  add(base)

  if (base.endsWith("oes")) add(base.slice(0, -3) + "ao")
  if (base.endsWith("aes")) add(base.slice(0, -3) + "ao")
  if (base.endsWith("aos")) add(base.slice(0, -3) + "ao")
  if (base.endsWith("coes")) add(base.slice(0, -3) + "cao")
  if (base.endsWith("goes")) add(base.slice(0, -3) + "gao")
  if (base.endsWith("res")) add(base.slice(0, -2))
  if (base.endsWith("is")) add(base.slice(0, -2) + "il")
  if (base.endsWith("ns")) add(base.slice(0, -2) + "m")
  if (base.endsWith("es")) add(base.slice(0, -2))
  if (base.endsWith("s")) add(base.slice(0, -1))

  return Array.from(variants)
}

export function lexicalEqual(a: string, b: string): boolean {
  const variantsA = generateVariants(a)
  const variantsB = generateVariants(b)

  for (const va of variantsA) {
    for (const vb of variantsB) {
      if (va === vb) {
        return true
      }
      if (va.length > 3 && vb.length > 3 && (va.startsWith(vb) || vb.startsWith(va))) {
        return true
      }
    }
  }

  return false
}

export function lexicalIncludes(haystack: string, needle: string): boolean {
  const hayVariants = generateVariants(haystack)
  const needleVariants = generateVariants(needle)

  for (const hv of hayVariants) {
    for (const nv of needleVariants) {
      if (hv.length > 3 && nv.length > 3 && (hv.includes(nv) || nv.includes(hv))) {
        return true
      }
    }
  }

  return false
}
