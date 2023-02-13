import { useState } from 'react';
import MoonImage from '../../assets/design/moon_color.png';
import OvalBlue from '../../assets/design/oval.png';
import Account from './pure/Account';
import LoginForm from './pure/LoginForm';

const Login = () => {
  const [userEmail, setUserEmail] = useState(false);
  return (
    <div className="flex flex-col items-center md:bg-white md:w-3/5 md:my-11 md:rounded-xl md:border-8 md:border-zinc-800 max-w-screen-xl ">
      <h1 className=" py-1.5 md:my-4 text-4xl text-white md:text-5xl md:text-dark-purple font-bold text-center font-sans  ">
        Únete a Devsafío
      </h1>
      <div className="container ">
        <img
          src={OvalBlue}
          alt="oval"
          className="object-left-top -mx-10 ... opacity-50"
        />
      </div>
      <div>
        <p className="py-4 px-4 text-center  text-white md:text-dark-text leading-relaxed font-sans text-xl font-light md:w-4/5 md:mx-auto">
          Crea tu cuenta profesional en Devsafío para que seas parte de
          distintas ofertas laborales que tenemos junto a importantes empresas
          en latinoamérica.
        </p>
      </div>
      <div className="container mx-auto mt-5 text-center">
        {userEmail !== false ? (
          <LoginForm />
        ) : (
          <Account change={setUserEmail} />
        )}
        <img
          src={MoonImage}
          alt="design moon"
          className="object-left-bottom -mx-8 relative"
        />
      </div>
    </div>
  );
};
export default Login;
