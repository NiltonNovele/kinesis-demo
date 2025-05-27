import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "O que é a KinesisMz?",
    answer:
      "A KinesisMz é uma plataforma digital que oferece soluções inovadoras para a comunidade moçambicana na Cidade do Cabo, promovendo conectividade e serviços locais.",
    value: "item-1",
  },
  {
    question: "Como posso participar no KinesisTalk?",
    answer:
      "Para participar no KinesisTalk, basta inscrever-se na nossa plataforma, onde poderá interagir, assistir a palestras e eventos online em direto e gravados.",
    value: "item-2",
  },
  {
    question: "Quais os benefícios de usar a KinesisMz?",
    answer:
      "Com a KinesisMz, tens acesso a conteúdos exclusivos, eventos comunitários, suporte local e uma rede de contactos que facilita a tua integração e crescimento pessoal e profissional.",
    value: "item-3",
  },
  {
    question: "Posso ouvir o KinesisTalk em qualquer dispositivo?",
    answer:
      "Sim, o KinesisTalk está disponível em múltiplas plataformas, incluindo computadores, tablets e smartphones, para que possas acompanhar onde e quando quiseres.",
    value: "item-4",
  },
  {
    question: "Como faço para entrar em contacto com o suporte da KinesisMz?",
    answer:
      "Podes contactar o suporte através do nosso formulário de contacto no website ou pelo email oficial, disponível na secção de contacto da plataforma.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Perguntas Frequentes{" "}
        <span className="bg-gradient-to-b from-blue-600/60 to-blue-600 text-transparent bg-clip-text">
          (FAQ)
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Ainda tens dúvidas?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-blue-600 transition-all border-blue-600 hover:border-b-2"
        >
          Contacta-nos
        </a>
      </h3>
    </section>
  );
};
