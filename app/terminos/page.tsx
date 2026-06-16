import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio KELAN E-Bikes.",
  robots: { index: false },
};

export default function TerminosPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-titulos text-3xl font-bold text-kelan-gris">
        Términos y Condiciones
      </h1>
      <p className="mt-6 font-texto text-kelan-gris/60">
        {/* TODO: reemplazar por el texto legal definitivo provisto por la clienta. */}
        Contenido pendiente. Este sitio es un catálogo informativo; las compras se
        realizan a través de Mercado Libre, bajo sus propios términos y condiciones.
      </p>
    </section>
  );
}
