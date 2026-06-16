/**
 * Inserta Structured Data (JSON-LD) en la página.
 * Se renderiza en el servidor — no agrega JS al cliente.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // El contenido es nuestro, generado del JSON de datos (no input de usuario).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
