/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import InteractiveFabricBackground from "./InteractiveFabricBackground";

export default function Main() {
  const [open, setOpen] = useState(false);
  const MOBILE_BREAKPOINT = 700;

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    setOpen(mql.matches);

    const handleChange = (e: MediaQueryListEvent) => setOpen(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);
  return (
    <section
      id="main"
      className="flex flex-col justify-between items-center gap-12 lg:gap-96 lg:h-screen lg:flex-row"
    >
      <div className="relative top-0 left-0 flex items-center justify-center overflow-hidden w-screen h-screen lg:flex-1 lg:h-screen rounded-xl">
        <InteractiveFabricBackground />
        <div className="w-full p-3 lg:w-auto flex flex-col gap-4 z-30">
          <p className="font-display text-sm tracking-widest uppercase text-red">
            Costura sob medida
          </p>
          <p className="text-5xl sm:text-7xl font-display leading-tight">
            Cada peça, uma <em className="text-red">obra</em>
            <br /> feita pra você.
          </p>
          <p className="text-foreground/60 leading-relaxed">
            Roupas sob medida, concertos, bikinis e trajes de ciclismo feitos
            com precisão e carinho em cada ponto.
          </p>
          <div className="flex gap-3">
            {open ? (
              <a className=" text-clear-text bg-red p-4" href="https://wa.me/5584996153922">
                Fale no WhatsApp
              </a>
            ) : (
              <a className="text-clear-text bg-red p-4" href="#services">
                Ver serviços
              </a>
            )}

            <button className="border border-gray-500 bg-background text-foreground/60 px-6 py-3 text-sm">
              <a href="#portfolio"> Ver portfólio</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
