"use client"

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useCreateDriverMutation } from "../../../libs/requests/react.generated";
import { toast } from 'react-toastify';
import { useState } from "react";



const FormLayout = () => {

    const [createDriver] = useCreateDriverMutation();
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
        const response = await createDriver({
          variables: {
            data: {
              name: formData.name,
              lastName: formData.lastName,
              phone: formData.phone,
            }
          }
        });
        toast.success('Conductor creado exitosamente');
        setFormData({
          name: '',
          lastName: '',
          phone: '',
        });
    };

    return (
      <DefaultLayout>
        <Breadcrumb pageName="Agregar un conductor" />

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-regular text-black dark:text-white">
                Añade un nuevo conductor
              </h3>
            </div>

            <form
              onSubmit={handleSubmit}
            >
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Nombres <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nombres del conductor"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Apellidos <span className="text-meta-1">*</span>
                    </label>
                        <input
                        type="text"
                        placeholder="Apellidos del conductor"
                        className="w-full pl-5 rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Celular <span className="text-meta-1">*</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Número de celular del conductor"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    </div>
                </div>
                
                <button 
                  type="submit"
                  className="flex w-full justify-center rounded bg-[#FFBC0D] hover:bg-[#ffdd87] hover:text-black transition-colors duration-300 p-3 font-medium text-black hover:bg-opacity-90"
                  >
                  Agregar conductor
                </button>
              </div>
            </form>
        </div>
      </DefaultLayout>
    );
};

export default FormLayout;