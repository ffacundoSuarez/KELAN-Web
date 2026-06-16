/**
 * Carga centralizada de las fuentes de KELAN.
 *
 * Tipografía primaria (títulos/destacados): ROUNDO — comercial, aún no disponible.
 *   Mientras tanto usamos Poppins (geométrica redondeada, muy parecida) como fallback.
 *
 * Tipografía secundaria (subtítulos/párrafos): Montserrat.
 *
 * --- CÓMO HACER EL SWAP A ROUNDO (cuando lleguen los .woff2) ---
 *   1. Poner los archivos en `app/fonts/` (ej. Roundo-Bold.woff2, Roundo-Regular.woff2).
 *   2. Reemplazar el bloque `fontTitulos` de abajo por:
 *
 *        import localFont from "next/font/local";
 *        export const fontTitulos = localFont({
 *          src: [
 *            { path: "../app/fonts/Roundo-Regular.woff2", weight: "400", style: "normal" },
 *            { path: "../app/fonts/Roundo-Bold.woff2",    weight: "700", style: "normal" },
 *          ],
 *          variable: "--ff-titulos",
 *          display: "swap",
 *        });
 *
 *   3. Listo. Ningún componente cambia: todos consumen la variable CSS `--font-titulos`.
 */
import { Poppins, Montserrat } from "next/font/google";

// Primaria — títulos y destacados (fallback de ROUNDO).
// La variable CSS (--ff-*) se mapea al token de Tailwind --font-titulos en globals.css.
export const fontTitulos = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--ff-titulos",
  display: "swap",
});

// Secundaria — subtítulos y párrafos.
export const fontTexto = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--ff-texto",
  display: "swap",
});
