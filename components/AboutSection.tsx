const valores = [
  {
    titulo: "100% eléctrico",
    texto: "Cero emisiones y cero nafta. Cargás en cualquier enchufe y listo.",
  },
  {
    titulo: "Pensado para la ciudad",
    texto: "Ágiles, compactos y silenciosos. Ideales para el día a día urbano.",
  },
  {
    titulo: "Bajo costo de uso",
    texto: "Mantenimiento mínimo y un costo de recarga muy por debajo del combustible.",
  },
];

export default function AboutSection() {
  return (
    <section id="acerca" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-titulos text-3xl font-bold text-kelan-gris sm:text-4xl">
        Acerca de <span className="text-kelan-lima">KELAN</span>
      </h2>
      <p className="mt-4 max-w-2xl font-texto text-lg text-kelan-gris/70">
        KELAN nace para acercar la movilidad eléctrica a la vida urbana argentina.
        Diseñamos bicicletas eléctricas que combinan diseño, autonomía y un costo
        de uso imbatible, para que moverte sea simple, limpio y económico.
      </p>
      <p className="mt-4 max-w-2xl font-texto text-lg text-kelan-gris/70">
        Te esperamos en nuestro <span className="text-kelan-gris">showroom de Palermo</span>{" "}
        (Arévalo 1440) para ver y probar las bicis en persona.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {valores.map((v) => (
          <div
            key={v.titulo}
            className="rounded-2xl border border-white/10 bg-kelan-superficie p-6"
          >
            <h3 className="font-titulos text-lg font-semibold text-kelan-lima">
              {v.titulo}
            </h3>
            <p className="mt-2 font-texto text-sm text-kelan-gris/60">{v.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
