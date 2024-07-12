import Image from "next/image";
import { Product } from "@/types/product";
import { PRODUCTOS } from "@/types/datosProductos";

const productData: PRODUCTOS[] = [
  {
    image: "/images/product/hamburguesa.png",
    name: "Hamburguesa",
    price: 10000,
    description: "Deliciosa hamburguesa con carne jugosa, lechuga fresca y tomate.",
  },
  {
    image: "/images/product/perrito.png",
    name: "Perro caliente",
    price: 18200,
    description: "Clásico perro caliente con salchicha, cebolla, mostaza y ketchup.",
  },
  {
    image: "/images/product/papas.png",
    name: "Papas locas",
    price: 1000000,
    description: "Crocantes papas fritas con salsa especial, queso y trocitos de tocineta.",
  },
  {
    image: "/images/product/hamburguesadoble.png",
    name: "Hamburguesa doble carne",
    price: 32000,
    description: "Hamburguesa con doble carne, queso derretido, lechuga y tomate.",
  },
];

const ListaProductos = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Todos tus productos
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Nombre del producto</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Precio</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Descripción</p>
        </div>
        {/* <div className="col-span-1 flex items-center">
          <p className="font-medium">???</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">???</p>
        </div> */}
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={product.image}
                  width={60}
                  height={50}
                  alt="Product"
                />
              </div>
              <p className="text-sm text-black dark:text-white">
                {product.name}
              </p>
            </div>
          </div>
          <div className="col-span-1 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              ${product.price.toLocaleString('es-ES')}
            </p>
          </div>
          <div className="col-span-3 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product.description}
            </p>
          </div>
          {/* <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{product.sold}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">${product.profit}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;
