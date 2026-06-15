import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Contato() {
  return (
    <>
      <section
        className="flex p-20 flex-col justify-center items-center text-center content-center"
        id="contato"
      >
        <h1 className="font-display text-4xl">
          Pronta para sua próxima <span className="text-yellow-gold">peça</span>
          ?
        </h1>
        <p>
          Entre em contato e vamos conversar. Cada cliente é<br /> único — e sua
          roupa também vai ser.
        </p>
        <button className="bg-yellow-gold p-2">
          <a href="https://wa.me/5584996153922">
            Fale no WhatsApp
          </a>
        </button>
      </section>
      <footer className="flex flex-col bg-black justify-between p-24 gap-4">
        <div className="flex flex-row justify-between border-b-2">
          <div>
            <h1 className="text-2xl">
              Alfa&amp;<span className="text-yellow-gold">Artes</span>
            </h1>
            <p>
              <small>By Bosco &amp; Gilda</small>
            </p>
            <p>
              Acari-RN
              <br />
              (84) 9 99615-3022
              <br />
              gildaalves098@gmail.com
            </p>
          </div>
          <div className="flex flex-row gap-16">
            <div className="flex flex-col">
              <h1>SERVIÇOS</h1>
              <a href="#serviços">Sob medida</a>
              <a href="#serviços">Concerto</a>
              <a href="#serviços">Bikinis</a>
              <a href="#serviços">Roupa de ciclismo</a>
            </div>
            <div>
              <h1>ATENDIMENTO</h1>
              <p>Seg- Sáb, 7h as 17</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <p>&copy; 2026 Alfa &amp; Artes -- todos os direitos reservados</p>
          <div className="flex flex-row gap-4">
            <a
              className="text-2xl"
              href="https://www.instagram.com/alfaeartes/"
            >
              <FaInstagram />
            </a>
            <a className="text-2xl" href="https://wa.me/5584996153922">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
