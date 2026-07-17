"use client";

import { useState } from "react";
import { type Variante, colores } from "@/lib/bicicletas";
import ProductGallery from "./ProductGallery";
import MercadoLibreButton from "./MercadoLibreButton";

/**
 * Selector de color + galería + CTA para el detalle de modelo.
 * Al cambiar de color se actualizan la galería y el link de Mercado Libre
 * (deep-link por color: "Go Roja" abre la publicación de la roja).
 */
export default function SelectorColorGaleria({
  variantes,
  nombre,
  descripcion,
}: {
  variantes: Variante[];
  nombre: string;
  descripcion: string;
}) {
  const [activa, setActiva] = useState(0);
  const variante = variantes[activa] ?? variantes[0];
  const color = colores[variante.color];

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* La galería se remonta al cambiar de color (key) para resetear la miniatura activa. */}
      <ProductGallery key={activa} imagenes={variante.imagenes} />

      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 font-texto text-xs font-medium text-kelan-gris">
          <span
            aria-hidden="true"
            className="inline-block h-3 w-3 rounded-full ring-1 ring-white/30"
            style={{ backgroundColor: color.hex }}
          />
          Color {color.label}
        </span>

        <h1 className="mt-4 font-titulos text-3xl font-bold text-kelan-gris sm:text-4xl">
          {nombre}
        </h1>

        <p className="mt-4 font-texto text-lg text-kelan-gris/70">{descripcion}</p>

        {variantes.length > 1 && (
          <div className="mt-6">
            <p className="font-texto text-sm text-kelan-gris/60">Elegí el color</p>
            <div className="mt-3 flex flex-wrap gap-3" role="group" aria-label="Colores disponibles">
              {variantes.map((v, i) => {
                const c = colores[v.color];
                return (
                  <button
                    key={v.color}
                    type="button"
                    aria-label={c.label}
                    aria-pressed={i === activa}
                    title={c.label}
                    onClick={() => setActiva(i)}
                    className={`h-10 w-10 rounded-full ring-2 ring-offset-2 ring-offset-kelan-negro transition-transform hover:scale-110 active:scale-95 ${
                      i === activa ? "ring-kelan-lima" : "ring-white/20"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-8">
          <MercadoLibreButton href={variante.mercadoLibreUrl} className="w-full sm:w-auto">
            Ver en Mercado Libre
          </MercadoLibreButton>
        </div>
      </div>
    </div>
  );
}
