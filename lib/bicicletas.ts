/**
 * Capa de datos del catálogo. Fuente única de verdad: `data/bicicletas.json`.
 * Todos los componentes/páginas consumen los modelos a través de estos getters
 * (nunca importan el JSON directo) para poder cambiar la fuente sin tocar la UI.
 *
 * Estado actual: KELAN ofrece un único modelo de scooter en 4 colores. Cada color
 * es una entrada propia ("bloque distinto"). Cuando haya más modelos, se puede
 * sumar un campo `modelo`/`categoria` sin romper este contrato.
 */
import bicicletasData from "@/data/bicicletas.json";

/** Colores disponibles del modelo. */
export type ColorSlug = "negra" | "azul" | "blanca" | "roja";

/** Label + muestra (swatch) por color. */
export const colores: Record<ColorSlug, { label: string; hex: string }> = {
  negra: { label: "Negra", hex: "#1b1c1b" },
  azul: { label: "Azul", hex: "#1f3aa6" },
  blanca: { label: "Blanca", hex: "#ededed" },
  roja: { label: "Roja", hex: "#e8431f" },
};

export interface Specs {
  motor: string;
  bateria: string;
  autonomiaKm: number;
  velocidadMaxKmh: number;
  tiempoCargaHoras: number;
  freno: string;
  rodado: string;
  pesoKg: number;
  cargaMaxKg: number;
}

export interface Imagen {
  src: string;
  alt: string;
}

export interface Bicicleta {
  slug: string;
  nombre: string;
  color: ColorSlug;
  precio: number;
  moneda: string;
  destacado: boolean;
  descripcionCorta: string;
  descripcionLarga: string;
  specs: Specs;
  imagenes: Imagen[];
  mercadoLibreUrl: string;
}

const bicicletas = bicicletasData as Bicicleta[];

/** Todos los modelos del catálogo. */
export function getAllBicicletas(): Bicicleta[] {
  return bicicletas;
}

/** Un modelo por su slug (o undefined si no existe). */
export function getBicicletaBySlug(slug: string): Bicicleta | undefined {
  return bicicletas.find((b) => b.slug === slug);
}

/** Formatea un precio en pesos argentinos. */
export function formatearPrecio(precio: number, moneda = "ARS"): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: moneda,
    maximumFractionDigits: 0,
  }).format(precio);
}
