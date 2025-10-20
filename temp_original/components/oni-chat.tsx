"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

interface OniChatProps {
  bot: "kitsune" | "bakeneko"
}

export function OniChat({ bot }: OniChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setIsTyping(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.content,
          bot,
          history: messages,
        }),
      })

      const data = await response.json()

      await new Promise((resolve) => setTimeout(resolve, 400))
      setIsTyping(false)

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error)
      setIsTyping(false)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Desculpe, ocorreu um erro. Por favor, tente novamente.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const isKitsune = bot === "kitsune"
  const bgColor = isKitsune ? "bg-white" : "bg-black"
  const textColor = isKitsune ? "text-black" : "text-white"
  const accentColor = isKitsune ? "bg-red-600 hover:bg-red-700" : "bg-red-700 hover:bg-red-800"
  const botName = isKitsune ? "Kitsune" : "Bakeneko"
  const botIcon = isKitsune
    ? "https://raw.githubusercontent.com/raphasparda/midia/main/raposa.svg"
    : "https://raw.githubusercontent.com/raphasparda/midia/main/gato.svg"
  const userBubbleColor = isKitsune
    ? "bg-red-50 text-black border border-red-200"
    : "bg-gray-900 text-white border border-red-900"
  const botBubbleColor = isKitsune
    ? "bg-gray-50 text-black border border-gray-200"
    : "bg-gray-950 text-red-100 border border-red-950"

  return (
    <div className={`flex min-h-screen flex-col ${bgColor} ${textColor}`}>
      {/* Header */}
      <header className="border-b border-current/10 p-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className={textColor}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <Image src={botIcon || "/placeholder.svg"} alt={botName} width={48} height={48} className="animate-float" />
            <h1 className="text-2xl font-bold">{botName}</h1>
          </div>
          <div className="w-20" />
        </div>
      </header>

      {/* Chat Area */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="mx-auto max-w-4xl space-y-4">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
              <Image
                src={botIcon || "/placeholder.svg"}
                alt={botName}
                width={120}
                height={120}
                className="animate-float opacity-50"
              />
              <p className="text-lg opacity-70">
                {isKitsune
                  ? "Bem-vindo, viajante. Pergunte-me sobre histórias de esperança, amor, coragem e sabedoria."
                  : "As sombras te dão boas-vindas... Pergunte-me sobre os segredos sombrios da mitologia japonesa."}
              </p>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`flex animate-fade-in-up ${message.role === "user" ? "justify-end" : "justify-start"}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`flex max-w-[80%] gap-3 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                {message.role === "assistant" && (
                  <div className="flex-shrink-0">
                    <Image
                      src={botIcon || "/placeholder.svg"}
                      alt={botName}
                      width={56}
                      height={56}
                      className="rounded-full border-2 border-current/20"
                    />
                  </div>
                )}
                <div
                  className={`rounded-lg p-4 ${
                    message.role === "user" ? userBubbleColor : botBubbleColor
                  } shadow-md transition-all hover:shadow-lg`}
                >
                  <div className="whitespace-pre-wrap break-words leading-relaxed">{message.content}</div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex animate-fade-in-up justify-start">
              <div className="flex max-w-[80%] gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src={botIcon || "/placeholder.svg"}
                    alt={botName}
                    width={56}
                    height={56}
                    className="animate-pulse rounded-full border-2 border-current/20"
                  />
                </div>
                <div className={`rounded-lg p-4 ${botBubbleColor} shadow-md`}>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 animate-campfire rounded-full bg-red-600" />
                    <div
                      className="h-2 w-2 animate-campfire rounded-full bg-red-600"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="h-2 w-2 animate-campfire rounded-full bg-red-600"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t border-current/10 p-4">
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-4xl gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isKitsune ? "Digite sua mensagem..." : "Ouse fazer uma pergunta às sombras..."}
            className={`flex-1 transition-all focus:scale-[1.01] ${isKitsune ? "border-gray-300 bg-white text-black" : "border-red-900 bg-gray-950 text-white"}`}
            disabled={isLoading}
          />
          <Button type="submit" className={`${accentColor} transition-all hover:scale-105`} disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}
