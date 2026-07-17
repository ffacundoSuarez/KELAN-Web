/**
 * Capa de datos del catálogo. Fuente única de verdad: `data/bicicletas.json`.
 * Todos los componentes/páginas consumen los modelos a través de estos getters
 * (nunca importan el JSON directo) para poder cambiar la fuente sin tocar la UI.
 *
 * Estado actual: KELAN ofrece 3 modelos de bicicleta eléctrica urbana (Go, City, Max).
 * Cada modelo viene en 1..N colores; cada color es una `Variante` con sus propias
 * imágenes y su propio link de Mercado Libre (deep-link por color).
 */
import bicicletasData from "@/data/bicicletas.json";

/** Colores disponibles. */
export type ColorSlug = "negra" | "azul" | "blanca" | "roja";

/** Label + muestra (swatch) por color. */
export const colores: Record<ColorSlug, { label: string; hex: string }> = {
  negra: { label: "Negra", hex: "#1b1c1b" },
  azul: { label: "Azul", hex: "#1f3aa6" },
  blanca: { label: "Blanca", hex: "#ededed" },
  roja: { label: "Roja", hex: "#e8431f" },
};

/**
 * Specs técnicas. `motor`, `bateria`, `velocidadMaxKmh`, `rodado` y `pesoKg` son
 * requeridas; el resto es opcional porque no todas las publicaciones las informan
 * (ej. la autonomía y el tiempo de carga no figuran; el freno solo en algunos modelos).
 */
export interface Specs {
  motor: string;
  bateria: string;
  velocidadMaxKmh: number;
  rodado: string;
  pesoKg: number;
  autonomiaKm?: number;
  tiempoCargaHoras?: number;
  freno?: string;
  cargaMaxKg?: number;
}

export interface Imagen {
  src: string;
  alt: string;
}

/** Un color del modelo: sus imágenes y su link de ML puntual. */
export interface Variante {
  color: ColorSlug;
  imagenes: Imagen[];
  mercadoLibreUrl: string;
}

export interface Bicicleta {
  slug: string;
  nombre: string;
  destacado: boolean;
  descripcionCorta: string;
  descripcionLarga: string;
  specs: Specs;
  variantes: Variante[];
  /** Link de la tienda/modelo en ML (fallback general). */
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
