import Image from "next/image";
import MercadoLibreButton from "./MercadoLibreButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Imagen de fondo a sangrado. priority → es el LCP de la landing.
          La imagen ya viene oscurecida: sin opacity extra para que el scooter se vea. */}
      <Image
        src="/images/bicis/BicicletaFondo.png"
        alt="Scooter eléctrico KELAN en la ciudad"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Scrim horizontal: oscuro a la izquierda (texto) → se abre a la derecha (scooter). */}
      <div className="absolute inset-0 bg-gradient-to-r from-kelan-negro via-kelan-negro/85 to-kelan-negro/20 sm:to-transparent" />
      {/* Refuerzo inferior para legibilidad del texto en mobile. */}
      <div className="absolute inset-0 bg-gradient-to-t from-kelan-negro/70 to-transparent sm:hidden" />

      <div className="relative mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-center px-5 py-24">
        <p className="font-texto text-sm font-semibold uppercase tracking-[0.3em] text-kelan-lima">
          Movilidad eléctrica
        </p>
        <h1 className="mt-4 max-w-2xl font-titulos text-4xl font-bold leading-tight text-kelan-gris sm:text-5xl lg:text-6xl">
          Energía para moverte por la ciudad
        </h1>
        <p className="mt-6 max-w-xl font-texto text-lg text-kelan-gris/70">
          Scooters y ciclomotores eléctricos KELAN. Sin nafta, sin ruido, sin excusas.
          Conocé los modelos y elegí el tuyo.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <MercadoLibreButton>Ver en Mercado Libre</MercadoLibreButton>
          <a
            href="#modelos"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-titulos font-semibold text-kelan-gris transition-colors hover:border-kelan-lima hover:text-kelan-lima"
          >
            Ver modelos
          </a>
        </div>
      </div>
    </section>
  );
}
