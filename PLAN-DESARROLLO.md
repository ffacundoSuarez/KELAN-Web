# Plan de desarrollo — KELAN E-BIKES · Web de catálogo (vitrina)

> Documento vivo. Se actualiza a medida que avanza el proyecto. El `.md` "padre" de contexto general
> es [`PLAN-PAGINA.md`](./PLAN-PAGINA.md); este archivo es el plan técnico de ejecución.

## Contexto

KELAN es una marca argentina de **scooters / ciclomotores eléctricos** (confirmado: el manual de
marca muestra un ciclomotor con asiento corrido, canasto, plataforma y espejos — NO bicis de
pedaleo). El objetivo es una **web vitrina**: mostrar los modelos con specs y fotos, y redirigir a
la cuenta de **Mercado Libre** de la clienta (Pili) para cerrar la venta. Sin carrito, sin pagos,
sin base de datos. La seña ya está cobrada y existe material gráfico (manual de marca + fotos a
futuro).

**Resultado buscado:** sitio rápido, mobile-first, fuerte en SEO local (Argentina), fiel a la
identidad de marca (dark-mode, verde lima eléctrico), desplegado en Vercel con CI desde GitHub.

### Decisiones cerradas con el cliente
- **Producto:** scooters/ciclomotores eléctricos. SEO keyed a *moto eléctrica / scooter eléctrico /
  ciclomotor eléctrico*, **no** "bicicleta eléctrica". Las categorías "Urbanas/MTB/Plegables" del
  plan original **se descartan** (eran de bici de pedaleo).
- **Tipografía ROUNDO:** todavía sin archivos `.woff2`. Se arranca con **fallback** rounded-geométrico
  (Poppins vía `next/font/google`) y se deja el sistema preparado para hacer el swap a ROUNDO local
  cambiando un solo archivo, sin tocar componentes.
- **Datos:** **placeholder** — `data/bicicletas.json` con 3-4 modelos de ejemplo + imágenes placeholder.

---

## Identidad de marca (del manual)

| Token | Valor | Uso |
| --- | --- | --- |
| Verde lima eléctrico | `#b3f70d` | Acentos, CTAs, hovers. Texto **negro** encima, nunca blanco. |
| Gris claro | `#f3f3f3` | Texto principal sobre fondo oscuro, superficies claras. |
| Negro profundo | `#0b0c0b` | Fondo base (modo oscuro nativo). |

- **Tipografía primaria (títulos):** ROUNDO → *fallback Poppins* hasta tener los archivos.
- **Tipografía secundaria (subtítulos/párrafos):** Montserrat.
- **Logo:** "KELAN" con la "E" en lima estilizada como símbolo de carga; tagline "E-BIKES".
- **Isotipo:** "C/E" con líneas de carga dentro de un círculo (variantes lima, blanco mono, negro mono).

---

## Observaciones

1. **Mismatch producto/categorías resuelto.** El catálogo se modela alrededor de scooters eléctricos.
   Las categorías reales se definirán cuando lleguen los modelos; mientras tanto se usan categorías
   provisionales (ej. `urbano`, `sport`, `carga`) marcadas como provisorias.
2. **Marca dark-mode-first.** El sitio nace en modo oscuro (es LA identidad, no un toggle). Verde lima
   con moderación — es muy saturado y cansa si se abusa.
3. **Contraste.** Texto lima sobre negro pasa AA solo en tamaño grande → lima únicamente en
   titulares/acentos, nunca para párrafos. Texto negro sobre lima: OK.
4. **Nomenclatura legal AR.** Según potencia/velocidad pueden ser "ciclomotores" (licencia/patente).
   Ser fiel a cómo los vende la clienta; no inventar specs legales. Footer con Data Fiscal AFIP, T&C y
   Política de Privacidad.
5. **Riesgo fuente ROUNDO.** Comercial. Fallback Poppins evita bloquear el build; swap futuro ~5 líneas.
6. **El JSON es el contrato.** Tipado fuerte desde el día uno; `lib/bicicletas.ts` es la única fuente
   de verdad y alimenta vistas + JSON-LD.

---

## Stack y estructura

- **Next.js 15 (App Router) + TypeScript** — SSG para indexación y velocidad.
- **Tailwind CSS v4** (mobile-first) con los 3 colores y las fuentes en el tema.
- **Datos en JSON local** (`data/bicicletas.json`) tipados vía `lib/bicicletas.ts`. Sin DB.
- **Fuentes:** Poppins (fallback de ROUNDO, títulos) + Montserrat (body), ambas `next/font`.
- **Deploy:** Vercel (Hobby) con CI desde GitHub.

