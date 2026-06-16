import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad del sitio KELAN E-Bikes.",
  robots: { index: false },
};

export default function PrivacidadPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-titulos text-3xl font-bold text-kelan-gris">
        Política de Privacidad
      </h1>
      <p className="mt-6 font-texto text-kelan-gris/60">
        {/* TODO: reemplazar por el texto legal definitivo provisto por la clienta. */}
        Contenido pendiente. Este sitio no recopila datos personales para venta;
        las transacciones se gestionan en Mercado Libre.
      </p>
    </section>
  );
}
