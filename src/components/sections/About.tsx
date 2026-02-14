import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary leading-tight">
          Sobre Mim
        </h2>

        <Card className="p-8 md:p-12 max-w-4xl mx-auto border-4 border-primary/40 bg-card hover:border-primary transition-all duration-300">
          <div className="space-y-6 text-base md:text-lg text-foreground leading-relaxed">
            <p>
              Atualmente estou em busca da minha primeira oportunidade
              profissional como desenvolvedora, com o objetivo de integrar um
              time onde eu possa aplicar meus conhecimentos em desenvolvimento
              full-stack e evoluir por meio de desafios reais.
            </p>

            <p>
              Tenho me dedicado à construção de projetos práticos, ao
              aprofundamento em boas práticas de engenharia de software e à
              compreensão de como tecnologia e produto caminham juntos para
              gerar valor aos usuários.
            </p>

            <p>
              Busco um ambiente colaborativo, orientado à qualidade e
              aprendizado contínuo, onde eu possa contribuir com
              responsabilidade, organização e vontade constante de crescer
              profissionalmente.
            </p>
          </div>
          <div className="space-y-6 text-base md:text-lg text-foreground leading-relaxed">
            <p>
              I am currently seeking my first professional opportunity as a
              developer, aiming to join a team where I can apply my full-stack
              development skills and continue growing through real-world
              challenges.
            </p>
            <p>
              I have been consistently building practical projects, deepening my
              knowledge of software engineering best practices, and developing a
              strong understanding of how technology and product work together
              to create value for users.
            </p>
            <p>
              I am looking for a collaborative, quality-driven environment that
              values continuous learning, where I can contribute with
              responsibility, organization, and a strong commitment to
              professional growth.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
