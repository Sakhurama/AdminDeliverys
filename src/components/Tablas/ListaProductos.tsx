import { Products } from "@/libs/requests/nodes.generated";
import Image from "next/image";
// import { useProductsQuery } from "@/libs/requests/react.generated";


const ListaProductos = () => {
  // const {data, loading, error} = useProductsQuery();
  const products = [
    {
      id: "1",
      name: "Hamburguesa",
      image: "/images/product/hamburguesa.png",
      ProductPrice: {
        value: 14500,
      },
      description: "Jugosa hamburguesa con lechuga, tomate y queso.",
      createdAt: "2025-01-01T12:00:00Z",
      updatedAt: "2025-01-02T12:00:00Z",
    },
    {
      id: "2",
      name: "Hamburguesa Doble",
      image: "/images/product/hamburguesadoble.png",
      ProductPrice: {
        value: 22000,
      },
      description: "Hamburguesa doble con extra carne y queso.",
      createdAt: "2025-01-01T12:05:00Z",
      updatedAt: "2025-01-02T12:05:00Z",
    },
    {
      id: "3",
      name: "Papas Fritas",
      image: "/images/product/papas.png",
      ProductPrice: {
        value: 6000,
      },
      description: "Crocantes papas fritas acompañadas de salsa.",
      createdAt: "2025-01-01T12:10:00Z",
      updatedAt: "2025-01-02T12:10:00Z",
    },
    {
      id: "4",
      name: "Perrito Caliente",
      image: "/images/product/perrito.png",
      ProductPrice: {
        value: 12500,
      },
      description: "Hot dog con salchicha, pan suave y toppings.",
      createdAt: "2025-01-01T12:15:00Z",
      updatedAt: "2025-01-02T12:15:00Z",
    },
  ];

  const data = { products };
  const loading = false;
  const error = null;
  

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Todos tus productos
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center sm:col-span-3">
          <p className="font-medium">Nombre del producto</p>
        </div>
        <div className="col-span-2 items-center sm:flex">
          <p className="font-medium">Precio</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Descripción</p>
        </div>
        {/* <div className="col-span-1 flex items-center">
          <p className="font-medium">???</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">???</p>
        </div> */}
      </div>

      {data && data?.products!.length > 0 && data?.products.map((product) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={product.id}
        >
          <div className="col-span-2 flex items-center sm:col-span-3">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={product.image ? product.image : "/images/product/hamburguesa.png"}
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
          
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${(product.ProductPrice.value).toLocaleString('es-ES')}
            </p>
          </div>
          <div className="col-span-2 flex items-center">
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
