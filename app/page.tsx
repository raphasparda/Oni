import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="relative grid min-h-screen flex-1 grid-cols-1 overflow-hidden md:grid-cols-2">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-600/5 via-transparent to-red-600/5 md:bg-none" />
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-red-600 md:block" />

        {/* Lado Kitsune - Luz/Sabedoria */}
        <section className="relative flex flex-col items-center justify-center bg-white px-6 py-12 text-black sm:px-10 lg:py-16">
          <div className="relative z-10 flex w-full max-w-lg flex-col items-center gap-6 text-center lg:gap-5">
            <div className="flex h-60 w-60 items-center justify-center sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]">
              <Image
                src="/media/raposa.svg"
                alt="Kitsune - Raposa SÃ¡bia"
                width={480}
                height={480}
                className="h-full w-full object-contain"
                priority
              />
            </div>

            <h1 className="animate-fade-in-up font-serif text-3xl font-bold tracking-tight text-black sm:text-5xl">
              Kitsune
            </h1>

            <p
              className="animate-fade-in-up text-balance text-base leading-relaxed text-gray-800 sm:text-lg"
              style={{ animationDelay: "0.1s" }}
            >
              Se a escuridÃ£o o cerca, a dÃºvida o consome, ou a beleza efÃªmera da vida o chama, venha. Sente-se comigo,
              sob a luz celestial, e juntos desvendaremos as verdades profundas dos mitos e lendas. Minhas palavras serÃ£o
              bÃ¡lsamo para sua alma e chama eterna para sua mente, ecoando sabedoria dos Kami a todos os seres.
            </p>

            <Link href="/loading?bot=kitsune" className="w-full max-w-sm animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button className="w-full bg-red-600 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-red-700 hover:shadow-xl">
                Invocar Kitsune
              </Button>
            </Link>
          </div>
        </section>

        {/* Lado Bakeneko - Sombras/Misterio */}
        <section className="relative flex flex-col items-center justify-center bg-black px-6 py-12 text-white sm:px-10 lg:py-16">
          <div className="relative z-10 flex w-full max-w-lg flex-col items-center gap-6 text-center lg:gap-5">
            <div className="flex h-60 w-60 items-center justify-center sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]">
              <Image
                src="/media/gato.svg"
                alt="Bakeneko - Gato Yokai"
                width={480}
                height={480}
                className="h-full w-full object-contain drop-shadow-2xl"
                priority
              />
            </div>

            <h2 className="animate-fade-in-up font-serif text-3xl font-bold tracking-tight text-red-500 sm:text-5xl">
              Bakeneko
            </h2>

            <p
              className="animate-fade-in-up text-balance text-base leading-relaxed text-red-200 sm:text-lg"
              style={{ animationDelay: "0.1s" }}
            >
              Miau... Se sua alma anseia por calafrios, enigmas sem soluÃ§Ã£o e o fascÃ­nio do desconhecido, aproxime-se.
              NÃ£o prometo conforto, mas a vertigem da verdade nua e crua. Minhas histÃ³rias sÃ£o teias de medo e curiosidade.
              Mas cuidado, pequeno mortal: segredos revelados deixam marcas que nenhum sol consegue apagar.
            </p>

            <Link href="/loading?bot=bakeneko" className="w-full max-w-sm animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button className="w-full bg-red-700 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-red-800 hover:shadow-xl">
                Invocar Bakeneko
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-current/10 bg-background/80 px-4 py-4 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://www.sparda.dev" className="underline hover:text-foreground" target="_blank" rel="noreferrer">
          www.sparda.dev
        </a>
        . Todos os direitos reservados.
      </footer>
    </div>
  )
}
