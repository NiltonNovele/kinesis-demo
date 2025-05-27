import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Colaboração Tecnológica",
    description:
      "Facilitamos a cooperação entre equipas e indivíduos, promovendo projetos colaborativos inovadores e inclusivos.",
    icon: <ChartIcon />,
  },
  {
    title: "Gestão de Projetos",
    description:
      "Apoiamos a organização e execução eficaz de iniciativas digitais que promovem o crescimento sustentável.",
    icon: <WalletIcon />,
  },
  {
    title: "Automatização de Tarefas",
    description:
      "Implementamos soluções inteligentes para otimizar processos e aumentar a produtividade nas operações diárias.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-kinesis-blue/70 to-kinesis-blue text-transparent bg-clip-text">
              Serviços{" "}
            </span>
            Kinesis
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Oferecemos soluções tecnológicas centradas no utilizador, alinhadas
            com as necessidades do mercado moçambicano e global.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-kinesis-blue/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle className="text-kinesis-blue">{title}</CardTitle>
                    <CardDescription className="text-md mt-2 text-kinesis-muted">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Imagem ilustrativa dos serviços Kinesis"
        />
      </div>
    </section>
  );
};
