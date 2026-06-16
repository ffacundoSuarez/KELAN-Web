import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import AboutSection from "@/components/AboutSection";
import { getAllBicicletas } from "@/lib/bicicletas";

export default function HomePage() {
  const bicicletas = getAllBicicletas();

  return (
    <>
      <Hero />

      <section id="modelos" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-titulos text-3xl font-bold text-kelan-gris sm:text-4xl">
          Elegí tu color
        </h2>
        <p className="mt-3 max-w-2xl font-texto text-kelan-gris/60">
          El scooter eléctrico KELAN, disponible en cuatro colores. Tocá el que más te gusta
          para ver sus especificaciones.
        </p>

        {/* Grilla responsive: 1 → 2 → 3 columnas. Un bloque por color. */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bicicletas.map((b) => (
            <ProductCard key={b.slug} bici={b} />
          ))}
        </div>
      </section>

      <AboutSection />
    </>
  );
}
