"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import MercadoLibreButton from "./MercadoLibreButton";

const links = [
  { href: "/#modelos", label: "Modelos" },
  { href: "/#acerca", label: "Acerca de" },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-kelan-negro/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo />

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-texto text-sm font-medium text-kelan-gris/80 transition-colors hover:text-kelan-lima"
            >
              {l.label}
            </Link>
          ))}
          <MercadoLibreButton className="!px-5 !py-2 text-sm">
            Comprar
          </MercadoLibreButton>
        </nav>

        {/* Botón hamburguesa mobile */}
        <button
          type="button"
          className="md:hidden"
          aria-expanded={abierto}
          aria-controls="menu-mobile"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setAbierto((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-kelan-gris transition-all" />
          <span className="my-1.5 block h-0.5 w-6 bg-kelan-gris" />
          <span className="block h-0.5 w-6 bg-kelan-gris" />
        </button>
      </div>

      {/* Menú mobile */}
      {abierto && (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="flex flex-col gap-1 border-t border-white/10 px-5 py-4 md:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setAbierto(false)}
              className="rounded-lg px-3 py-3 font-texto text-base font-medium text-kelan-gris/90 transition-colors hover:bg-white/5 hover:text-kelan-lima"
            >
              {l.label}
            </Link>
          ))}
          <MercadoLibreButton className="mt-2">Comprar</MercadoLibreButton>
        </nav>
      )}
    </header>
  );
}
