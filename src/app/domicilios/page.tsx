import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ListaDomicilios from "@/components/Tablas/ListaDomicilios";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Negocio | Domicilios",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const ClientesPage = () => {
  return (
    <DefaultLayout>
      <div className="flex justify-between">
        <Breadcrumb pageName="Domicilios"/>
        
        <Link
          href="/domicilios/addDomicilios"
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FFBC0D] mb-3 px-7 py-4 text-center font-medium text-white hover:bg-[#ffdd87] hover:text-black transition-colors duration-300 lg:px-8 xl:px-10"
        >
          <span>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /><path d="M15 12h-6" /><path d="M12 9v6" /></svg>
          </span>
          Crear domicilio
        </Link>
      </div>

      <div className="flex flex-col gap-10">
        <ListaDomicilios />
      </div>
    </DefaultLayout>
  );
};

export default ClientesPage;