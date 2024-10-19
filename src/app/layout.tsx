import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import ClientProvider from "@/components/ClientProvider";
import { ReactNode } from "react";

export const metadata = {
  title: "Admin Deliverys", // Título de tu página
  description: "Proyecto de gestor de domicilios por Daniel Romero",
  icons: {
    icon: "/favicon.svg",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/favicon.svg" />
        {/* Puedes agregar más iconos en otros formatos si lo necesitas */}
      </head>
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <ClientProvider>{children}</ClientProvider>
        </div>
      </body>
    </html>
  );
}
