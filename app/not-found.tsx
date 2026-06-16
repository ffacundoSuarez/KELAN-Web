import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
      <p className="font-titulos text-7xl font-bold text-kelan-lima">404</p>
      <h1 className="mt-4 font-titulos text-2xl font-semibold text-kelan-gris">
        Página no encontrada
      </h1>
      <p className="mt-3 font-texto text-kelan-gris/60">
        El contenido que buscás no existe o fue movido.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-kelan-lima px-6 py-3 font-titulos font-semibold text-kelan-negro transition-colors hover:bg-kelan-lima-dark"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
