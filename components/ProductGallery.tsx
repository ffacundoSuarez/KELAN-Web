"use client";

import { useState } from "react";
import Image from "next/image";
import type { Imagen } from "@/lib/bicicletas";

/** Galería de producto: imagen principal + miniaturas seleccionables. */
export default function ProductGallery({ imagenes }: { imagenes: Imagen[] }) {
  const [activa, setActiva] = useState(0);
  const principal = imagenes[activa] ?? imagenes[0];

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white">
        <Image
          src={principal.src}
          alt={principal.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-4"
        />
      </div>

      {imagenes.length > 1 && (
        <div className="mt-4 flex gap-3" role="group" aria-label="Miniaturas">
          {imagenes.map((img, i) => (
            <button
              key={img.src}
              type="button"
              aria-label={`Ver imagen ${i + 1}`}
              aria-pressed={i === activa}
              onClick={() => setActiva(i)}
              className={`relative aspect-square w-20 overflow-hidden rounded-lg border bg-white transition-colors ${
                i === activa
                  ? "border-kelan-lima"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="80px"
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
