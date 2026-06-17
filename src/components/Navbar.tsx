"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeTogge";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex p-6 w-full justify-between items-center relative">
      <h1 className="text-2xl font-display">
        Alfa&amp;<span className="text-red">Artes</span>
      </h1>

      <div className="hidden md:flex gap-8 items-center">
        <a
          href="#services"
          className="text-foreground/70 hover:text-red transition-colors"
        >
          Serviços
        </a>
        <a
          href="#portfolio"
          className="text-foreground/70 hover:text-red transition-colors"
        >
          Portfolio
        </a>
        <a
          href="#contato"
          className="text-foreground/70 hover:text-red transition-colors"
        >
          Contato
        </a>
      </div>

      <div className="hidden md:block">
        <ThemeToggle />
        <a className="bg-red p-4" href="https://wa.me/5584996153922">
          Fale no WhatsApp
        </a>
      </div>

      <div className="flex flex-row md:hidden">
        <ThemeToggle />
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      <div
        className={`absolute top-0 left-0 w-full bg-background flex flex-col items-center gap-8 py-24 transition-all duration-300 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <a
          href="#services"
          onClick={() => setOpen(false)}
          className="text-lg text-foreground/70 hover:text-red transition-colors"
        >
          Serviços
        </a>
        <a
          href="#portfolio"
          onClick={() => setOpen(false)}
          className="text-lg text-foreground/70 hover:text-red transition-colors"
        >
          Portfolio
        </a>
        <a
          href="#contato"
          onClick={() => setOpen(false)}
          className="text-lg text-foreground/70 hover:text-red transition-colors"
        >
          Contato
        </a>
        <div className="bg-red px-6 py-4">
          <a href="https://wa.me/5584996153922">Fale no WhatsApp</a>
        </div>
      </div>
    </nav>
  );
}
