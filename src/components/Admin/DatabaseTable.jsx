import { UpdateButton, DeleteButton } from './Buttons/Buttons';
import { useEffect, useState } from 'react';
import apiClient from '../../services/api.service';

const DatabaseTable = () => {
  const [database, setDatabase] = useState(null);
  const getAllDatabase = async () => {
    setDatabase(await apiClient('admin/get-database'));
  };
  useEffect(() => {
    getAllDatabase();
  }, []);

  return (
    <div className="container mx-auto p-12 md:max-w-3xl xl:max-w-screen-lg 2xl:max-w-screen-2xl">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-4 md:mb-2 lg:mb-4 col-start-1 col-end-6">
        Bases de datos y Frameworks
        </h1>
        <div className="col-end-8 sm:col-end-6 lg:col-end-6 xl:col-end-7 col-span-1">
          <button className="btn bg-[#89CFD9] text-[#232323] border-white inline-flex items-center font-light  sm:btn-md btn-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="hidden sm:block">Agregar</span>
          </button>
        </div>
      </div>
      <table className="flex flex-col w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr className="flex flex-row">
            <th scope="col" className="px-6 py-3 ">
              ID
            </th>
            <th className="px-6 py-3 flex-auto">Nombre</th>
            <th className="flex items-center mr-5">Editar</th>
            <th className="flex items-center mr-5">Eliminar</th>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll" style={{ maxHeight: '80vh' }}>
          {database !== null
            ? database.data.map((e) => (
                <tr
                  className="flex items-center border-b bg-gray-800 border-gray-700"
                  key={e.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                  >
                    {e.id}
                  </th>
                  <td className="grow sm:px-6 sm:py-4 text-white">{e.name}</td>
                  <td>
                    <UpdateButton></UpdateButton>
                  </td>
                  <td>
                    <DeleteButton></DeleteButton>
                  </td>
                </tr>
              ))
            : false}
        </tbody>
      </table>
    </div>
  );
};

export default DatabaseTable;
