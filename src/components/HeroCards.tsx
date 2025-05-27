import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testemunho */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-lg shadow-[#050834]/60 bg-[#050834] text-[#D5D5D5]">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="https://github.com/shadcn.png" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg text-[#7CB8F2]">João React</CardTitle>
            <CardDescription className="text-[#D5D5D5] opacity-80">
              @joao_react
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-[#D5D5D5]">
          Esta landing page está brutal!
        </CardContent>
      </Card>

      {/* Equipa */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-lg shadow-[#050834]/60 bg-[#050834] text-[#D5D5D5]">
        <CardHeader className="mt-8 flex justify-center items-center pb-2 relative">
          <img
            src="/manuel.png"
            alt="Avatar do utilizador"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover border-2 border-[#7CB8F2]"
          />
          <CardTitle className="text-center text-[#7CB8F2]">
            Manuel Da Costa Neto
          </CardTitle>
          <CardDescription className="font-normal text-[#3A63A8]">
            Chief Executive Officer at Kinesis Talk
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-2 text-[#D5D5D5]">
          <p>
            É sempre um prazer falar com os futuros líderes do nosso mundo. No
            fundo, eles só precisam do empurrão certo na direção daquilo que já
            desejam.
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://github.com/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Ícone do GitHub</span>
              <GitHubLogoIcon className="w-5 h-5 text-[#7CB8F2]" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Ícone do X</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-[#7CB8F2]"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/manuel-da-costa-neto-92049520a/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Ícone do LinkedIn</span>
              <Linkedin size={20} className="text-[#7CB8F2]" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Plano Gratuito */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-lg shadow-[#050834]/60 bg-[#050834] text-[#D5D5D5]">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-[#7CB8F2]">
            Gratuito
            <Badge
              variant="secondary"
              className="text-sm text-[#3A63A8] bg-[#D5D5D5]/20"
            >
              Mais popular
            </Badge>
          </CardTitle>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-[#D5D5D5]">€0</span>
            <span className="text-[#5C6972]">/mês</span>
          </div>
          <CardDescription className="text-[#D5D5D5] opacity-80">
            Perfeito para começar a explorar as soluções da Kinesis.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full bg-[#7CB8F2] hover:bg-[#3A63A8] text-[#050834]">
            Começar Teste Gratuito
          </Button>
        </CardContent>
        <hr className="w-4/5 m-auto mb-4 border-[#3A63A8]" />
        <CardFooter className="flex">
          <div className="space-y-4 text-[#D5D5D5]">
            {[
              "4 membros na equipa",
              "4 GB de armazenamento",
              "Até 6 páginas",
            ].map((benefit: string) => (
              <span key={benefit} className="flex items-center">
                <Check className="text-[#7CB8F2]" />
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Funcionalidade */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-lg shadow-[#050834]/60 bg-[#050834] text-[#D5D5D5]">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-[#7CB8F2]/20 p-1 rounded-2xl text-[#7CB8F2]">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle className="text-[#7CB8F2]">
              Modo claro e escuro
            </CardTitle>
            <CardDescription className="text-md mt-2 text-[#D5D5D5] opacity-80">
              Alterna entre modos claro e escuro com um clique — simples e
              intuitivo.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* Arduino e KinesisTalk */}
      <Card className="absolute bottom-[20px] left-0 w-[320px] drop-shadow-lg shadow-[#050834]/60 bg-[#050834] text-[#D5D5D5]">
        <CardHeader>
          <CardTitle className="text-[#7CB8F2]">
            Arduino & KinesisTalk
          </CardTitle>
          <CardDescription className="mt-2 text-[#D5D5D5] opacity-90">
            O Arduino é uma plataforma de prototipagem eletrônica de código
            aberto ideal para iniciantes e makers. Com ele, jovens podem
            explorar programação e hardware de forma prática.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-[#D5D5D5]">
          <p>
            A <strong className="text-[#7CB8F2]">KinesisTalk</strong>, filha da{" "}
            <strong className="text-[#7CB8F2]">KinesisMz</strong>, promove
            eventos e palestras para capacitar jovens em áreas como tecnologia,
            inovação e empreendedorismo.
          </p>
          <a
            href="https://kinesismz.com/kinesistalk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#7CB8F2] mt-2 inline-block"
          >
            Visitar KinesisTalk →
          </a>
        </CardContent>
      </Card>
    </div>
  );
};
