import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Missão",
    description:
      "Conectar pessoas e empresas em Moçambique para impulsionar a transformação digital e o crescimento sustentável.",
  },
  {
    icon: <MapIcon />,
    title: "Visão",
    description:
      "Ser a principal plataforma de inovação tecnológica que promove o desenvolvimento inclusivo e colaborativo em África.",
  },
  {
    icon: <PlaneIcon />,
    title: "Propósito",
    description:
      "Facilitar o acesso à tecnologia e conhecimento, criando pontes que conectem comunidades locais e globais.",
  },
  {
    icon: <GiftIcon />,
    title: "Valores",
    description:
      "Inovação, transparência, colaboração e compromisso com o impacto social positivo.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Como a{" "}
        <span className="inline bg-gradient-to-r from-[#7CB8F2] to-[#3A63A8] text-transparent bg-clip-text">
          Kinesis
        </span>{" "}
        Funciona
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-kinesis-muted">
        Conheça a nossa missão, visão, propósito e valores que orientam cada
        passo da KinesisMz e KinesisTalk.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50 border border-kinesis-blue">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center text-kinesis-blue">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-kinesis-muted">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
