import type { MetadataRoute } from "next";
import { getAllBicicletas } from "@/lib/bicicletas";
import { urlAbsoluta } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();

  // Solo páginas indexables: /terminos y /privacidad declaran robots noindex,
  // incluirlas acá sería una señal contradictoria para Google.
  const estaticas: MetadataRoute.Sitemap = [
    { url: urlAbsoluta("/"), lastModified: ahora, changeFrequency: "weekly", priority: 1 },
  ];

  const productos: MetadataRoute.Sitemap = getAllBicicletas().map((b) => ({
    url: urlAbsoluta(`/bicicletas/${b.slug}`),
    lastModified: ahora,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...estaticas, ...productos];
}
