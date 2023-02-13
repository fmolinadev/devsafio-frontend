import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <section className="flex container h-screen items-center justify-center">
      <div className="flex flex-col text-center py-10 h-5/6 px-6 font-sans align-middle">
        <h1 className=" text-red-600 text-xl font-bold my-2">
          Ups! Ocurrió un error en la navegación. <span>🥺</span>
        </h1>
        <p>
          <Link
            to="/login"
            className="link text-blue-600 focus:border-blue-400"
          >
            Inicia sesión
          </Link>{' '}
          o{' '}
          <Link
            to="/register"
            className="link text-blue-600 focus:border-blue-400"
          >
            Registrate
          </Link>
          &nbsp; para que puedas continuar navegando en nuestro sitio.
        </p>
      </div>
    </section>
  );
}

export default Error;
