import { OniChat } from "@/components/oni-chat"
import { redirect } from "next/navigation"

export default async function ChatPage({
  searchParams,
}: {
  searchParams: Promise<{ bot?: string }>
}) {
  const params = await searchParams
  const bot = params.bot

  if (bot !== "kitsune" && bot !== "bakeneko") {
    redirect("/")
  }

  return <OniChat bot={bot} />
}
