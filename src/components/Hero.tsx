import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#7CB8F2] to-[#3A63A8] text-transparent bg-clip-text">
              Kinesis
            </span>{" "}
            Mz
          </h1>{" "}
          {/* para{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#5C6972] via-[#7CB8F2] to-[#3A63A8] text-transparent bg-clip-text">
              developers
            </span>{" "}
            React
          </h2> */}
        </main>

        <p className="text-xl text-[#5C6972] md:w-10/12 mx-auto lg:mx-0">
          A Kinesis é uma empresa jovem focada em eletrónica. Construa páginas
          modernas e elegantes utilizando o sistema de design Kinesis e
          componentes UI potentes.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3 bg-[#3A63A8] hover:bg-[#2e4f89] text-white">
            Começar
          </Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })} border-[#3A63A8] text-[#3A63A8] hover:bg-[#3A63A8]/10`}
          >
            Linkedin
            <LinkedInLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Secção dos cartões hero */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Efeito de sombra */}
      <div className="shadow"></div>
    </section>
  );
};
