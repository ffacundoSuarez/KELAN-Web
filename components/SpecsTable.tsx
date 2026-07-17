import type { Specs } from "@/lib/bicicletas";

/** Tabla de especificaciones técnicas (texto real, indexable por crawlers).
 *  Solo renderiza las filas cuyo dato existe (varias specs son opcionales). */
export default function SpecsTable({ specs }: { specs: Specs }) {
  const filas: { label: string; valor: string }[] = [
    { label: "Motor", valor: specs.motor },
    { label: "Batería", valor: specs.bateria },
    { label: "Velocidad máxima", valor: `${specs.velocidadMaxKmh} km/h` },
    { label: "Rodado", valor: specs.rodado },
    { label: "Peso", valor: `${specs.pesoKg} kg` },
    ...(specs.autonomiaKm ? [{ label: "Autonomía", valor: `${specs.autonomiaKm} km` }] : []),
    ...(specs.tiempoCargaHoras
      ? [{ label: "Tiempo de carga", valor: `${specs.tiempoCargaHoras} h` }]
      : []),
    ...(specs.freno ? [{ label: "Frenos", valor: specs.freno }] : []),
    ...(specs.cargaMaxKg ? [{ label: "Carga máxima", valor: `${specs.cargaMaxKg} kg` }] : []),
  ];

  return (
    <table className="w-full border-collapse text-left">
      <caption className="sr-only">Especificaciones técnicas</caption>
      <tbody>
        {filas.map((f) => (
          <tr key={f.label} className="border-b border-white/10">
            <th
              scope="row"
              className="py-3 pr-4 align-top font-texto text-sm font-medium text-kelan-gris/60"
            >
              {f.label}
            </th>
            <td className="py-3 font-texto text-sm font-medium text-kelan-gris">
              {f.valor}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
