import Link from "next/link";
import Logo from "./Logo";
import { siteConfig } from "@/lib/seo";

export default function Footer() {
  const año = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/10 bg-kelan-negro">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo variant="full" className="h-12 w-auto" />
          <p className="mt-4 max-w-xs font-texto text-sm text-kelan-gris/60">
            Movilidad eléctrica urbana. Scooters y ciclomotores eléctricos en Argentina.
          </p>
        </div>

        <nav aria-label="Contacto y redes">
          <h2 className="font-titulos text-sm font-semibold text-kelan-gris">Contacto</h2>
          <ul className="mt-4 space-y-2 font-texto text-sm text-kelan-gris/60">
            <li>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-kelan-lima">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-kelan-lima">
                Instagram
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Legales">
          <h2 className="font-titulos text-sm font-semibold text-kelan-gris">Legales</h2>
          <ul className="mt-4 space-y-2 font-texto text-sm text-kelan-gris/60">
            <li>
              <Link href="/terminos" className="transition-colors hover:text-kelan-lima">
                Términos y Condiciones
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="transition-colors hover:text-kelan-lima">
                Política de Privacidad
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-titulos text-sm font-semibold text-kelan-gris">Información</h2>
          <a
            href={siteConfig.dataFiscalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block"
          >
            {/* Data Fiscal AFIP — reemplazar por la imagen oficial provista por la clienta. */}
            <span className="inline-block rounded border border-white/20 px-3 py-2 font-texto text-xs text-kelan-gris/60">
              Data Fiscal (AFIP)
            </span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 font-texto text-xs text-kelan-gris/40">
          © {año} {siteConfig.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
