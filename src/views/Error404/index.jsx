import React from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/componentsCSS/button.css';
import error404 from '../../assets/design/error404.jpg';

const Error404 = () => {
  const navigate = useNavigate();

  const goLanding = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <section className="min-h-screen align-middle justify-center">
      <div className="flex-col  align-middle mx-auto">
        <img
          className="mx-auto w-full sm:object-contain md:w-1/2 lg:w-1/3"
          src={error404}
          alt="error img"
        />
        <div className="text-center mx-3 sm:m-10">
          <h1 className=" mt-8 mb-5 text-4xl md:text-5xl font-bold">Oops</h1>
          <p className="bg-[error404] mb-5 text-base  md:text-lg lg:text-xl">
            <strong>Parece que perdiste la ruta</strong>, presiona el siguiente
            botón para encontrar el camino a tu primer empleo como Developer.
          </p>
          <button onClick={goLanding} className="btn btn-blue ">
            Volver al inicio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error404;
