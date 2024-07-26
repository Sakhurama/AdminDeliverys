"use client"

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { ChangeEvent, FormEvent, useState } from "react";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app, storage } from "../../../../src/firebase";



const FormLayout = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (image) {
      const storage = getStorage();
      const storageRef = ref(storage, 'products/' + image.name);
      
      try {
        // Subir la imagen a Firebase Storage
        const snapshot = await uploadBytes(storageRef, image);
        console.log('Imagen subida con éxito');
        
        // Obtener la URL de descarga
        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log('URL de la imagen:', downloadURL);
        
        // Aquí puedes guardar la URL en tu base de datos si es necesario
      } catch (error) {
        console.error('Error al subir la imagen:', error);
      }
    }
  };

    return (
      <DefaultLayout>
        <Breadcrumb pageName="Nuevo producto" />

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-regular text-black dark:text-white">
                Añade un nuevo producto a tu inventario fácilmente
              </h3>
            </div>

            <form 
              onSubmit={handleSubmit}
            >
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Nombre del producto <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre del producto"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      required
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Precio <span className="text-meta-1">*</span>
                    </label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black dark:text-white">$</span>
                        <input
                        type="number"
                        placeholder="Valor del producto"
                        className="w-full pl-10 rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        required
                        />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Descripción
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Escribe como es tu producto..."
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    ></textarea>
                </div>

                <div className="mb-6">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Foto del producto
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                    />
                </div>

                <button 
                  type="submit"
                  className="flex w-full justify-center rounded bg-[#FFBC0D] hover:bg-[#ffdd87] hover:text-black transition-colors duration-300 p-3 font-medium text-black hover:bg-opacity-90"
                  >
                  Agregar producto
                </button>
              </div>
            </form>
        </div>
      </DefaultLayout>
    );
};

export default FormLayout;