import { ExportCompanies } from './Buttons/Buttons';
import { useEffect, useState } from 'react';
import apiClient from '../../services/api.service';

const AdminCompanies = () => {
  const [companies, setCompanies] = useState(null);
  const getAllCompanies = async () => {
    setCompanies(await apiClient('admin/get-companies'));
  };
  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <div className="container mx-auto p-12 md:max-w-3xl xl:max-w-screen-lg 2xl:max-w-screen-2xl">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-4 md:mb-2 lg:mb-4">
          Empresas
        </h1>
        <div>
          <ExportCompanies></ExportCompanies>
        </div>
      </div>
      <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 ">
                    Empresa
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Apellido
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Teléfono
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Área de Busqueda
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Comentario
                  </th>
                </tr>
              </thead>
              {}
              <tbody>
                {companies !== null
                  ? companies.data.map((e) => (
                      <tr
                        className=" bg-gray-800 border-gray-700"
                        key={e.id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium whitespace-nowrap text-white"
                        >
                          {e.companyName}
                        </th>
                        <td className="px-6 py-4 text-white">{e.name}</td>
                        <td className="px-6 py-4 text-white">{e.lastName}</td>
                        <td className="px-6 py-4 text-white">{e.email}</td>
                        <td className="px-6 py-4 text-white">{e.phone}</td>
                        <td className="px-6 py-4 text-white">{e.search}</td>
                        <td className="px-6 py-4 text-white">{e.doubts}</td>
                      </tr>
                    ))
                  : /* (
                  <div>
                    <progress className="animate-pulse progress w-56">
                      Cargando datos
                    </progress>
                  </div>
                ) */ false}
              </tbody>
            </table>
          </div>
    </div>
  );
};

export default AdminCompanies;
