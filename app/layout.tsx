import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.nombre} | Productos químicos e insumos industriales`,
    template: `%s | ${SITE.nombreCorto}`,
  },
  description: SITE.descripcion,
  keywords: [
    "productos químicos",
    "insumos industriales",
    "materias primas",
    "distribuidora química Venezuela",
    "suministros técnicos",
    "Valencia Carabobo",
  ],
  openGraph: {
    title: `${SITE.nombre} | Productos químicos e insumos industriales`,
    description: SITE.descripcion,
    url: SITE.url,
    siteName: SITE.nombre,
    locale: "es_VE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
