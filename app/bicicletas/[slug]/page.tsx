import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBicicletas, getBicicletaBySlug, colores } from "@/lib/bicicletas";
import { siteConfig, urlAbsoluta } from "@/lib/seo";
import SelectorColorGaleria from "@/components/SelectorColorGaleria";
import SpecsTable from "@/components/SpecsTable";
import JsonLd from "@/components/JsonLd";

type Params = { slug: string };

// SSG: prerenderiza todas las rutas de modelos en build time.
export function generateStaticParams(): Params[] {
  return getAllBicicletas().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const bici = getBicicletaBySlug(slug);
  if (!bici) return { title: "Modelo no encontrado" };

  const titulo = `${bici.nombre} — Bicicleta eléctrica`;
  const descripcion = bici.descripcionCorta;
  const ogImage = bici.variantes[0]?.imagenes[0]?.src;

  return {
    title: titulo,
    description: descripcion,
    keywords: [
      bici.nombre,
      `${bici.nombre} autonomía`,
      "bicicleta eléctrica",
      "e-bike urbana",
    ],
    alternates: { canonical: `/bicicletas/${bici.slug}` },
    openGraph: {
      type: "website",
      title: `${bici.nombre} · ${siteConfig.nombre}`,
      description: descripcion,
      url: `/bicicletas/${bici.slug}`,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
  };
}

export default async function BicicletaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const bici = getBicicletaBySlug(slug);
  if (!bici) notFound();

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: bici.nombre,
    description: bici.descripcionLarga,
    image: bici.variantes.flatMap((v) => v.imagenes.map((img) => urlAbsoluta(img.src))),
    brand: { "@type": "Brand", name: "KELAN" },
    color: bici.variantes.map((v) => colores[v.color].label),
    category: "Bicicleta eléctrica",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: bici.mercadoLibreUrl,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: bici.nombre,
        item: urlAbsoluta(`/bicicletas/${bici.slug}`),
      },
    ],
  };

  return (
    <article className="mx-auto max-w-6xl px-5 py-12">
      <JsonLd data={productLd} />
      <JsonLd data={breadcrumbLd} />

      {/* Botón volver a la grilla de modelos */}
      <Link
        href="/#modelos"
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-texto text-sm text-kelan-gris/80 transition-colors hover:border-kelan-lima hover:text-kelan-lima"
      >
        <span aria-hidden="true">←</span> Volver
      </Link>

      {/* Migas de pan */}
      <nav aria-label="Migas de pan" className="mb-8 font-texto text-sm text-kelan-gris/50">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="transition-colors hover:text-kelan-lima">
              Inicio
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-kelan-gris/80">{bici.nombre}</li>
        </ol>
      </nav>

      <SelectorColorGaleria
        variantes={bici.variantes}
        nombre={bici.nombre}
        descripcion={bici.descripcionLarga}
      />

      <div className="mt-14 max-w-2xl">
        <h2 className="mb-4 font-titulos text-xl font-semibold text-kelan-gris">
          Especificaciones técnicas
        </h2>
        <SpecsTable specs={bici.specs} />
      </div>
    </article>
  );
}
