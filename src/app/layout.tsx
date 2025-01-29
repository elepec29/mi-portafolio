import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ContenedorComponent from "./(components)/contenedor/contenedor";
import NavbarComponent from "./(components)/navbar/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio elec.dev",
  description: "Portafolio de proyectos de elec.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <NavbarComponent />
        </header>
        <ContenedorComponent>{children}</ContenedorComponent>
        {/* <FooterComponent /> */}
      </body>
    </html>
  );
}
