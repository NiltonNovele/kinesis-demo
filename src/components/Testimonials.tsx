import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Leonor Matola",
    userName: "@leonor_m",
    comment:
      "O KinesisTalk trouxe novas oportunidades de networking e crescimento académico. Recomendo vivamente!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Carlos Mucavele",
    userName: "@cmucavele",
    comment:
      "Participei no último evento do KinesisTalk e fiquei impressionado com a qualidade dos debates e das intervenções.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Joana Mbanze",
    userName: "@joana_m",
    comment:
      "É inspirador ver jovens moçambicanos a liderar iniciativas que promovem o pensamento crítico e a inovação.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Daniel Cossa",
    userName: "@dcossa",
    comment:
      "O Kinesis é mais do que um evento — é uma plataforma que fortalece a nossa comunidade intelectual.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ana Lurdes",
    userName: "@ana_lurdes",
    comment:
      "Finalmente encontrei um espaço onde posso partilhar ideias com pessoas que pensam como eu. Obrigada, KinesisTalk!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Mauro Bila",
    userName: "@mbila",
    comment:
      "A organização dos eventos é excelente e o conteúdo é sempre relevante para os desafios actuais de Moçambique.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testemunhos" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        O Que Dizem Sobre o
        <span className="inline bg-gradient-to-r from-[#7CB8F2] to-[#3A63A8] text-transparent bg-clip-text">
          {" "}
          KinesisTalk
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8 max-w-3xl">
        Testemunhos reais de participantes que se juntaram a nós para
        transformar ideias em impacto.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(({ name, userName, comment }) => (
          <Card key={userName} className="break-inside-avoid">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{userName}</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="text-muted-foreground text-sm">
              {comment}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
