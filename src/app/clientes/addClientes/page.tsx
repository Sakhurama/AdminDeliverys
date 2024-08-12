"use client"

import React, { useState } from 'react';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useCreateCustomerMutation } from "../../../libs/requests/react.generated";
import { toast } from 'react-toastify';



const FormLayout = () => {
    const [createCustomer] = useCreateCustomerMutation();
    const [formData, setFormData] = useState({
      name: '',
      lastName: '',
      phone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await createCustomer({
          variables: {
            data: {
              name: formData.name,
              lastName: formData.lastName,
              phone: formData.phone,
            }
          }
        });
        toast.success('Cliente creado exitosamente');
        setFormData({
          name: '',
          lastName: '',
          phone: '',
        });
    };

    return (
      <DefaultLayout>
        <Breadcrumb pageName="Agregar un nuevo Cliente" />

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-regular text-black dark:text-white">
                Añade un nuevo cliente
              </h3>
            </div>

            <form
              onSubmit={handleSubmit}
            >
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Nombre <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre del cliente"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Apellido <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre del cliente"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      name='lastName'
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Celular <span className="text-meta-1">*</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="Número de celular"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            minLength={10} // Los numeros de celular y telefono tienen 10 caracteres
                        />
                    </div>
                </div>

                <button 
                  className="flex w-full justify-center rounded bg-[#FFBC0D] hover:bg-[#ffdd87] hover:text-black transition-colors duration-300 p-3 font-medium text-black hover:bg-opacity-90"
                  type="submit"
                  >
                  Agregar cliente
                </button>
              </div>
            </form>
        </div>
      </DefaultLayout>
    );
};

export default FormLayout;