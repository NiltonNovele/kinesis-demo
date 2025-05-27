import { Radar } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "SyncTechX",
  },
  {
    icon: <Radar size={34} />,
    name: "SyncTechX",
  },
  {
    icon: <Radar size={34} />,
    name: "SyncTechX",
  },
  {
    icon: <Radar size={34} />,
    name: "Parceiro 4",
  },
  {
    icon: <Radar size={34} />,
    name: "Parceiro 5",
  },
  {
    icon: <Radar size={34} />,
    name: "Parceiro 6",
  },
];

export const Sponsors = () => {
  return (
    <section id="patrocinadores" className="container pt-24 sm:py-32">
      <h2 className="text-center text-lg lg:text-2xl font-extrabold mb-8 text-kinesis-blue">
        Parceiros
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-3 text-kinesis-muted"
          >
            <span>{icon}</span>
            <h3 className="text-xl font-semibold text-kinesis-orange">
              {name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
