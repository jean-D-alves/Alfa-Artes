import { Carousel } from "./Carrocel";

export default function Portfólio() {
  return (
    <section className="p-4" id="portfolio">
      <p className="font-display">
        <small>PORTFOLIO</small>
      </p>
      <h1 className="text-2xl font-display">Trabalhos recentes</h1>

      <div className="flex flex-col w-full gap-4 items-center justify-center lg:flex-row">
        <Carousel
          images={[
            { src: "/assets/Portfolio/SubMedida2.jpeg", alt: "Sub medida" },
            { src: "/assets/Portfolio/SubMedida1.jpeg", alt: "Sub medida" },
            { src: "/assets/Portfolio/SubMedida3.jpeg", alt: "Sub medida" },
          ]}
          width="70%"
        />
        <div className="flex flex-wrap w-full justify-center content-baseline gap-4">
          <Carousel
            images={[
              { src: "/assets/Portfolio/Bikini2.jpeg", alt: "Bikini" },
              { src: "/assets/Portfolio/Bikini1.jpeg", alt: "Bikini" },
              { src: "/assets/Portfolio/Bikini3.jpeg", alt: "Bikini" },
            ]}
            width="35%"
          />
          <Carousel
            images={[
              { src: "/assets/Portfolio/Ciclismo3.jpeg", alt: "Ciclismo" },
              { src: "/assets/Portfolio/Ciclismo1.jpeg", alt: "Ciclismo" },
              { src: "/assets/Portfolio/Ciclismo2.jpeg", alt: "Ciclismo" },
            ]}
            width="35%"
          />
          <Carousel
            images={[
              { src: "/assets/Portfolio/Reforma1.jpeg", alt: "Reformas" },
            ]}
            width="35%"
          />
          <Carousel
            images={[
              { src: "/assets/Portfolio/Reforma2.jpeg", alt: "Reformas" },
            ]}
            width="35%"
          />
        </div>
      </div>
    </section>
  );
}
