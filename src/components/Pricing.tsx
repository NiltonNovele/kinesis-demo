import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum EventStatusType {
  PAST = 0,
  UPCOMING = 1,
}

interface EventProps {
  title: string;
  status: EventStatusType;
  date: string;
  description: string;
  buttonText: string;
  details: string[];
}

const eventsList: EventProps[] = [
  {
    title: "KinesisTalk 2023",
    status: EventStatusType.PAST,
    date: "20 Nov 2023",
    description: "Exploração do futuro da biomecânica em África.",
    buttonText: "Ver Resumo",
    details: [
      "Centro de Conferências de Maputo",
      "Oradora: Dra. Ana Mabunda",
      "Tema: Movimentos que Transformam",
    ],
  },
  {
    title: "KinesisTalk 2024",
    status: EventStatusType.UPCOMING,
    date: "14 Set 2024",
    description: "Cimeira anual de inovação em fisioterapia em Moçambique.",
    buttonText: "Inscreve-te",
    details: [
      "Maputo Science Park",
      "Orador: Prof. Jorge Cossa",
      "Tema: O Futuro da Cinética",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="eventos" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Descobre os{" "}
        <span className="bg-gradient-to-b from-blue-500/60 to-blue-600 text-transparent bg-clip-text">
          Eventos KinesisTalk
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Dos marcos passados às possibilidades futuras.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsList.map((evento: EventProps) => (
          <Card
            key={evento.title}
            className={
              evento.status === EventStatusType.UPCOMING
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {evento.title}
                {evento.status === EventStatusType.UPCOMING ? (
                  <Badge variant="secondary" className="text-sm text-blue-600">
                    Em Breve
                  </Badge>
                ) : (
                  <Badge
                    variant="outline"
                    className="text-xs text-muted-foreground"
                  >
                    Evento Passado
                  </Badge>
                )}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{evento.date}</span>
              </div>
              <CardDescription>{evento.description}</CardDescription>
            </CardHeader>

            <CardContent>
              {/* Espaço reservado para imagem do evento */}
              <div className="w-full h-40 bg-muted rounded-lg mb-4 flex items-center justify-center text-muted-foreground text-sm">
                Imagem do evento
              </div>

              <Button className="w-full">{evento.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {evento.details.map((detalhe: string) => (
                  <span key={detalhe} className="flex">
                    <Check className="text-blue-500" />
                    <h3 className="ml-2">{detalhe}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
