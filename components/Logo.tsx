import Image from "next/image";
import Link from "next/link";

/**
 * Logo oficial de KELAN.
 *  - variant "wordmark": KELAN sin tagline (header, compacto).
 *  - variant "full": KELAN + "E-BIKES" (footer / usos destacados).
 * Archivos en `public/brand/` (extraídos del manual de marca).
 */
type Variant = "wordmark" | "full";

const ASSETS: Record<Variant, { src: string; w: number; h: number }> = {
  wordmark: { src: "/brand/kelan-wordmark.png", w: 2346, h: 369 },
  full: { src: "/brand/kelan-logo-color.png", w: 2893, h: 771 },
};

export default function Logo({
  variant = "wordmark",
  className = "h-7 w-auto",
}: {
  variant?: Variant;
  className?: string;
}) {
  const a = ASSETS[variant];
  return (
    <Link href="/" aria-label="KELAN E-Bikes — Inicio" className="inline-flex">
      <Image
        src={a.src}
        alt="KELAN E-Bikes"
        width={a.w}
        height={a.h}
        priority
        className={className}
      />
    </Link>
  );
}
