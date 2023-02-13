import React from 'react';
import CardHomeUser from '../../components/User/CardHomeUser';

export default function UserHome() {
  return (
    <div className="container mx-auto flex flex-col md:mx-20 my-10 ml-3 mr-8 lg:my-16 lg:mb-20 ">
    <h1 className="font-bold mb-4 lg:mb-8 text-xl lg:text-3xl">
      ¡Bienvenido!
    </h1>
    <p className="font-medium mb-5 lg:mb-9 text-lg md:text-lg">
      Mapa para recibir ofertas automáticas
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <CardHomeUser />
    </div>
  </div>
  );
};
