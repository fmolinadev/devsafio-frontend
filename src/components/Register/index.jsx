import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateSchemaRegister } from '../../validation/validateFormRegister';
import MoonImage from '../../assets/design/moon_color.png';
import OvalBlue from '../../assets/design/oval.png';
import { postRegisterAxios } from '../../hooks/postAxios';
import Swal from 'sweetalert2';

const initialCredentials = {
  firstName: 'Devsafio',
  lastName: 'Latam',
  email: 'ctd5.devsafio@gmail.com',
  password: 'Asdf12345',
  passwordConfirm: 'Asdf12345'
};

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center md:bg-white md:w-3/5 md:my-11 md:rounded-xl md:border-8 md:border-zinc-800 max-w-screen-xl ">
      <h1 className=" py-1.5 md:my-4 text-4xl text-white md:text-5xl md:text-dark-purple font-bold text-center font-sans  ">
        Regístrate
      </h1>
      <div className="container ">
        <img
          src={OvalBlue}
          alt="oval"
          className="object-left-top -mx-10 ... opacity-50"
        />
      </div>
      <section className="md:min-w-full md:justify-center md:flex">
        <Formik
          initialValues={initialCredentials}
          validationSchema={validateSchemaRegister}
          onSubmit={async (values) => {
            try {
              await postRegisterAxios(values);
              return Swal.fire(
                '¡Registro completado!',
                `${values.firstName}, inicia sesión para continuar.`,
                'success'
              ).then(navigate('/login'));
            } catch (error) {
              console.error(error);
            }
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="form-control max-w-xs md:justify-center ">
              <div className="md:contents md:items-center">
                <div className="flex flex-col md:flex-wrap">
                  <div className="flex flex-col md:flex-wrap">
                    <label
                      htmlFor="firstName"
                      className="text-white label-text md:text-dark-text md:text-lg pt-3 font-sans md:pr-4"
                    >
                      Nombre:
                    </label>
                    <Field
                      id="firstName"
                      name="firstName"
                      placeholder="Ingresa tu nombre"
                      type="text"
                      className="input input-bordered input-secondary w-60 max-w-xs md:w-80 md:bg-fill-light md:border-inherit"
                    />
                    {errors.firstName && touched.firstName && (
                      <ErrorMessage
                        component="div"
                        name="firstName"
                        className="text-red-500"
                      />
                    )}
                  </div>
                  <label
                    htmlFor="lastName"
                    className="text-white label-text md:text-dark-text md:text-lg pt-3 font-sans md:pr-4"
                  >
                    Apellido:
                  </label>
                  <Field
                    id="lastName"
                    name="lastName"
                    placeholder="Ingresa tu apellido"
                    type="text"
                    className="input input-bordered input-secondary w-60 max-w-xs md:w-80 md:bg-fill-light md:border-inherit"
                  />
                  {errors.lastName && touched.lastName && (
                    <ErrorMessage
                      component="div"
                      name="lastName"
                      className=" text-red-500 "
                    />
                  )}
                </div>
                <div className="flex flex-col  md:w-fit md:flex-wrap">
                  <div className="flex flex-col md:w-fit">
                    <label
                      // htmlFor="email"
                      className="text-white label-text md:text-dark-text md:text-lg pt-3 font-sans md:w-80"
                    >
                      Ingresa tu correo:
                    </label>
                    <Field
                      id="email"
                      name="email"
                      placeholder="tumejoremail@mail.com"
                      type="email"
                      className="input input-bordered input-secondary w-60 max-w-xs md:w-80 md:bg-fill-light md:border-inherit"
                    />
                    {errors.email && touched.email && (
                      <ErrorMessage
                        component="div"
                        name="email"
                        className="text-red-500"
                      />
                    )}
                  </div>
                  <div className="flex flex-col md:w-fit">
                    <label
                      // htmlFor="password"
                      className="text-white label-text md:text-dark-text md:text-lg pt-3 font-sans md:w-80"
                    >
                      Crea tu contraseña:
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      placeholder="*****"
                      className="input input-bordered input-secondary w-60 max-w-xs md:w-80 md:bg-fill-light md:border-inherit"
                    />
                    {errors.password && touched.password && (
                      <ErrorMessage
                        component="div"
                        name="password"
                        className="text-red-500"
                      />
                    )}
                  </div>
                  <div className="flex flex-col md:w-fit">
                    <label
                      htmlFor="passwordConfirm"
                      className="text-white label-text md:text-dark-text md:text-lg pt-3 font-sans md:w-80"
                    >
                      Reingresa contraseña:
                    </label>
                    <Field
                      id="passwordConfirm"
                      name="passwordConfirm"
                      type="password"
                      placeholder="Repite la contraseña."
                      className="input input-bordered input-secondary w-60 max-w-xs md:w-80 md:bg-fill-light md:border-inherit"
                    />
                    {errors.passwordConfirm && touched.passwordConfirm && (
                      <ErrorMessage
                        component="div"
                        name="passwordConfirm"
                        className="text-red-500"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-6 items-center md:justify-center   ">
                <button
                  type="submit"
                  className="rounded-lg border hover:border text-lg p-2 w-2/3 font-regular bg-white hover:bg-transparent hover:md:bg-mid-blue md:bg-dark-purple hover: text-dark-purple mb:text-white hover:text-white md:text-white font-sans"
                >
                  Crear cuenta
                </button>
                <Link to={'/login'}>
                  <span className=" flex py-3.5 text-sm text-white text-center font-medium  hover:md:text-mid-blue md:text-dark-purple font-sans">
                    Iniciar sesión
                  </span>
                </Link>

                {isSubmitting ? (
                  <div>
                    <div className="my-4">
                      <h2>Enviando registro</h2>
                      <progress className="animate-pulse progress w-56"></progress>
                    </div>
                  </div>
                ) : null}
              </div>
            </Form>
          )}
        </Formik>
      </section>
      <div className="container">
        <img
          src={MoonImage}
          alt="design moon"
          className="object-left-bottom -mx-8 relative"
        />
      </div>
    </div>
  );
};

export default Register;
