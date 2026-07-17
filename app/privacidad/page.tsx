import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad del sitio KELAN E-Bikes.",
  robots: { index: false },
};

const actualizado = "Julio 2026";

export default function PrivacidadPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-titulos text-3xl font-bold text-kelan-gris">
        Política de Privacidad
      </h1>
      <p className="mt-2 font-texto text-sm text-kelan-gris/40">
        Última actualización: {actualizado}
      </p>

      <div className="mt-8 space-y-8 font-texto text-kelan-gris/70">
        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            1. Datos que recopilamos
          </h2>
          <p className="mt-2">
            Este sitio es un catálogo informativo: <strong>no tiene formularios, carrito de compras
            ni cuentas de usuario</strong>. Por lo tanto, no solicitamos ni almacenamos datos
            personales para vender. La compra se realiza en Mercado Libre, donde aplican las
            políticas de esa plataforma.
          </p>
        </div>

        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            2. Cookies y analítica
          </h2>
          <p className="mt-2">
            Actualmente el sitio no utiliza cookies de seguimiento ni herramientas de analítica que
            identifiquen a los visitantes. Si en el futuro se incorporan (por ejemplo, para medir
            visitas), se actualizará esta política.
          </p>
        </div>

        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            3. Enlaces y servicios de terceros
          </h2>
          <p className="mt-2">
            Al acceder a <strong>Mercado Libre</strong> o contactarnos por{" "}
            <strong>WhatsApp</strong> o <strong>Instagram</strong>, se aplican las políticas de
            privacidad de cada una de esas plataformas, sobre las que no tenemos control.
          </p>
        </div>

        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            4. Contacto voluntario
          </h2>
          <p className="mt-2">
            Si nos escribís por WhatsApp o Instagram, los datos que compartas (como tu nombre o
            teléfono) se utilizan únicamente para responder tu consulta y no se ceden a terceros con
            fines comerciales.
          </p>
        </div>

        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            5. Tus derechos
          </h2>
          <p className="mt-2">
            De acuerdo con la <strong>Ley 25.326 de Protección de los Datos Personales</strong> de la
            República Argentina, podés solicitar el acceso, la rectificación o la supresión de los
            datos que nos hayas enviado. Para ejercer estos derechos, escribinos por nuestros canales
            de contacto.
          </p>
        </div>

        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            6. Contacto
          </h2>
          <p className="mt-2">
            {siteConfig.nombre} — Showroom en {siteConfig.direccion.calle},{" "}
            {siteConfig.direccion.barrio}, {siteConfig.direccion.ciudad}. Consultas por WhatsApp o
            Instagram (@kelan_ebikes).
          </p>
        </div>

      </div>
    </section>
  );
}
