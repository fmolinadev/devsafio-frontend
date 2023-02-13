import AllCards from './FeatureCards/AllCards';
const FeatureSection = () => {
  return (
    <section className="bg-fill-light w-full min-h-screen m-auto items-center">
      <div className="container mx-auto">
        <header className="m-auto text-center py-6">
          <h2 className="font-sans text-2xl pt-4 font-semibold text-dark-purple">
            Sin Juniors no hay Seniors
          </h2>
          <p className="py-4 px-4 leading-relaxed font-sans text-xl font-medium mx-auto md:w-9/12">
            En este programa unimos la{' '}
            <span className="text-light-purple font-semibold">
              rapidez, eficiencia y visión de un desarrollador junior
            </span>{' '}
            junto con la{' '}
            <span className="text-light-purple font-semibold">
              experiencia y liderazgo de un senior TI,
            </span>{' '}
            quien acompañará al talento junior contratado para potenciar tu área
            digital, acá te explicamos cómo:
          </p>
        </header>
        <div className="m-auto">
          <div>
            <AllCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
