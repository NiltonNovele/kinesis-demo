export const Statistics = () => {
  interface StatsProps {
    quantity: string;
    description: string;
  }

  const stats: StatsProps[] = [
    {
      quantity: "2.7K+",
      description: "Utilizadores Ativos",
    },
    {
      quantity: "1.8K+",
      description: "Inscritos na KinesisTalk",
    },
    {
      quantity: "50+",
      description: "Eventos Realizados",
    },
    {
      quantity: "4",
      description: "Produtos & Serviços",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: StatsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">{quantity}</h2>
            <p className="text-xl text-kinesis-muted">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
