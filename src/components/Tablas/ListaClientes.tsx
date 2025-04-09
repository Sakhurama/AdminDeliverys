"use client";

import { useCustomersQuery } from "@/libs/requests/react.generated";




const ListaClientes = () => {
  // const {data, loading, error} = useCustomersQuery();
  const customers = [
    {
      id: "1",
      name: "Valentina",
      lastName: "Ruiz",
      phone: "+5491122334455",
      image: "/images/user/user-01.png",
      createdAt: "2025-02-01T08:00:00Z",
      updatedAt: "2025-02-05T09:30:00Z",
    },
    {
      id: "2",
      name: "Diego",
      lastName: "Mendoza",
      phone: "+5491133445566",
      image: "/images/user/user-02.png",
      createdAt: "2025-02-02T09:15:00Z",
      updatedAt: "2025-02-06T10:45:00Z",
    },
    {
      id: "3",
      name: "Camila",
      lastName: "Herrera",
      phone: "+5491144556677",
      image: "/images/user/user-03.png",
      createdAt: "2025-02-03T10:30:00Z",
      updatedAt: "2025-02-07T11:50:00Z",
    },
    {
      id: "4",
      name: "Nicolás",
      lastName: "Morales",
      phone: "+5491155667788",
      image: "/images/user/user-04.png",
      createdAt: "2025-02-04T11:45:00Z",
      updatedAt: "2025-02-08T12:55:00Z",
    },
    {
      id: "5",
      name: "Florencia",
      lastName: "Castro",
      phone: "+5491166778899",
      image: "/images/user/user-05.png",
      createdAt: "2025-02-05T13:00:00Z",
      updatedAt: "2025-02-09T14:10:00Z",
    },
    {
      id: "6",
      name: "Tomás",
      lastName: "Ortega",
      phone: "+5491177889900",
      image: "/images/user/user-06.png",
      createdAt: "2025-02-06T14:15:00Z",
      updatedAt: "2025-02-10T15:20:00Z",
    },
    {
      id: "7",
      name: "Martina",
      lastName: "Vega",
      phone: "+5491188990011",
      image: "/images/user/user-07.png",
      createdAt: "2025-02-07T15:30:00Z",
      updatedAt: "2025-02-11T16:30:00Z",
    },
    {
      id: "8",
      name: "Facundo",
      lastName: "Silva",
      phone: "+5491199001122",
      image: "/images/user/user-08.png",
      createdAt: "2025-02-08T16:45:00Z",
      updatedAt: "2025-02-12T17:40:00Z",
    },
  ];

  const data = { customers }
  const loading = false;
  const error = null;

  return (
    <div className="container mx-auto">
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                  Nombre del cliente
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Apellido
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Celular
                </th>
              </tr>
            </thead>
            <tbody>
              {data && data?.customers!.length > 0 && data?.customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {customer.name}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {customer.lastName}
                    </p>
                  </td>

                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                      {customer.phone}
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

export default ListaClientes;
