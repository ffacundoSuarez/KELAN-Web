import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllBicicletas,
  getBicicletaBySlug,
  colores,
  formatearPrecio,
} from "@/lib/bicicletas";
import { siteConfig, urlAbsoluta } from "@/lib/seo";
import ProductGallery from "@/components/ProductGallery";
import SpecsTable from "@/components/SpecsTable";
import MercadoLibreButton from "@/components/MercadoLibreButton";
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

  const titulo = `${bici.nombre} — Scooter eléctrico`;
  const descripcion = bici.descripcionCorta;
  const ogImage = bici.imagenes[0]?.src;

  return {
    title: titulo,
    description: descripcion,
    keywords: [
      bici.nombre,
      `${bici.nombre} precio`,
      `${bici.nombre} autonomía`,
      "scooter eléctrico",
      "ciclomotor eléctrico",
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
    image: bici.imagenes.map((img) => urlAbsoluta(img.src)),
    brand: { "@type": "Brand", name: "KELAN" },
    color: colores[bici.color].label,
    category: "Scooter eléctrico",
    offers: {
      "@type": "Offer",
      price: bici.precio,
      priceCurrency: bici.moneda,
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

      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery imagenes={bici.imagenes} />

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 font-texto text-xs font-medium text-kelan-gris">
            <span
              aria-hidden="true"
              className="inline-block h-3 w-3 rounded-full ring-1 ring-white/30"
              style={{ backgroundColor: colores[bici.color].hex }}
            />
            Color {colores[bici.color].label}
          </span>
          <h1 className="mt-4 font-titulos text-3xl font-bold text-kelan-gris sm:text-4xl">
            {bici.nombre}
          </h1>
          <p className="mt-4 font-texto text-lg text-kelan-gris/70">
            {bici.descripcionLarga}
          </p>

          <p className="mt-8 font-titulos text-3xl font-bold text-kelan-lima">
            {formatearPrecio(bici.precio, bici.moneda)}
          </p>

          <div className="mt-6">
            <MercadoLibreButton href={bici.mercadoLibreUrl} className="w-full sm:w-auto">
              Comprar en Mercado Libre
            </MercadoLibreButton>
          </div>

          <div className="mt-12">
            <h2 className="mb-4 font-titulos text-xl font-semibold text-kelan-gris">
              Especificaciones técnicas
            </h2>
            <SpecsTable specs={bici.specs} />
          </div>
        </div>
      </div>
    </article>
  );
}
