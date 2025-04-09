"use client"

import { useDriversQuery } from "@/libs/requests/react.generated";


const ListaConductores = () => {
  // const {data, loading, error} = useDriversQuery()
  const drivers = [
    {
      id: "1",
      name: "Juan",
      lastName: "Pérez",
      phone: "+5491123456789",
      image: "/images/user/user-01.png",
      createdAt: "2025-01-10T09:00:00Z",
      updatedAt: "2025-01-15T14:30:00Z",
    },
    {
      id: "2",
      name: "María",
      lastName: "Gómez",
      phone: "+5491134567890",
      image: "/images/user/user-02.png",
      createdAt: "2025-01-11T10:00:00Z",
      updatedAt: "2025-01-16T15:45:00Z",
    },
    {
      id: "3",
      name: "Carlos",
      lastName: "Rodríguez",
      phone: "+5491145678901",
      image: "/images/user/user-03.png",
      createdAt: "2025-01-12T11:15:00Z",
      updatedAt: "2025-01-17T16:00:00Z",
    },
    {
      id: "4",
      name: "Laura",
      lastName: "Fernández",
      phone: "+5491156789012",
      image: "/images/user/user-04.png",
      createdAt: "2025-01-13T12:30:00Z",
      updatedAt: "2025-01-18T17:10:00Z",
    },
    {
      id: "5",
      name: "Pedro",
      lastName: "Martínez",
      phone: "+5491167890123",
      image: "/images/user/user-05.png",
      createdAt: "2025-01-14T13:45:00Z",
      updatedAt: "2025-01-19T18:20:00Z",
    },
    {
      id: "6",
      name: "Lucía",
      lastName: "Sánchez",
      phone: "+5491178901234",
      image: "/images/user/user-06.png",
      createdAt: "2025-01-15T15:00:00Z",
      updatedAt: "2025-01-20T19:25:00Z",
    },
    {
      id: "7",
      name: "Andrés",
      lastName: "López",
      phone: "+5491189012345",
      image: "/images/user/user-07.png",
      createdAt: "2025-01-16T16:15:00Z",
      updatedAt: "2025-01-21T20:30:00Z",
    },
    {
      id: "8",
      name: "Sofía",
      lastName: "Díaz",
      phone: "+5491190123456",
      image: "/images/user/user-08.png",
      createdAt: "2025-01-17T17:30:00Z",
      updatedAt: "2025-01-22T21:45:00Z",
    },
  ];

  const data = { drivers };
  const loading = false;
  const error = null;

  return (
    <div className="container mx-auto">
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="py-4 font-medium text-black dark:text-white">
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Nombre
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Apellido
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Celular
                </th>
              </tr>
            </thead>
            <tbody>
              {data && data?.drivers!.length > 0 && data?.drivers.map((driver) => (
                <tr key={driver.id}>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <img src={driver.image} alt={driver.name} className="rounded-full w-14 h-14"/>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                    {driver.name}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {driver.lastName}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {driver.phone}
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