import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite probar el dev server desde otros dispositivos de la red (ej. el celular
  // entrando por la IP). Solo afecta a `next dev`; producción (Vercel / `next start`)
  // no lo usa. Si `npm run dev` muestra otra IP en "Network:", cambiala/agregala acá.
  allowedDevOrigins: ["192.168.0.18"],
};

export default nextConfig;
