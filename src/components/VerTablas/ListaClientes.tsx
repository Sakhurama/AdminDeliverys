import { Package } from "@/types/package";
import { DatosClientes } from "@/types/datosClientes";

const packageData: DatosClientes[] = [
  {
    name: "Daniel Romero",
    celular: 3206215191,
    email: `Legendadtwo@gmail.com`,
    status: "Enviado",
    direccion: "Calle 23 #54-10 Piso 2 Barrio La Castellana",
  },
  {
    name: "María García",
    celular: 3157894563,
    email: "maria.garcia@example.com",
    status: "Cancelado",
    direccion: "Carrera 10 #45-30 Apartamento 301 Barrio Santa Fe",
  },
  {
    name: "Carlos Pérez",
    celular: 3112567894,
    email: "carlos.perez@example.com",
    status: "Enviado",
    direccion: "Avenida 68 #30-15 Casa 10 Barrio El Prado",
  },
  {
    name: "Lucía Fernández",
    celular: 3178956321,
    email: "lucia.fernandez@example.com",
    status: "Pendiente",
    direccion: "Calle 50 #20-05 Edificio Torres de Andalucía, Apt. 402",
  },
  {
    name: "Carlos Pérez",
    celular: 3112567894,
    email: "carlos.perez@example.com",
    status: "Enviado",
    direccion: "Avenida 68 #30-15 Casa 10 Barrio El Prado",
  },
];

const ListaClientes = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Nombre del cliente
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Correo eletrónico
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Estado
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Dirección
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </h5>
                  <p className="text-sm">{packageItem.email}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.celular}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      packageItem.status === "Enviado"
                        ? "bg-success text-success"
                        : packageItem.status === "Cancelado"
                          ? "bg-danger text-danger"
                          : "bg-warning text-warning"
                    }`}
                  >
                    {packageItem.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                <p className="text-black dark:text-white">
                    {packageItem.direccion}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaClientes;
