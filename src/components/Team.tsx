"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/manu.jpg",
    name: "Manuel Da Costa Neto",
    position: "CEO e Fundador",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/manuel-da-costa-neto-92049520a/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "/devon.jpg",
    name: "Devon (Andes) Mussivame",
    position: "Diretor Financeiro",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "/teolis.jpg",
    name: "Teolisa Nhangumele",
    position: "Gestora de Projectos",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      case "Facebook":
        return <Facebook size="20" />;
      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section id="equipa" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Conhece a{" "}
        <span className="bg-gradient-to-b from-blue-500/70 to-blue-600 text-transparent bg-clip-text">
          Equipa Kinesis
        </span>
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Uma equipa jovem, determinada e apaixonada por inovação. Juntos,
        impulsionamos o futuro do movimento estudantil Moçambicano.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center shadow-lg rounded-2xl"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover border-4 border-white shadow-md"
                />
                <CardTitle className="text-center text-lg">{name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center text-sm text-muted-foreground px-4 pb-2">
                Comprometido(a) com o crescimento da juventude e com a visão de
                um Moçambique mais conectado, justo e inovador.
              </CardContent>

              <CardFooter className="flex gap-2">
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <a
                    key={name}
                    rel="noreferrer noopener"
                    href={url}
                    target="_blank"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
