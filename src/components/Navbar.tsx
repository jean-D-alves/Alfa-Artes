/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeTogge";
import Link from "next/link";
import { IoCloseOutline, IoMenu } from "react-icons/io5";
type Navlist = {
  name: string;
  url: string;
};
const NavList: Navlist[] = [
  {
    name: "home",
    url: "#home",
  },
  {
    name: "services",
    url: "#services",
  },
  {
    name: "portfolio",
    url: "#portfolio",
  },
  {
    name: "Contact",
    url: "#contato",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(window.innerWidth < 700);
  }, []);

  return (
    <nav className="flex p-6 w-full justify-between items-center relative">
      <div className="flex gap-5 w-full justify-between items-center ">
        {open ? (
          <>
            <h1 className="font-display text-2xl">
              Alfa&amp;<span className=" text-red">Artes</span>
            </h1>
            <MenuBurguer data={NavList} />
          </>
        ) : (
          <>
            <h1 className="font-display text-2xl">
              Alfa&amp;<span className=" text-red">Artes</span>
            </h1>
            <div className="flex gap-5">
              {NavList.map((i) => (
                <Link key={i.name} href={i.url}>
                  {i.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-row">
              <ThemeToggle />
              <a className="bg-red p-4" href="https://wa.me/5584996153922">
                Fale no WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

function MenuBurguer({ data }: { data: Navlist[] }) {
  const [Menu, setMenu] = useState(false);
  return (
    <>
      {Menu ? (
        <div className="flex flex-col fixed top-0 left-0 justify-center items-center z-20 w-screen h-screen gap-5 bg-back-black">
          <IoCloseOutline
            size={30}
            onClick={() => setMenu(!Menu)}
            className="fixed top-4 right-4"
          />
          {data.map((i) => (
            <Link
              className="text-2xl"
              key={i.name}
              href={i.url}
              onClick={() => setMenu(!Menu)}
            >
              {i.name}
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-row">
          <ThemeToggle />
          <IoMenu size={30} onClick={() => setMenu(!Menu)} />
        </div>
      )}
    </>
  );
}
