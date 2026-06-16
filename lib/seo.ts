/**
 * Configuración central de sitio y helpers de SEO.
 * El dominio definitivo todavía no está confirmado: se setea con NEXT_PUBLIC_SITE_URL
 * en Vercel y cae a localhost en desarrollo.
 */
export const siteConfig = {
  nombre: "KELAN E-Bikes",
  descripcion:
    "Scooters y ciclomotores eléctricos en Argentina. Movilidad urbana sustentable: " +
    "conocé los modelos KELAN, sus specs y comprá por Mercado Libre.",
  // URL base para metadata, sitemap y OG absolutas. Cambiar al dominio real.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es_AR",
  // Cuenta general de Mercado Libre (fallback si un modelo no trae su propio link).
  mercadoLibreUrl: "https://www.mercadolibre.com.ar/",
  // Redes / contacto (placeholder hasta confirmar con la clienta).
  whatsapp: "https://wa.me/5490000000000",
  instagram: "https://www.instagram.com/",
  // Link a Data Fiscal AFIP (placeholder).
  dataFiscalUrl: "https://www.afip.gob.ar/",
  keywords: [
    "scooter eléctrico",
    "moto eléctrica",
    "ciclomotor eléctrico",
    "scooter eléctrico Argentina",
    "movilidad eléctrica urbana",
    "KELAN",
  ],
} as const;

/** Convierte un path relativo en URL absoluta sobre el dominio del sitio. */
export function urlAbsoluta(path: string): string {
  return new URL(path, siteConfig.url).toString();
}
