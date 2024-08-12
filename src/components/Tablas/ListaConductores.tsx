"use client"

import { useDriversQuery } from "@/libs/requests/react.generated";


const ListaConductores = () => {
  const {data, loading, error} = useDriversQuery();

  return (
    <div className="container mx-auto">
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
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