### Árbol de carpetas objetivo
```
app/
  layout.tsx              # <html>, fuentes, metadata base, Header + Footer
  page.tsx                # Landing: Hero + grilla filtrable + Acerca de
  globals.css             # tema Tailwind v4 (@theme: colores, fonts) + base dark
  bicicletas/
    [slug]/page.tsx       # detalle dinámico (generateStaticParams + generateMetadata)
  sitemap.ts              # sitemap dinámico desde el JSON
  robots.ts               # robots.txt
  not-found.tsx           # 404 con branding
components/
  Header.tsx  Footer.tsx
  Hero.tsx
  ProductGrid.tsx  ProductCard.tsx  CategoryFilter.tsx
  ProductGallery.tsx  SpecsTable.tsx  MercadoLibreButton.tsx
  AboutSection.tsx
  JsonLd.tsx              # helper para Structured Data
lib/
  bicicletas.ts           # tipos + getters (getAll, getBySlug, getCategories)
  fonts.ts                # carga de fuentes (punto único para swap a ROUNDO)
  seo.ts                  # helpers de metadata + URL base del sitio
data/
  bicicletas.json         # placeholder: 3-4 modelos
public/
  images/bicis/           # fotos comprimidas (placeholder por ahora)
  brand/                  # logos/isotipo extraídos del manual (svg/png)
CLAUDE.md                 # doc del repo para Claude
```

---

## UI / UX

- **Modo oscuro nativo.** Fondo `#0b0c0b`, superficies con gris sutil, texto `#f3f3f3`, acentos lima.
  Mucho aire, estética premium-tech.
- **Header** sticky, minimal: isotipo + logo, links a secciones, CTA a Mercado Libre. Hamburguesa en
  mobile.
- **Hero** de impacto: foto del scooter a sangrado, titular en Poppins/ROUNDO, subhead, CTA primario
  (lima, texto negro) + secundario (ghost). Una sola idea.
- **Grilla de productos filtrable** por categoría (filtro client-side, instantáneo). Cards con
  `next/image`, nombre, precio, badge de categoría, hover con elevación/acento lima.
- **Detalle de producto:** galería (thumbnails + principal), tabla de specs legible (motor, batería,
  autonomía, velocidad máx, freno, peso, etc.), CTA grande "Comprar en Mercado Libre" en tab nueva.
  Migas de pan.
- **Acerca de Kelan:** bloque de marca/valores (eléctrico, urbano, sustentable).
- **Footer:** WhatsApp + redes, T&C, Política de Privacidad, Data Fiscal AFIP, © año.
- **Microinteracciones** sobrias; sin animaciones pesadas que frenen LCP.
- **Accesibilidad:** foco visible, contraste AA, `alt` descriptivos, navegación por teclado, targets
  táctiles ≥44px.

---

## Responsive (mobile-first)

- Breakpoints Tailwind estándar (`sm/md/lg/xl`). Se diseña primero a 360-390px y se escala.
- Grilla: 1 col (mobile) → 2 (sm) → 3 (lg). Hero reflow vertical en mobile.
- Header colapsa a hamburguesa < md. Galería de detalle: stack en mobile, 2 columnas en desktop.
- Imágenes con `sizes` correctos por breakpoint.
- Tipografía fluida (clamp) para titulares del hero.

---

## SEO (prioridad)

1. **Metadata API por ruta.** `metadata` estático en layout/landing y `generateMetadata` dinámico en
   `[slug]` (title, description, OpenGraph, Twitter, canonical). Plantilla `%s · KELAN E-Bikes`.
2. **Keywords long-tail geolocalizadas (AR):** "scooter eléctrico Argentina", "moto eléctrica urbana",
   "ciclomotor eléctrico precio", "[modelo] autonomía batería", etc. — NO "bicicleta eléctrica".
3. **Structured Data (JSON-LD):** `Product` por modelo con `offers` (precio, ARS, availability, url →
   ML) y `brand`; `Organization`/`WebSite` en el layout; `BreadcrumbList` en el detalle.
4. **`app/sitemap.ts` y `app/robots.ts`** generados desde el JSON.
5. **`next/image`** → `.webp`/`.avif`, `sizes` por dispositivo, `priority` en hero, lazy en el resto.
   `alt` descriptivo en todas.
