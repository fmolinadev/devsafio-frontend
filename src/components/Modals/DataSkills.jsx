import Modal from '../Modals/Index';
import '../../assets/componentsCSS/button.css';
import { LanguageModal } from './HabilitiesModal/Language';
import { DatabasesModal } from './HabilitiesModal/Frameworks';
import { ToolsModal } from './HabilitiesModal/Tools';
import { useEffect, useState } from 'react';
import apiClient from '../../services/api.service';

const DataSkills = ({
  updateLanguagues,
  updateDatabases,
  updateTools
}) => {
  const [devLanguage, setdevLanguage] = useState([]);
  const [database, setDatabase] = useState([]);
  const [tools, setTools] = useState([]);

  const getUserInfo = async () => {
    const { data } = await apiClient('/users/skills');
    setdevLanguage(data['devlanguages']);
    setDatabase(data['databases']);
    setTools(data['tools']);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Modal title="Edita tus skills">
      {(props) => (
        <div>
          <ul
            className="w-full nav nav-tabs nav-justified flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
            id="tabs-tabJustify"
            role="tablist"
          >
            <li
              className="nav-item flex-grow text-center w-full"
              role="presentation"
            >
              <a
                href="#tabs-homeJustify"
                className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
                id="tabs-home-tabJustify"
                data-bs-toggle="pill"
                data-bs-target="#tabs-homeJustify"
                role="tab"
                aria-controls="tabs-homeJustify"
                aria-selected="true"
              >
                Lenguajes
              </a>
            </li>
            <li
              className="nav-item flex-grow text-center md:w-72"
              role="presentation"
            >
              <a
                href="#tabs-profileJustify"
                className=" nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                id="tabs-profile-tabJustify"
                data-bs-toggle="pill"
                data-bs-target="#tabs-profileJustify"
                role="tab"
                aria-controls="tabs-profileJustify"
                aria-selected="false"
              >
                Bases de Datos y Framework
              </a>
            </li>
            <li className="nav-item flex-grow text-center" role="presentation">
              <a
                href="#tabs-messagesJustify"
                className=" nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                id="tabs-messages-tabJustify"
                data-bs-toggle="pill"
                data-bs-target="#tabs-messagesJustify"
                role="tab"
                aria-controls="tabs-messagesJustify"
                aria-selected="false"
              >
                Herramientas
              </a>
            </li>
          </ul>
          <div className="tab-content" id="tabs-tabContentJustify">
            <div
              className="tab-pane fade show active w-full"
              id="tabs-homeJustify"
              role="tabpanel"
              aria-labelledby="tabs-home-tabJustify"
            >
              <LanguageModal
                info={devLanguage}
                updateLanguagues={updateLanguagues}
              />
            </div>
            <div
              className="tab-pane fade"
              id="tabs-profileJustify"
              role="tabpanel"
              aria-labelledby="tabs-profile-tabJustify"
            >
              <DatabasesModal
                info={database}
                updateDatabases={updateDatabases}
              />
            </div>
            <div
              className="tab-pane fade"
              id="tabs-messagesJustify"
              role="tabpanel"
              aria-labelledby="tabs-profile-tabJustify"
            >
              <ToolsModal info={tools} updateTools={updateTools} />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default DataSkills;
