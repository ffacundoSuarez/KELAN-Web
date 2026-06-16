import { siteConfig } from "@/lib/seo";

/**
 * CTA principal de conversión: lleva a la publicación de Mercado Libre.
 * Link saliente con rel nofollow + seguridad (target _blank).
 */
export default function MercadoLibreButton({
  href,
  className = "",
  children = "Comprar en Mercado Libre",
}: {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={href || siteConfig.mercadoLibreUrl}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-kelan-lima px-7 py-3.5 font-titulos font-semibold text-kelan-negro transition-colors hover:bg-kelan-lima-dark focus-visible:outline-kelan-lima ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
