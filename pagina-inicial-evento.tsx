import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ConfrariaCIOFloripa() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#00008B] text-white">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Confraria CIO Floripa</span>
          <Users className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Confraria CIO Floripa</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#sobre">
            Sobre
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#avatar">
            Avatar IA
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#detalhes">
            Detalhes
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#00008B] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Bem-vindo à Confraria CIO Floripa
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Conheça nosso Avatar IA e descubra tudo sobre o principal evento de networking para CIOs e líderes de TI em Florianópolis
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#avatar">
                  <Button variant="outline" size="lg" className="bg-red-600 text-white hover:bg-red-700">
                    Converse com o Avatar IA
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-[#00008B]">Sobre o Evento</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
              A Confraria CIO Floripa é um encontro exclusivo de Chief Information Officers e líderes de TI de Florianópolis e regiões vizinhas. 
              Este evento oferece uma oportunidade única de networking, compartilhamento de insights e discussão das últimas tendências em tecnologia e negócios.
            </p>
          </div>
        </section>
        <section id="avatar" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#00008B]">Converse com Nosso Avatar IA</h2>
            <div className="grid gap-10 lg:grid-cols-2">
              <Card className="w-full">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Embed do Vídeo Interativo Heygen Aqui</p>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#00008B]">Como Funciona</h3>
                <p className="text-gray-600">
                  Nosso Avatar IA está pronto para responder todas as suas perguntas sobre a Confraria CIO Floripa. 
                  Basta interagir com o vídeo ao lado para obter informações sobre:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Programação do evento</li>
                  <li>Palestrantes convidados</li>
                  <li>Tópicos de discussão</li>
                  <li>Informações sobre inscrição</li>
                  <li>E muito mais!</li>
                </ul>
                <div className="pt-4">
                  <Button className="bg-red-600 text-white hover:bg-red-700">
                    <MessageCircle className="mr-2 h-4 w-4" /> Iniciar Conversa
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="detalhes" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#00008B]">Detalhes do Evento</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00008B]">Data</h3>
                  <p className="text-gray-600">15 de Setembro de 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00008B]">Horário</h3>
                  <p className="text-gray-600">18:00 - 21:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00008B]">Local</h3>
                  <p className="text-gray-600">Tech Hub Floripa, Centro de Florianópolis</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-red-600 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00008B]">Participantes</h3>
                  <p className="text-gray-600">Limitado a 50 CIOs e líderes de TI</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 Confraria CIO Floripa. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  )
}