
import Image from "next/image";

const packageData = [
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
    <div className="container mx-auto">
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-15 px-4 py-4 font-medium text-black dark:text-white xl:pl-11">

                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Nombre
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Apellido
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Tipo de documento
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Número de documento
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                    <div className="h-12.5 w-15 rounded-md">
                      <Image
                        src={packageItem.foto}
                        width={60}
                        height={50}
                        alt="Product"
                      />
                    </div>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                    {packageItem.nombre}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.apellido}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.tipo}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.documento}
                    </p>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListaConductores;