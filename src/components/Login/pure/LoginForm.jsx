import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateSchemaLogin } from '../../../validation/validateFormLogin';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext';

const LoginForm = () => {
  const { postLogin } = useContext(AuthContext);
  const initialCredentials = {
    email: '',
    password: ''
  };

  return (
    <section className="md:min-w-full w-full justify-center flex">
      <Formik
        initialValues={initialCredentials}
        validationSchema={validateSchemaLogin}
        onSubmit={async values => {
          await postLogin(values);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="form-control max-w-xs md:justify-center ">
            <div className="md:contents md:items-center">
              <div className="flex flex-col  md:w-fit md:flex-wrap">
                <div className="flex flex-col md:w-fit">
                  <label
                    htmlFor="email"
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
                    htmlFor="password"
                    className="text-white label-text md:text-dark-text md:text-lg pt-3 font-sans md:w-80"
                  >
                    Ingresá tu contraseña:
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
              </div>
            </div>
            <div className="flex flex-col py-6 items-center md:justify-center   ">
              <button
                type="submit"
                className="rounded-lg border hover:border text-lg p-2 w-2/3 font-regular bg-white hover:bg-transparent hover:md:bg-mid-blue md:bg-dark-purple hover: text-dark-purple mb:text-white hover:text-white md:text-white font-sans"
              >
                Iniciar Sesión
              </button>
              {isSubmitting ? (
                <div className="my-4">
                  <h2>Ingresando</h2>
                  <progress className="animate-pulse progress w-56"></progress>
                </div>
              ) : null}
            </div>
            <div className="flex flex-col max-w-xs items-center md:max-w-lg mx-auto">
              <Link
                to={'/login'}
                onClick={() => window.location.reaload()}
                className="my-1 py-1 text-sm text-white  font-medium  hover:md:text-mid-blue md:text-dark-purple font-sans"
              >
                Ingresa con redes sociales
              </Link>
              <Link
                to={'/register'}
                className="my-1 py-1 text-sm text-white font-medium  hover:md:text-mid-blue md:text-dark-purple font-sans"
              >
                Crear cuenta
              </Link>
              <Link
                to={'/forgot-password'}
                className="my-1 py-2 text-sm text-white font-medium  hover:md:text-mid-blue md:text-dark-purple font-sans"
              >
                Olvidé la contraseña
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default LoginForm;
