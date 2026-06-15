import { TbRulerMeasure } from "react-icons/tb";
import { GiSewingNeedle } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { BiCycling } from "react-icons/bi";
import CardServices from "./CardService";
export default function Services() {
  return (
    <section className="p-10" id="services">
      <div>
        <p className="font-display text-red">
          <small>O QUE FAZERMOS</small>
        </p>
        <h1 className="font-display text-2xl">Nossos serviços</h1>
      </div>
      <div className="flex flex-wrap w-full justify-between">
        <CardServices
          icon={<TbRulerMeasure />}
          title="Sub medida"
          description="Peças exclusivas criadas a partir das suas medidas exatas. Modelagem personalizada do zero."
          tag="Exclusivo"
          color="var(--yellow-gold)"
        />
        <CardServices
          icon={<GiSewingNeedle />}
          title="Concerto"
          description="Ajustes, reparos e reformas em roupas. Damos nova vida às peças que você já ama."
          tag="Rapido"
          color="var(--blue)"
        />
        <CardServices
          icon={<CiHeart />}
          title="Bikinis"
          description="Bikinis feitos sob medida no caimento e tecido ideais para o seu corpo e estilo."
          tag="Verão"
          color="var(--red)"
        />
        <CardServices
          icon={<BiCycling />}
          title="Roupa ciclismo"
          description="Maillots, bretelles e bermudas técnicas com tecido de alta performance para ciclistas."
          tag="Tecnico"
          color="var(--yellow-gold)"
        />
      </div>
    </section>
  );
}
