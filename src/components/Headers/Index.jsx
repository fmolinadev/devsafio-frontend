import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as SmoothLink } from 'react-scroll';
import logo from '../../assets/images/DEV-IMAGOTIPO-WHITE-HORIZONTAL.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logoColor from '../../assets/images/DEV IMAGOTIPO COLOR HORIZONTAL.png';
import { AuthContext } from '../../context/authContext';

export const Headers = () => {
  const [nav, setNav] = useState(false);
  const { userData, userLogout } = useContext(AuthContext);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleCloseSesion = () => {
    userLogout();
    handleNav();
  };

  return (
    <nav className="flex items-center h-20 text-white justify-between px-2 py-3 bg-[#1E239A]">
      <Link to={'/'}>
        <img className="w-40" src={logo} alt="Logo" />
      </Link>

      <ul className="hidden md:flex gap-3">
        {!userData && (
          <Link to="/login">
            <li className="p-4">Iniciar Sesión</li>
          </Link>
        )}
        {userData && userData.roleId === 1 ? (
          <Link to="/user">
            <li className="p-4">Ver perfil</li>
          </Link>
        ) : userData && userData.roleId === 2 ? (
          <Link to="/admin">
            <li className="p-4">Administra la Pagina</li>
          </Link>
        ) : null}
        {!userData && (
          <Link to="/register">
            <li
              type="button"
              className="p-4 bg-[#E2F2FE]] text-[#E2F2FE] border-2 border-sky-500] rounded-lg ..."
            >
              Registrate
            </li>
          </Link>
        )}
        {userData && (
          <button
            onClick={userLogout}
            type="button"
            className="p-4 bg-[#E2F2FE]] text-[#E2F2FE] border-2 border-sky-500] rounded-lg ..."
          >
            Cerrar Sesión
          </button>
        )}
        {window.location.pathname === '/' ? (
          <button className="p-4 bg-[#E2F2FE] text-[#1E239A]  rounded-lg ...">
            <SmoothLink
              activeClass="active"
              to="contact-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              Contrata Talento
            </SmoothLink>
          </button>
        ) : null}
      </ul>

      <div onClick={handleNav} className="md:hidden text-blue">
        {<AiOutlineMenu size={40} className="text-[#E2F2FE]" />}
      </div>

      <div
        className={`
            md:hidden flex flex-col ${
              nav
                ? 'fixed left-0 top-0 z-10  w-full border-r border-r-blue-900 bg-[#E2F2FE] ease-in-out duration-500'
                : 'ease-in-out duration-500 fixed left-[-100%]'
            }`}
      >
        <div className="flex justify-between items-center">
          <Link to={'/'} className="justify-between px-2 py-3">
            <img className="w-40" src={logoColor} alt="LogoColor" />
          </Link>

          {
            <AiOutlineClose
              onClick={handleNav}
              size={40}
              className="text-[#1E239A] md:hidden"
            />
          }
        </div>

        <ul className="pt-12 uppercase text-blue-500 p-4 justify-center ...">
          <Link to="/">
            <li className="p-4 border-b border-blue-600" onClick={handleNav}>
              Ir al inicio
            </li>
          </Link>

          {!userData && (
            <Link to="/login">
              <li className="p-4 border-b border-blue-600" onClick={handleNav}>
                Iniciar Sesión
              </li>
            </Link>
          )}
          {userData && userData.roleId === 1 ? (
            <Link to="/user">
              <li className="p-4 border-b border-blue-600" onClick={handleNav}>
                Ver perfil
              </li>
            </Link>
          ) : userData && userData.roleId === 2 ? (
            <Link to="/admin">
              <li className="p-4 border-b border-blue-600" onClick={handleNav}>
                Administra la Pagina
              </li>
            </Link>
          ) : null}
          {!userData && (
            <Link to="/register">
              <li className="p-4 border-b border-blue-600" onClick={handleNav}>
                Registro
              </li>
            </Link>
          )}
          {userData && (
            <Link to="/">
              <li className="p-4 border-b border-blue-600" onClick={handleNav}>
                <button onClick={handleCloseSesion} type="button">
                  CERRAR SESIÓN
                </button>
              </li>
            </Link>
          )}
          {window.location.pathname === '/' ? (
            <li className="p-4 border-b border-blue-600">
              <SmoothLink
                activeClass="active"
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contrata Talento
              </SmoothLink>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};
