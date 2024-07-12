import { CONDUCTORES } from "@/types/datosConductores";
import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: CONDUCTORES[] = [
  {
    foto: "/images/user/user-01.png",
    nombre: "Daniel Alberto",
    apellido: "Romero Ruiz",
    tipo: "Cédula de extranjería",
    documento: 1005151662,
  },
  {
    foto: "/images/user/user-03.png",
    nombre: "Camilo",
    apellido: "García",
    tipo: "Cédula",
    documento: 1005151662,
  },
  {
    foto: "/images/user/user-05.png",
    nombre: "Marcos Andrés",
    apellido: "Suarez",
    tipo: "Pasaporte",
    documento: 1005151662,
  },
  {
    foto: "/images/user/user-06.png",
    nombre: "Gabriel",
    apellido: "Díaz",
    tipo: "Cédula",
    documento: 1005151662,
  },
  {
    foto: "/images/user/user-08.png",
    nombre: "Mateo Luis",
    apellido: "Rodríguez Mendieta",
    tipo: "Cédula",
    documento: 1005151662,
  },
];

const ListaConductores = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Lista de Conductores
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium  ml-8 uppercase xsm:text-base">
              Nombres
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Apellidos
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Tipo documento
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Número documento
            </h5>
          </div>
          {/* <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div> */}
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-4 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={brand.foto}
                  width={60}
                  height={50}
                  alt="Foto del conductor"
                />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.nombre}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.apellido}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.tipo}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.documento}</p>
            </div>

            {/* <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaConductores;