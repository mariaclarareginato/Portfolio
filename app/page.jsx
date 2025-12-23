"use client";


import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Phone, Mail, MapPin, MessageCircle, Sun, Moon } from "lucide-react";
import { Button } from "../components/ui/button";
import { useTheme } from "next-themes";
import "flag-icons/css/flag-icons.min.css";

import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiGithub 
} from "react-icons/si";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Separator } from "@radix-ui/react-dropdown-menu";

export default function HomePage() {
  const { setTheme } = useTheme();

  return (
    <main className="p-10 max-w-5xl mx-auto space-y-10">

      {/* FOTO + NOME */}
      <div className="flex flex-col items-center">
        <img
          src="/maria.png"
          alt="Maria Clara Reginato"
          width={160}
          height={160}
          className="rounded-[60px] shadow-lg mb-4"
        />
        <h1 className="text-4xl font-bold text-center font-serif">
          Maria Clara Reginato
        </h1>
      </div>

      {/* TROCA DE TEMAS */}
      <div className="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="flex items-center gap-1">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="text-lg font-semibold" onClick={() => setTheme("light")}>Tema claro</DropdownMenuItem>
            <DropdownMenuItem className="text-lg font-semibold" onClick={() => setTheme("dark")}>Tema escuro</DropdownMenuItem>
            <DropdownMenuItem className="text-lg font-semibold" onClick={() => setTheme("system")}>Tema do sistema</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <br></br>
      {/* CONTATOS */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 text-center">

  {/* TELEFONE */}
  <div className="flex items-center justify-center gap-2">
    <Phone className="w-5 h-5" />
    <span className="text-base text-md">
      +55 11 91407-3895
    </span>
  </div>

  {/* EMAIL */}
  <div className="flex items-center justify-center gap-2">
    <Mail className="w-5 h-5" />
    <span className="text-base text-md">
      mariaclarareginato8@gmail.com
    </span>
  </div>

  {/* ENDEREÇO */}
  <div className="flex items-center justify-center gap-2
                  sm:col-span-2 lg:col-span-2">
    <MapPin className="w-5 h-5" />
    <span className="text-base text-md text-center">
      São Caetano do Sul, São Paulo, Brasil
    </span>
  </div>

</div>


      {/* IDIOMAS */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">

  {/* TÍTULO */}
  <h1 className="col-span-1 sm:col-span-2 lg:col-span-3 
                 text-2xl font-semibold mb-4">
    Idiomas:
  </h1>

  {/* PORTUGUÊS */}
  <div className="flex flex-col items-center">
    <span className="fi fi-br text-6xl sm:text-7xl 
                     hover:scale-125 transition-transform duration-300 rounded-2xl"></span>
   <p className="text-lg mt-4">
   Português (Nativo)
   </p>

  </div>

  {/* INGLÊS */}
  <div className="flex flex-col items-center">
    <span className="fi fi-us text-6xl sm:text-7xl 
                     hover:scale-125 transition-transform duration-300 rounded-2xl"></span>
    <p className="text-lg mt-4">
      Inglês (Fluente)
    </p>
  </div>

  {/* ESPANHOL */}
  <div className="flex flex-col items-center">
    <span className="fi fi-es text-6xl sm:text-7xl 
                     hover:scale-125 transition-transform duration-300 rounded-2xl"></span>
    <p className="text-lg mt-4">
      Espanhol (Básico)
    </p>
  </div>

</div>



      {/* HABILIDADES + PROJETOS */}
      <Accordion type="single" collapsible className="w-full text-center">

        {/* Habilidades */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-xl justify-center">Habilidades</AccordionTrigger>
          <AccordionContent>
            {/* Tecnológicas */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Tecnológicas:</h2>
              <br></br>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-6 justify-items-center text-4xl">
                <SiHtml5 className="text-orange-500 hover:scale-125 transition-transform" />
                <SiCss3 className="text-blue-600 hover:scale-125 transition-transform" />
                <SiJavascript className="text-yellow-400 hover:scale-125 transition-transform" />
                <SiReact className="text-sky-500 hover:scale-125 transition-transform" />
                <SiNextdotjs className="text-black hover:scale-125 transition-transform" />
                <SiTailwindcss className="text-cyan-400 hover:scale-125 transition-transform" />
                <SiNodedotjs className="text-green-500 hover:scale-125 transition-transform" />
                <SiGithub className="text-gray-800 hover:scale-125 transition-transform" />
              </div>
            </div>

            {/* Pessoais */}
            <div className="mt-10 flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold mb-4">Pessoais:</h2>
              <ul className="list-disc list-inside text-left max-w-md text-lg">
                <li className="m-5">Trabalho em equipe</li>
                <li className="m-5">Organização</li>
                <li className="m-5">Calma em resolução de problemas</li>
                <li className="m-5">Flexibilidade</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Projetos */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold text-xl justify-center">Projetos</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-4 mt-4 text-lg font-semibold">Explore meu GitHub e confira meus projetos</h3>
            <a
              href="https://github.com/mariaclarareginato"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 justify-center hover:scale-110 transition-transform"
            >
              <SiGithub className="w-20 h-20" />
            </a>
          </AccordionContent>
        </AccordionItem>

      </Accordion>

      {/* FOOTER */}
      <Separator></Separator>
      <footer className="text-center mt-10">
        &copy; {new Date().getFullYear()} Todos os direitos reservados.
      </footer>
      
    </main>
  )
};
