"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CategoriasProductos from "@/components/CategoriasForm/Productos";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


const FormLayout = () => {
    return (
      <DefaultLayout>
        <Breadcrumb pageName="Agregar un nuevo Domicilio" />

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-regular text-black dark:text-white">
                Crea un nuevo domicilio y rastrea su ubicación
              </h3>
            </div>

            <form action="#">
              <div className="p-6.5">

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Nombre del cliente<span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre del cliente"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      required
                      />
                  </div>

                  <div className="w-full xl:w-1/2">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Celular del cliente<span className="text-meta-1">*</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="Número de celular"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            required
                            minLength={10} // Los numeros de celular y telefono tienen 10 caracteres
                        />
                    </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Dirección de destino <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Donde se entrega el domicilio..."
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    required
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Observaciones
                  </label>
                  <input
                    type="text"
                    placeholder="Dejar en portería..."
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    required
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Dirección de despacho <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Donde se recoge el domicilio..."
                    defaultValue="Calle 1 #12-34, Manizales, Colombia"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    required
                  />
                </div>

                <div className="mb-4.5">
                  <CategoriasProductos />
                </div>

                <button className="flex w-full justify-center rounded bg-[#FFBC0D] hover:bg-[#ffdd87] hover:text-black transition-colors duration-300 p-3 font-medium text-black hover:bg-opacity-90">
                  Agregar domicilio
                </button>
              </div>
            </form>
        </div>
      </DefaultLayout>
    );
};

export default FormLayout;