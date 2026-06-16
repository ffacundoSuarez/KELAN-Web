# KELAN E-BIKES — Contexto del proyecto (.md padre)

> Documento de contexto general. El plan técnico de ejecución está en
> [`PLAN-DESARROLLO.md`](./PLAN-DESARROLLO.md) y la guía para Claude en [`CLAUDE.md`](./CLAUDE.md).
> Última actualización: 2026-06-16.

## Qué es el proyecto

Web **vitrina** (catálogo digital, sin carrito ni pagos internos) para **KELAN**, marca argentina de
**scooters / ciclomotores eléctricos**. Muestra los modelos y redirige a la cuenta de **Mercado Libre**
de la clienta (Pili) para cerrar la venta. Seña ya cobrada. Material gráfico: manual de marca en PDF +
fotos (a futuro).

> **Corrección importante (2026-06-16):** la versión original de este documento describía bicicletas de
> pedaleo con categorías "Urbanas / MTB / Plegables". El manual de marca muestra claramente
> **scooters/ciclomotores eléctricos** (asiento corrido, canasto, plataforma, espejos). El proyecto se
> reorientó a ese producto. El SEO va keyed a *moto eléctrica / scooter eléctrico / ciclomotor
> eléctrico*, **no** a "bicicleta eléctrica".

## Decisiones cerradas

- **Producto:** scooters/ciclomotores eléctricos.
- **Tipografía ROUNDO:** aún sin archivos `.woff2` → se arranca con fallback **Poppins** y se hace el
  swap cuando estén disponibles (sin tocar componentes).
- **Datos:** **placeholder** por ahora (`data/bicicletas.json` con 3-4 modelos de ejemplo + imágenes
  placeholder); se reemplazan por los reales más adelante.

## Stack

- **Next.js (App Router) + TypeScript** — SSR/SSG para buena indexación.
- **Tailwind CSS v4** — diseño responsivo, mobile-first.
- **JSON local (`data/bicicletas.json`)** — datos de cada modelo (nombre, descripción, precio, link de
  Mercado Libre, ruta de imagen, specs). Sin base de datos.
- **Vercel (Plan Hobby)** — deploy con CI desde GitHub.

## Identidad visual (del manual de marca)

- Colores: Verde/Lima Eléctrico `#b3f70d`, Gris Claro `#f3f3f3`, Negro Profundo `#0b0c0b`.
- Tipografía primaria: **ROUNDO** (fallback Poppins por ahora) — títulos y destacados.
- Tipografía secundaria: **Montserrat** — subtítulos y párrafos.
- Estética dark-mode nativo, tech/eléctrica, geometría redondeada.
- Logo "KELAN" con la "E" en lima (símbolo de carga) + tagline "E-BIKES"; isotipo "C/E" en círculo.

## Estructura de páginas

1. **Landing** — Hero de impacto, grilla de productos filtrable por categoría, sección "Acerca de Kelan".
2. **Detalle de producto** — rutas dinámicas `/bicicletas/[slug]`, galería, specs técnicas, CTA que
   abre Mercado Libre en tab nueva.
3. **Footer** — WhatsApp/redes, T&C, Política de Privacidad, link a Data Fiscal (AFIP).

## SEO

- Metadata dinámica con la Metadata API de Next.js, keywords long-tail geolocalizadas para Argentina
  (scooter/moto/ciclomotor eléctrico).
- JSON-LD `Product` con `offers` apuntando a Mercado Libre; `Organization` + `BreadcrumbList`.
- `next/image` (webp/avif) con `alt` descriptivo en todo.
- `sitemap.ts` + `robots.ts` generados desde el JSON.
- Links a Mercado Libre con `target="_blank" rel="nofollow noopener noreferrer"`.
- Specs técnicas completas por modelo (motor, batería, autonomía, velocidad, freno, peso, materiales).

## Imágenes

Fotos provistas por la clienta (Google Drive), nombradas tipo `NombreDelModelo_01`. Se comprimen
manualmente (Squoosh/TinyJPG) antes de subirlas a `public/images/bicis/`.

## Catálogo (estructura real)

Por ahora KELAN ofrece **un único modelo de scooter en 4 colores**: Negra, Azul, Blanca y Roja.
Cada color se muestra como un **bloque/card separado** (no un carrusel que cambia la imagen). El modelo
de datos usa el campo `color` (no categorías). Cuando haya más modelos, se suma un campo `modelo` sin
romper la estructura. Specs, precio, nombre comercial y links de Mercado Libre siguen siendo placeholder
(las fotos ya son reales).

## Assets de marca

Logos oficiales en `public/brand/`: `kelan-wordmark.png` (header), `kelan-logo-color.png` (footer),
`kelan-logo-dark/light.png` (mono para fondos claro/oscuro), `kelan-isotipo-badge/dark/lima.png`
(isotipo "CE"). Favicon generado del isotipo en `app/icon.png` + `app/apple-icon.png`.

## Pendientes a confirmar con el cliente

Categorías reales · archivos ROUNDO · datos/fotos/links ML reales · dominio definitivo · datos legales
(Data Fiscal AFIP, WhatsApp/redes, T&C, Política de Privacidad).