6. **Links salientes a Mercado Libre:** `target="_blank" rel="nofollow noopener noreferrer"`.
7. **Contenido rico para crawlers:** specs completas como texto real (no imágenes).
8. **Core Web Vitals:** SSG, `next/font` con `display: swap` (sin layout shift), imágenes dimensionadas,
   JS mínimo. LCP < 2.5s.
9. **Semántica HTML:** un solo `<h1>` por página, jerarquía correcta, `<main>`/`<nav>`/`<article>`.
10. **Base técnica:** `metadataBase`, `lang="es-AR"`, favicon/apple-icon, `manifest`, OG por defecto.
    (Search Console + submit de sitemap = tarea post-deploy.)

---

## Lógica / flujo de datos

- **Fuente única:** `data/bicicletas.json`. Cada modelo:
  `slug, nombre, categoria, precio, moneda, destacado, descripcionCorta, descripcionLarga,
  specs{motor, bateria, autonomiaKm, velocidadMaxKmh, freno, pesoKg, ...}, imagenes[], mercadoLibreUrl`.
- **`lib/bicicletas.ts`** exporta tipos (`Bicicleta`, `Categoria`, `Specs`) y getters puros:
  `getAllBicicletas()`, `getBicicletaBySlug(slug)`, `getCategorias()`.
- **Renderizado estático:** landing y `generateStaticParams` leen del getter en build time → SSG.
- **Filtro de categoría:** componente cliente que filtra el array en memoria (sin fetch). Estado
  reflejable en query param.
- **CTA Mercado Libre:** `mercadoLibreUrl` del modelo; fallback a la cuenta general de la clienta.
- **Sin estado servidor, sin auth, sin DB.**

---

## Pasos de ejecución

- [x] **0a.** `CLAUDE.md` en la raíz.
- [x] **0b.** Actualizar `PLAN-PAGINA.md` (corregir producto a scooters).
- [x] **0c.** Guardar memoria del proyecto.
- [x] **1.** Scaffold Next.js 16 + TS + Tailwind v4; `globals.css` con tema (colores `kelan-*`, fuentes).
- [x] **2.** `lib/fonts.ts` con Poppins + Montserrat (`next/font`), preparado para swap a ROUNDO.
- [x] **3.** Tipos + getters en `lib/bicicletas.ts` y `data/bicicletas.json` con 3 modelos placeholder.
- [x] **4.** Layout: fuentes, metadata base + metadataBase, Header, Footer, JSON-LD Organization.
- [x] **5.** Landing: Hero + CatalogoFiltrable (filtro) + ProductCard + AboutSection.
- [x] **6.** Detalle `[slug]`: `generateStaticParams`, `generateMetadata`, galería, SpecsTable,
  MercadoLibreButton, JSON-LD Product + Breadcrumb.
- [x] **7.** `app/sitemap.ts`, `app/robots.ts`, `not-found.tsx`, páginas legales (términos/privacidad).
- [~] **8.** Logo como wordmark tipográfico (`components/Logo.tsx`); SVG oficial a `public/brand/` pendiente.
- [x] **9.** Imágenes placeholder generadas en `public/images/` y `public/images/bicis/`.

> **Verificado (sesión 2):** `npm run build` pasa (11 rutas, 3 productos SSG, sin errores de tipos);
> dev server responde 200 en home/producto/sitemap/robots con JSON-LD Product+Breadcrumb e `InStock`.
> Pendiente sustituir favicon/OG por los de marca.

---

## Verificación (end-to-end)

- `npm run dev` → landing carga, filtro funciona, cards linkean a `/bicicletas/[slug]`, CTA abre ML en
  tab nueva.
- `npm run build` → SSG OK, todas las rutas pre-renderizadas, sin errores de tipos.
- `/sitemap.xml` y `/robots.txt` responden correctamente.
- HTML: un `<h1>`, `alt` en imágenes, `<script type="application/ld+json">` con Product válido.
- Lighthouse (mobile): Performance/SEO/Accessibility altos; LCP < 2.5s; sin layout shift.
- Responsive a 360px / 768px / 1280px.

---

## Pendientes / a confirmar (no bloquean el scaffold)

- **Categorías reales** de scooters.
- **Archivos ROUNDO** (`.woff2`) → swap del fallback.
- **Datos y fotos reales** + URLs de Mercado Libre por modelo.
- **Dominio** definitivo (para `metadataBase`, sitemap, OG absolutas).
- **Datos legales:** Data Fiscal AFIP, WhatsApp/redes, texto T&C y Política de Privacidad.
