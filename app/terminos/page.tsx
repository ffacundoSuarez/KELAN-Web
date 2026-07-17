import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio KELAN E-Bikes.",
  robots: { index: false },
};

const actualizado = "Julio 2026";

export default function TerminosPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-titulos text-3xl font-bold text-kelan-gris">
        Términos y Condiciones
      </h1>
      <p className="mt-2 font-texto text-sm text-kelan-gris/40">
        Última actualización: {actualizado}
      </p>

      <div className="mt-8 space-y-8 font-texto text-kelan-gris/70">
        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            1. Sobre este sitio
          </h2>
          <p className="mt-2">
            Este sitio web de {siteConfig.nombre} es un <strong>catálogo informativo</strong>{" "}
            (vitrina) de bicicletas eléctricas KELAN. No se realizan ventas, cobros ni pagos a
            través de este sitio: su función es mostrar los modelos y redirigir a las publicaciones
            oficiales en Mercado Libre para concretar la compra.
          </p>
        </div>

        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            2. Compras a través de Mercado Libre
          </h2>
          <p className="mt-2">
            Todas las compras se gestionan íntegramente en la plataforma de{" "}
            <strong>Mercado Libre</strong>, bajo sus propios términos, condiciones y políticas. El
            precio, el stock, los medios de pago, la facturación, el envío y la garantía definitivos
            son los que figuran en la publicación correspondiente de Mercado Libre al momento de la
            compra.
          </p>
        </div>

        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            3. Información de los productos
          </h2>
          <p className="mt-2">
            Las especificaciones técnicas, descripciones e imágenes publicadas en este sitio son de
            carácter orientativo y pueden estar sujetas a cambios, mejoras o correcciones sin previo
            aviso. Las imágenes son ilustrativas. Ante cualquier diferencia, prevalece la información
            de la publicación de Mercado Libre.
          </p>
        </div>

        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            4. Propiedad intelectual
          </h2>
          <p className="mt-2">
            La marca KELAN, su logotipo, los textos, el diseño y las imágenes de este sitio son
            propiedad de {siteConfig.nombre} o se utilizan con autorización. No está permitido su uso,
            reproducción o distribución sin consentimiento previo.
          </p>
        </div>

        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            5. Enlaces a terceros
          </h2>
          <p className="mt-2">
            El sitio contiene enlaces a plataformas de terceros (Mercado Libre, WhatsApp, Instagram).
            No somos responsables por el contenido, las políticas ni el funcionamiento de esos
            sitios, que se rigen por sus propios términos.
          </p>
        </div>

        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            6. Showroom
          </h2>
          <p className="mt-2">
            Atención presencial en nuestro showroom de {siteConfig.direccion.calle},{" "}
            {siteConfig.direccion.barrio}, {siteConfig.direccion.ciudad}. Recomendamos coordinar la
            visita por WhatsApp o Instagram.
          </p>
        </div>

        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            7. Limitación de responsabilidad
          </h2>
          <p className="mt-2">
            El sitio se ofrece &ldquo;tal cual&rdquo;, con fines informativos. En la medida permitida
            por la ley, {siteConfig.nombre} no será responsable por daños derivados del uso de la
            información aquí publicada o de la imposibilidad de acceder al sitio.
          </p>
        </div>

        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            8. Ley aplicable y jurisdicción
          </h2>
          <p className="mt-2">
            Estos términos se rigen por las leyes de la República Argentina. Ante cualquier
            controversia, las partes se someten a los tribunales ordinarios de la Ciudad Autónoma de
            Buenos Aires.
          </p>
        </div>

        <div>
          <h2 className="font-titulos text-lg font-semibold text-kelan-gris">
            9. Contacto
          </h2>
          <p className="mt-2">
            Por consultas sobre estos términos podés escribirnos por WhatsApp o Instagram (
            @kelan_ebikes).
          </p>
        </div>

      </div>
    </section>
  );
}
