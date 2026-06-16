import type { Metadata } from "next";
import "./globals.css";
import { fontTitulos, fontTexto } from "@/lib/fonts";
import { siteConfig } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.nombre} · Scooters y ciclomotores eléctricos`,
    template: `%s · ${siteConfig.nombre}`,
  },
  description: siteConfig.descripcion,
  keywords: [...siteConfig.keywords],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.nombre,
    title: siteConfig.nombre,
    description: siteConfig.descripcion,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.nombre,
    description: siteConfig.descripcion,
  },
  alternates: { canonical: "/" },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.nombre,
  url: siteConfig.url,
  description: siteConfig.descripcion,
  sameAs: [siteConfig.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-AR"
      className={`${fontTitulos.variable} ${fontTexto.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-kelan-negro text-kelan-gris">
        <JsonLd data={organizationLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
