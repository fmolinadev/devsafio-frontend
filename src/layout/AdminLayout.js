import { FiEdit2 } from 'react-icons/fi';
import { SlUser } from 'react-icons/sl';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import '../assets/componentsCSS/button.css';
import { useAuth } from '../context/authContext';


const AdminLayout = () => {
  const { userData } = useAuth();

  return (
    <div className="grid container h-40 mx-auto m-5 w-80 mr-10 md:w-screen md:h-50 md:mt-3 lg:my-10 ml-3 lg:mx-20 lg:w-screen lg:h-80 lg:m-12">
      
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-4 md:mb-2 lg:mb-4 ">
        ¡Bienvenido!
      </h1>
        <hr className=" border-black" />
      <div className="grid grid-cols-2 gap-2 justify-between sm:grid-cols-3 lg:justify-between mb-2 mt-2 lg:mb-7 lg:gap-6 lg:mt-10">
        <div className="col-start-1">
          <SlUser className="w-11 h-11 mr-7" />
        </div>
        <div className="col-start-1 sm:col-start-2">
          <h1 className="font-bold text-xl">
            {userData.firstName} {userData.lastName}
          </h1>
          <p className="text-lg">País</p>
        </div>
        <div className="flex justify-end">
          <FiEdit2/>
        </div>
      </div>
      <div className="flex justify-start sm:justify-around md:justify-around gap-8 mb-2 mt-4 lg:mb-7">
        <div className="flex gap-5">
          <AiOutlineMail className=" text-xl" />
          <p className="hidden md:block">{userData.email}</p>
        </div>
        <div className="flex gap-5">
          <AiOutlinePhone className=" text-xl" />
          <p className="hidden md:block">Número telefonico</p>
        </div>
        <a
          role="button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com"
        >
          <BsLinkedin className=" rounded-3xl w-6 h-6" />
        </a>
        <a
          role="button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/"
        >
          <BsGithub className=" w-6 h-6" />
        </a>
      </div>
      </div>
  );
};

export default AdminLayout;
