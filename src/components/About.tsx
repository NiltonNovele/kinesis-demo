import { Statistics } from "./Statistics";
import { useEffect, useState } from "react";

export const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // simples efeito fade-in após montar o componente
    setVisible(true);
  }, []);

  return (
    <section id="about" className="container py-24 sm:py-32">
      <div
        className="bg-muted/30 border border-kinesis-blue rounded-lg py-14 px-6 sm:px-12 transition-opacity duration-700 ease-in-out"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center">
          <img
            src="/kin1.png"
            alt="Imagem representativa da Kinesis"
            className="w-[300px] md:w-[400px] object-contain rounded-lg shadow-lg drop-shadow-md transition-transform duration-700 ease-in-out hover:scale-[1.05]"
            style={{ opacity: visible ? 1 : 0, transitionDelay: "0.2s" }}
          />
          <div
            className="flex flex-col justify-between max-w-xl"
            style={{ opacity: visible ? 1 : 0, transitionDelay: "0.4s" }}
          >
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                <span className="bg-gradient-to-b from-kinesis-blue/80 to-kinesis-blue text-transparent bg-clip-text">
                  Sobre a
                </span>{" "}
                <span className="text-kinesis-orange">KinesisMz</span> &{" "}
                <span className="text-kinesis-orange">KinesisTalk</span>
              </h2>
              <p className="text-lg text-kinesis-muted mt-6 leading-relaxed">
                A <strong>KinesisMz</strong> é a plataforma líder em inovação
                digital em Moçambique, conectando pessoas, empresas e tecnologia
                para impulsionar o desenvolvimento sustentável do país.
              </p>
              <p className="text-lg text-kinesis-muted mt-4 leading-relaxed">
                Com a <strong>KinesisTalk</strong>, criamos um espaço dinâmico e
                colaborativo para partilha de conhecimento, networking e fomento
                da cultura tecnológica, tanto local como internacional.
              </p>
              <p className="text-lg text-kinesis-muted mt-4 leading-relaxed">
                Juntos, estamos a construir pontes para o futuro, promovendo
                inovação, empreendedorismo e transformação digital, sempre com
                um toque humano e de proximidade.
              </p>
            </div>

            <button
              type="button"
              className="mt-4 w-max rounded-md bg-kinesis-orange px-6 py-3 font-semibold text-white shadow-md hover:bg-kinesis-orange/90 transition"
              onClick={() =>
                alert("Obrigado pelo interesse! Mais novidades em breve.")
              }
            >
              Saiba Mais
            </button>

            <div className="mt-10">
              <Statistics />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
