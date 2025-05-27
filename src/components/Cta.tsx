import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 gap-8 place-items-center">
        {/* Texto e botões */}
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="inline bg-gradient-to-r from-[#7CB8F2] to-[#3A63A8] text-transparent bg-clip-text">
              KinesisTalk
            </span>{" "}
            — Conversas com Impacto
          </h2>
          <p className="text-muted-foreground text-lg mt-4 mb-8">
            Uma iniciativa que conecta jovens, profissionais e empreendedores
            moçambicanos num espaço de diálogo aberto sobre tecnologia,
            inovação, cultura e desenvolvimento.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="default"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/kinesismz",
                  "_blank"
                )
              }
            >
              Visita o nosso LinkedIn
            </Button>

            <Button
              variant="outline"
              className="w-full md:w-auto"
              onClick={() => (window.location.href = "#eventos")}
            >
              Ver Eventos
            </Button>
            <Button
              variant="ghost"
              className="w-full md:w-auto"
              onClick={() => (window.location.href = "#contacto")}
            >
              Participa
            </Button>
          </div>
        </div>

        {/* Imagem */}
        <div className="mt-12 lg:mt-0 lg:col-start-2">
          <img
            src="/talk.jpg"
            alt="Prévia visual do KinesisTalk"
            className="w-full max-w-md rounded-2xl shadow-md object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
