"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useProductsQuery } from "@/libs/requests/react.generated";


const CategoriasProductos: React.FC = () => {
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const [selectedProducts, setSelectedProducts] = useState<Array<{ id: string | number; name: string; price: number; image: string; }>>([]);
  const {data, loading, error} = useProductsQuery();
  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  const handleProductSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const selectedProduct = data && data?.products!.length > 0 && data?.products?.find(p => p.id.toString() === selectedId);
    if (selectedProduct) {
      setSelectedProducts(prev => [...prev, { 
        id: selectedProduct.id, 
        name: selectedProduct.name,
        price: selectedProduct.ProductPrice[selectedProduct.ProductPrice.length - 1].value / 100,
        image: selectedProduct.image  ? selectedProduct.image : "/images/product/hamburguesa.png"
      }]);
    }
    changeTextColor();
  };

  return (
    <div className="w-full xl:w-1/2">
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        Productos a enviar
      </label>

      <div className="relative z-20 bg-transparent dark:bg-form-input">
        <select
          value=""
          onChange={handleProductSelection}
          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
            isOptionSelected ? "text-black dark:text-white" : ""
          }`}
        >
          <option value="" disabled>Elegir los productos</option>
          {loading ? (
            <option>Cargando productos...</option>
          ) : error ? (
            <option>Error al cargar productos</option>
          ) : (
            data && data?.products!.length > 0 && data?.products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name} - ${(product.ProductPrice[product.ProductPrice.length - 1].value/100).toLocaleString('es-ES')}
              </option>
            ))
          )}
        </select>

        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                fill=""
              ></path>
            </g>
          </svg>
        </span>
      </div>

{selectedProducts.length > 0 ? (
  <div className="mt-6">
        <h3 className="mb-3 text-sm font-medium text-black dark:text-white">Productos Seleccionados</h3>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">Nombre</th>
              <th scope="col" className="px-6 py-3">Precio</th>
              <th scope="col" className="px-6 py-3">Acción</th>
            </tr>
          </thead>
          <tbody>
            {selectedProducts.map((product) => (
              <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                <Image
                  src={product.image}
                  width={60}
                  height={60}
                  alt={product.name}
                />
                </td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">${product.price.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td className="px-6 py-4">
                  <button 
                    onClick={() => setSelectedProducts(prev => prev.filter(p => p.id !== product.id))}
                    className="font-medium text-red hover:underline"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
) : (<div className="text-red my-10"></div>)}
      

    </div>
  );
};

export default CategoriasProductos;