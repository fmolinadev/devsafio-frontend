import React from 'react';
import coverImage2 from '../../assets/design/cover_image.png';
import coverImage from '../../assets/design/cover_image_complete.png';
import { Link as SmoothLink } from 'react-scroll';
const LandingHero = () => {
  return (
    <section id="hero">
      <div className="bg-gradient-to-b from-mid-light-blue via-mid-blue to-dark-purple min-h-screen flex justify-center items-center h-screen p-[2rem]">
        <div className=" lg:flex">
          <div className="container mx-auto py-3 lg:hidden">
            <img src={coverImage} alt="MujerDev" />
          </div>
          <div>
            <div className="text-white lg:mr-20">
              <h1 className="px-0 sm:py-2 text-3xl sm:text-5xl ">
                <strong>¿Buscas talento TI?</strong>
              </h1>
              <h2 className="text-sm py-3 sm:text-3xl ">
                Contrata{' '}
                <span className="text-[#008FF7] font-semibold">Talento TI</span>{' '}
                rápido, inteligente y eficiente
              </h2>
              <h3 className="text-1xl py-2 lx:pr-56">
                Te encontramos profesionales en 5 días y los acompañamos por 3
                meses con tutores senior para potenciar y acelerar sus
                habilidades técnicas
              </h3>
              <br />
              <button
                type="submit"
                className="rounded-full  bg-white text-center text-mid-light-blue p-[1rem] uppercase"
              >
                <strong>
                  <SmoothLink
                    activeClass="active"
                    to="contact-section"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                  >
                    Quiero Contratar
                  </SmoothLink>
                </strong>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block -mx-8 ">
          <img src={coverImage2} alt="MujerDev" />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
