import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Quem Somos",
    description:
      "Somos a KinesisMz, uma plataforma dedicada a impulsionar a transformação digital em Moçambique, conectando pessoas, empresas e tecnologia para construir um futuro mais inovador e inclusivo.",
    image: image4,
  },
  {
    title: "O Que Fazemos",
    description:
      "Através da KinesisTalk, criamos um espaço para partilha de conhecimento, networking e colaboração entre a comunidade tecnológica local e internacional, promovendo o desenvolvimento sustentável e a inovação.",
    image: image3,
  },
  {
    title: "Porquê Escolher-nos",
    description:
      "Comprometemo-nos com a excelência, inovação e impacto social, oferecendo soluções tecnológicas adaptadas às necessidades de Moçambique, com um toque humano e foco na comunidade.",
    image: image,
  },
];

const featureList: string[] = [
  "Inovação constante",
  "Comunidade ativa",
  "Soluções personalizadas",
  "Suporte dedicado",
  "Foco em Moçambique",
  "Parcerias estratégicas",
  "Tecnologia acessível",
  "Plataforma segura",
  "Crescimento sustentável",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Muitas{" "}
        <span className="inline bg-gradient-to-r from-[#7CB8F2] to-[#3A63A8] text-transparent bg-clip-text">
          Características de Valor
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card
            key={title}
            className="inline bg-gradient-to-r from-[#7CB8F2] to-[#3A63A8] text-transparent bg-clip-text"
          >
            <CardHeader>
              <CardTitle className="text-kinesis-blue">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-kinesis-muted">
              {description}
            </CardContent>

            <CardFooter>
              <img
                src={image}
                alt={title}
                className="w-[200px] lg:w-[300px] mx-auto rounded-lg shadow-md"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
