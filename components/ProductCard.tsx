import Image from "next/image";
import Link from "next/link";
import { type Bicicleta, colores } from "@/lib/bicicletas";

export default function ProductCard({ bici }: { bici: Bicicleta }) {
  const portada = bici.variantes[0].imagenes[0];

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-kelan-superficie transition duration-200 hover:border-kelan-lima/60 active:scale-[0.99] active:border-kelan-lima/60">
      <Link href={`/bicicletas/${bici.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-white">
          <Image
            src={portada.src}
            alt={portada.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-kelan-negro/80 px-3 py-1.5">
            {bici.variantes.map((v) => (
              <span
                key={v.color}
                aria-hidden="true"
                title={colores[v.color].label}
                className="inline-block h-3 w-3 rounded-full ring-1 ring-white/30"
                style={{ backgroundColor: colores[v.color].hex }}
              />
            ))}
            <span className="sr-only">
              Colores: {bici.variantes.map((v) => colores[v.color].label).join(", ")}
            </span>
          </span>
        </div>

        <div className="p-5">
          <h3 className="font-titulos text-lg font-semibold text-kelan-gris">
            {bici.nombre}
          </h3>
          <p className="mt-1 line-clamp-2 font-texto text-sm text-kelan-gris/60">
            {bici.descripcionCorta}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-texto text-sm text-kelan-gris/50">
              {bici.variantes.length} {bici.variantes.length === 1 ? "color" : "colores"}
            </span>
            <span className="font-texto text-sm text-kelan-gris/50 transition-colors group-hover:text-kelan-lima">
              Ver más →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
