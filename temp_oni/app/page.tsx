import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative flex min-h-screen overflow-hidden">
      <div className="absolute left-1/2 top-0 z-20 h-full w-px -translate-x-1/2 bg-red-600" />

      {/* Lado Kitsune - Luz/Sabedoria */}
      <div className="relative flex w-1/2 flex-col items-center justify-center bg-white p-8 text-black">
        <div className="relative z-10 flex w-full max-w-md flex-col items-center">
          {/* Ícone - altura fixa */}
          <div className="mb-8 flex h-32 items-center justify-center">
            <Image
              src="https://raw.githubusercontent.com/raphasparda/midia/main/raposa.svg"
              alt="Kitsune - Raposa Sábia"
              width={120}
              height={120}
              className="drop-shadow-lg"
            />
          </div>

          {/* Título - altura fixa */}
          <div className="mb-8 flex h-16 items-center justify-center">
            <h1 className="animate-fade-in-up font-serif text-5xl font-bold tracking-tight text-black">Kitsune</h1>
          </div>

          {/* Descrição - altura fixa */}
          <div className="mb-8 flex h-48 items-center justify-center">
            <p
              className="animate-fade-in-up text-pretty text-center text-base leading-relaxed text-gray-800"
              style={{ animationDelay: "0.1s" }}
            >
              Se a escuridão o cerca, a dúvida o consome, ou a beleza efêmera da vida o chama, venha. Sente-se comigo,
              sob a luz celestial, e juntos desvendaremos as verdades profundas dos mitos e lendas. Minhas palavras
              serão bálsamo para sua alma e chama eterna para sua mente, ecoando sabedoria dos Kami a todos os seres.
            </p>
          </div>

          {/* Botão */}
          <Link href="/chat?bot=kitsune" className="w-full animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="w-full bg-red-600 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-red-700 hover:shadow-xl"
            >
              Invocar Kitsune
            </Button>
          </Link>
        </div>
      </div>

      {/* Lado Bakeneko - Sombras/Mistério */}
      <div className="relative flex w-1/2 flex-col items-center justify-center bg-black p-8 text-white">
        <div className="relative z-10 flex w-full max-w-md flex-col items-center">
          {/* Ícone - altura fixa */}
          <div className="mb-8 flex h-32 items-center justify-center">
            <Image
              src="https://raw.githubusercontent.com/raphasparda/midia/main/gato.svg"
              alt="Bakeneko - Gato Yokai"
              width={120}
              height={120}
              className="drop-shadow-2xl"
            />
          </div>

          {/* Título - altura fixa */}
          <div className="mb-8 flex h-16 items-center justify-center">
            <h1 className="animate-fade-in-up font-serif text-5xl font-bold tracking-tight text-red-500">Bakeneko</h1>
          </div>

          {/* Descrição - altura fixa */}
          <div className="mb-8 flex h-48 items-center justify-center">
            <p
              className="animate-fade-in-up text-pretty text-center text-base leading-relaxed text-red-200"
              style={{ animationDelay: "0.1s" }}
            >
              Miau... Se sua alma anseia por calafrios, enigmas sem solução e o fascínio do desconhecido, aproxime-se.
              Não prometo conforto, mas a vertigem da verdade nua e crua, a emoção do que jaz oculto na noite. Minhas
              histórias são teias de aranha de medo e curiosidade. Mas cuidado, pequeno mortal, pois alguns segredos,
              uma vez revelados, deixarão marcas em sua alma que nem o sol mais brilhante pode apagar.
            </p>
          </div>

          {/* Botão */}
          <Link href="/chat?bot=bakeneko" className="w-full animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="w-full bg-red-700 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-red-800 hover:shadow-xl"
            >
              Invocar Bakeneko
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
