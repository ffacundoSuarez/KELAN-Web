# KELAN E-BIKES — Contexto del proyecto (.md padre)

> Documento de contexto general. El plan técnico de ejecución está en
> [`PLAN-DESARROLLO.md`](./PLAN-DESARROLLO.md) y la guía para Claude en [`CLAUDE.md`](./CLAUDE.md).
> Última actualización: 2026-06-16.

## Qué es el proyecto

Web **vitrina** (catálogo digital, sin carrito ni pagos internos) para **KELAN**, marca argentina de
**bicicletas eléctricas urbanas**. Muestra los modelos y redirige a la tienda de **Mercado Libre**
(tienda "Chuwi") de la clienta (Pili) para cerrar la venta. Seña ya cobrada. Material gráfico: manual
de marca en PDF + fotos reales.

> **Terminología (REVERSIÓN 2026-07-17):** el producto es estilo ciclomotor (asiento corrido, canasto,
> espejos) PERO las publicaciones reales de ML se titulan **"bicicleta eléctrica"** (KELAN Go/City/Max)
> y la marca es KELAN E-BIKES → el SEO/copy va keyed a **bicicleta eléctrica / bici eléctrica / e-bike**
> para hablar igual que ML. (Antes este doc decía "scooters, nunca bicicleta eléctrica"; se revirtió
> con confirmación del usuario.)

## Decisiones cerradas

- **Producto:** bicicletas eléctricas urbanas (3 modelos: Go/City/Max). **Sin precio** en el sitio.
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
  (bicicleta eléctrica / bici eléctrica / e-bike urbana).
- JSON-LD `Product` con `offers` apuntando a Mercado Libre (**sin `price`** — no se muestra precio);
  `Organization` + `BreadcrumbList`.
- `next/image` (webp/avif) con `alt` descriptivo en todo.
- `sitemap.ts` + `robots.ts` generados desde el JSON.
- Links a Mercado Libre con `target="_blank" rel="nofollow noopener noreferrer"`.
- Specs técnicas completas por modelo (motor, batería, autonomía, velocidad, freno, peso, materiales).

## Imágenes

Fotos provistas por la clienta (Google Drive), nombradas tipo `NombreDelModelo_01`. Se comprimen
manualmente (Squoosh/TinyJPG) antes de subirlas a `public/images/bicis/`.

## Catálogo (estructura real)

KELAN ofrece **3 modelos**: **Go** (350W, 48V 12Ah, 4 colores), **City** (500W, 48V 20Ah, 2 colores) y
**Max** (500W, 48V 20Ah, freno disco delantero, 1 color). Cada modelo se muestra como una card; en el
detalle hay un **selector de color** (swatches) que cambia la galería y el link de ML. El modelo de
datos usa `variantes[]` por modelo (cada variante: `color`, `imagenes`, `mercadoLibreUrl` para
**deep-link por color**). Specs y links de ML son **reales**; no se muestra precio. Pendiente: foto
real de City roja (usa la blanca como placeholder).

## Assets de marca

Logos oficiales en `public/brand/`: `kelan-wordmark.png` (header), `kelan-logo-color.png` (footer),
`kelan-logo-dark/light.png` (mono para fondos claro/oscuro), `kelan-isotipo-badge/dark/lima.png`
(isotipo "CE"). Favicon generado del isotipo en `app/icon.png` + `app/apple-icon.png`.

## Pendientes a confirmar con el cliente

Categorías reales · archivos ROUNDO · datos/fotos/links ML reales · dominio definitivo · datos legales
(Data Fiscal AFIP, WhatsApp/redes, T&C, Política de Privacidad).
