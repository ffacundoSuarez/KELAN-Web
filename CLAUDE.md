# CLAUDE.md — KELAN E-BIKES

Guía para Claude Code al trabajar en este repo. Leer antes de empezar cualquier sesión.

## Qué es este proyecto

Web **vitrina** (catálogo digital, sin carrito ni pagos) para **KELAN**, marca argentina de
**bicicletas eléctricas urbanas**. Muestra los modelos con specs y fotos y redirige a la tienda de
**Mercado Libre** de la clienta (Pili, tienda "Chuwi") para cerrar la venta.

> ⚠️ Terminología/SEO keyed a **"bicicleta eléctrica / e-bike"** — así se titulan las publicaciones
> reales de ML (KELAN Go/City/Max, 48V, 350-500W). Son estilo ciclomotor (asiento corrido, canasto,
> espejos) pero se **venden como "bicicleta eléctrica"**: seguir ese término de venta, sin inventar
> pedaleo asistido. (Revierte una regla previa que decía "nunca bicicleta eléctrica" — ver
> `PLAN-DESARROLLO.md`.) **No** mostrar precio en el sitio (se ve en ML).

Documentos de referencia:
- [`PLAN-PAGINA.md`](./PLAN-PAGINA.md) — contexto general (`.md` padre).
- [`PLAN-DESARROLLO.md`](./PLAN-DESARROLLO.md) — plan técnico de ejecución y checklist de progreso.
- `borrador/KELAN MANUAL DE MARCA.pdf` — manual de marca (6 páginas).

## Stack

- **Next.js 15 (App Router) + TypeScript** — SSG.
- **Tailwind CSS v4** — mobile-first, modo oscuro nativo.
- **Datos:** JSON local (`data/bicicletas.json`) tipado vía `lib/bicicletas.ts`. Sin base de datos.
- **Fuentes:** `next/font` (Poppins + Montserrat por ahora).
- **Deploy:** Vercel (Hobby), CI desde GitHub.

## Identidad de marca

| Token Tailwind | Hex | Uso |
| --- | --- | --- |
| `kelan-lima` | `#b3f70d` | Acentos, CTAs, hovers. Texto **negro** encima (nunca blanco). |
| `kelan-gris` | `#f3f3f3` | Texto principal sobre fondo oscuro. |
| `kelan-negro` | `#0b0c0b` | Fondo base. |

- **Títulos:** ROUNDO (comercial, aún no disponible) → **fallback Poppins**.
- **Body:** Montserrat.
- **Regla de contraste:** lima solo en titulares/acentos/CTAs, jamás para párrafos (no pasa AA en
  cuerpo chico sobre negro).

### Swap de fuente a ROUNDO (cuando lleguen los archivos)
1. Poner los `.woff2` en `app/fonts/` (o `public/fonts/`).
2. En `lib/fonts.ts` reemplazar el `Poppins` de `next/font/google` por `localFont` apuntando a los
   archivos. Mantener la misma variable CSS exportada → ningún componente se toca.

## Convenciones

- **Idioma de UI:** español (Argentina), `lang="es-AR"`. Nombres de tipos/variables del dominio en
  español (`Bicicleta`, `getBicicletaBySlug`) por consistencia con el JSON.
- **Catálogo:** 3 modelos de bici eléctrica — **Go** (4 colores), **City** (2), **Max** (1). Cada
  modelo es una entrada en `data/bicicletas.json` con `variantes[]`; cada variante tiene su `color`,
  sus `imagenes` y su `mercadoLibreUrl` (deep-link por color: cada color abre su publicación en ML).
  Ver `colores` (swatches) en `lib/bicicletas.ts`. Specs reales de ML; **sin precio**.
- **Datos:** todo sale de `data/bicicletas.json` vía los getters de `lib/bicicletas.ts`. No hardcodear
  modelos en componentes.
- **Assets de marca:** logos oficiales en `public/brand/` (wordmark, logo-color/dark/light, isotipo-
  badge/dark/lima). Favicon en `app/icon.png` (generado del isotipo). Fotos en `public/images/bicis/`.
- **Imágenes:** siempre `next/image` con `alt` descriptivo + `sizes`. Comprimir antes de subir
  (Squoosh/TinyJPG) a `public/images/bicis/`.
- **Links a Mercado Libre:** `target="_blank" rel="nofollow noopener noreferrer"`.
- **SEO:** cada página con su `metadata`/`generateMetadata`; JSON-LD `Product` en el detalle.
- **Mobile-first:** diseñar a 360px y escalar con breakpoints `sm/md/lg`.

## Comandos

```bash
npm run dev      # desarrollo local
npm run build    # build de producción (SSG) — debe pasar sin errores de tipos
npm run start    # servir el build
npm run lint     # linter
```

(El proyecto Next.js todavía no está scaffoldeado — ver checklist en `PLAN-DESARROLLO.md`.)

## Estado actual

- ✅ Plan y documentación (`PLAN-DESARROLLO.md`, este archivo, `PLAN-PAGINA.md` actualizado).
- ⬜ Scaffold del proyecto Next.js + Tailwind y componentes (pendiente).

## Pendientes que dependen del cliente

- Categorías reales de scooters · archivos ROUNDO · datos/fotos/links ML reales · dominio definitivo ·
  datos legales (Data Fiscal AFIP, WhatsApp/redes, T&C, Política de Privacidad).
