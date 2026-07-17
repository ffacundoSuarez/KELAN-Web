/**
 * Configuración central de sitio y helpers de SEO.
 * El dominio definitivo todavía no está confirmado: se setea con NEXT_PUBLIC_SITE_URL
 * en Vercel y cae a localhost en desarrollo.
 */
export const siteConfig = {
  nombre: "KELAN E-Bikes",
  descripcion:
    "Bicicletas eléctricas urbanas en Argentina. Showroom en Palermo, Buenos Aires: " +
    "conocé los modelos KELAN Go, City y Max, sus specs y comprá por Mercado Libre.",
  // URL base para metadata, sitemap y OG absolutas. Cambiar al dominio real.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es_AR",
  // Tienda de Mercado Libre (fallback si un modelo/color no trae su propio link).
  mercadoLibreUrl: "https://www.mercadolibre.com.ar/pagina/chuwi",
  // Redes / contacto.
  whatsapp: "https://wa.me/5491140961044",
  instagram: "https://www.instagram.com/kelan_ebikes/",
  // Local físico (showroom). NAP consistente para SEO local.
  telefono: "+541140961044",
  direccion: {
    calle: "Arévalo 1440",
    barrio: "Palermo",
    ciudad: "Ciudad de Buenos Aires",
    // Para JSON-LD PostalAddress.
    addressLocality: "Palermo, Ciudad de Buenos Aires",
    addressRegion: "CABA",
    addressCountry: "AR",
  },
  keywords: [
    "bicicleta eléctrica",
    "bici eléctrica",
    "e-bike",
    "bicicleta eléctrica Palermo",
    "bicicleta eléctrica Buenos Aires",
    "showroom bicicletas eléctricas",
    "movilidad eléctrica urbana",
    "KELAN",
  ],
} as const;

/** Convierte un path relativo en URL absoluta sobre el dominio del sitio. */
export function urlAbsoluta(path: string): string {
  return new URL(path, siteConfig.url).toString();
}
