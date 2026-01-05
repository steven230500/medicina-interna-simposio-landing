import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = "https://simposiomedicinaunivalle.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "XIV Simposio de Medicina Interna – Universidad del Valle",
    template: "%s | XIV Simposio de Medicina Interna",
  },
  description:
    "Únete al XIV Simposio de Medicina Interna de la Universidad del Valle. 26 y 27 de febrero de 2026. Actualización médica, talleres y conferencias. Modalidad presencial y virtual.",
  keywords: [
    "Medicina Interna",
    "Simposio Médico",
    "Universidad del Valle",
    "Educación Médica Continua",
    "Salud Cali",
    "Eventos Médicos 2026",
    "Medicina Interna Univalle",
  ],
  authors: [{ name: "Departamento de Medicina Interna - Univalle" }],
  creator: "Universidad del Valle",
  publisher: "Universidad del Valle",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "XIV Simposio de Medicina Interna – Universidad del Valle",
    description:
      "Evento académico destacado en medicina interna. Participa en conferencias y talleres exclusivos con expertos.",
    url: siteUrl,
    siteName: "XIV Simposio de Medicina Interna",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists or is created
        width: 1200,
        height: 630,
        alt: "XIV Simposio de Medicina Interna – Universidad del Valle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XIV Simposio de Medicina Interna 2026",
    description:
      "Inscríbete ahora al evento más importante de medicina interna en el suroccidente colombiano.",
    images: ["/og-image.jpg"], // Same or different image for Twitter
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon.ico/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.ico/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon.ico/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/favicon.ico/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/favicon.ico/apple-icon.png",
      },
    ],
    shortcut: "/favicon.ico/favicon.ico",
  },
  manifest: "/favicon.ico/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "XIV Simposio de Medicina Interna",
    startDate: "2026-02-26T08:00",
    endDate: "2026-02-27T18:00",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: [
      {
        "@type": "Place",
        name: "Hospital Universitario del Valle Evaristo García",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Calle 5 #36-08",
          addressLocality: "Cali",
          postalCode: "760042",
          addressRegion: "Valle del Cauca",
          addressCountry: "CO",
        },
      },
      {
        "@type": "VirtualLocation",
        url: "https://simposiomedicinaunivalle.com/envivo",
      },
    ],
    image: [
      "https://simposiomedicinaunivalle.com/logo.png", // Using absolute URL helps
    ],
    description:
      "Simposio de actualización en Medicina Interna organizado por la Universidad del Valle. Temas de cardiología, neumología, nefrología y más.",
    organizer: {
      "@type": "Organization",
      name: "Universidad del Valle - Departamento de Medicina Interna",
      url: "https://medicinainterna.univalle.edu.co", // Hypothetical or real URL
    },
    offers: {
      "@type": "Offer",
      url: "https://forms.gle/ExEzybUFxahugFax5",
      price: "0",
      priceCurrency: "COP",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01T00:00",
    },
  };

  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
