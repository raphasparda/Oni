"use client"

import { useEffect, useMemo } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function LoadingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const botKey = (searchParams.get("bot") ?? "kitsune").toLowerCase()

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      router.replace(`/chat?bot=${encodeURIComponent(botKey)}`)
    }, 3000)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [botKey, router])

  const message = useMemo(() => {
    if (botKey === "bakeneko") {
      return "Abrindo o portal entre sombras e segredos..."
    }
    return "Acendendo lanternas e invocando as histórias ancestrais..."
  }, [botKey])

  const isBakeneko = botKey === "bakeneko"

  return (
    <>
      <style jsx global>{`
        html,
        body {
          height: 100%;
        }

        body {
          margin: 0;
          background: ${isBakeneko ? "#030202" : "#ffffff"};
          color: ${isBakeneko ? "#f5f5f5" : "#111111"};
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Cinzel", "Times New Roman", serif;
        }
      `}</style>

      <div className="loading-wrapper" role="status" aria-live="polite">
        <img
          src={isBakeneko ? "https://raw.githubusercontent.com/raphasparda/midia/main/yang.svg" : "https://raw.githubusercontent.com/raphasparda/midia/main/ying.svg"}
          alt="Símbolo yin yang"
          className="yin-yang"
        />

        <p className="loading-message">{message}</p>
      </div>

      <style jsx>{`
        .loading-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.75rem;
          text-align: center;
        }

        .yin-yang {
          position: relative;
          width: clamp(220px, 28vw, 300px);
          animation: spin 12s linear infinite;
          filter: drop-shadow(0 0 22px rgba(163, 6, 6, 0.35));
        }

        .loading-message {
          margin: 0;
          font-size: clamp(1.05rem, 2vw, 1.4rem);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${isBakeneko ? "rgba(245, 245, 245, 0.9)" : "rgba(26, 26, 26, 0.8)"};
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </>
  )
}
