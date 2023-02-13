import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import { validateForgotPassword } from '../../../validation/validateFormLogin';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext';
import { InputField } from '../../Forms';

const ForgotPassword = () => {
  const { forgotPassword } = useContext(AuthContext);

  return (
    <section className="flex flex-col items-center bg-white md:w-3/5 my-11 rounded-xl border-8 border-zinc-800 max-w-screen-xl ">
      <Formik
        initialValues={{
          email: ''
        }}
        validationSchema={validateForgotPassword}
        onSubmit={async (values) => {
          await forgotPassword(values);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="form-control md:justify-center ">
            <h1 className="py-1.5 md:my-4 text-4xl  md:text-5xl text-dark-purple font-bold text-center font-sans  ">
              Restablecer contraseña
            </h1>
            <div>
              <p className="py-4 px-4 text-center md:w-10/12 text-dark-text leading-relaxed font-sans text-xl font-light md:w-75 md:mx-auto">
                Coloca el email con el que te has registrado previamente en
                Devsafío. Te enviaremos un correo electronico a este email con
                los pasos para poder recuperar tu contraseña.
              </p>
            </div>
            <div className="container mx-auto mt-5 text-center md:max-w-screen-sm">
              <div className="md:contents md:items-center container mt-5 text-center mx-auto justify-center">
                <div className="mx-auto justify-center flex-col w-8/12">
                  <InputField
                    label={'Ingresa tu correo:'}
                    id="email"
                    name="email"
                    placeholder="tuemailregistrado@mail.com"
                    type="email"
                    errors={errors}
                    touched={touched}
                  />
                </div>
              </div>
              <div className="flex flex-col py-6 items-center md:justify-center   ">
                <button
                  type="submit"
                  className="rounded-lg border hover:border text-lg p-2 w-2/3 font-regular hover:bg-mid-blue bg-dark-purple  text-white hover:text-white font-sans"
                >
                  Restablecer contraseña
                </button>
                {isSubmitting ? (
                  <div>
                    <p>Enviando mail...</p>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col md:flex-row max-w-xs md:max-w-lg mx-auto justify-center items-center">
                <Link to={'/register'}>
                  <span className=" flex py-3.5 text-sm text-center font-medium  hover:text-mid-blue text-dark-purple font-sans">
                    Crear cuenta
                  </span>
                </Link>
                <span className="px-3 flex"></span>
                <Link to={'/login'}>
                  <span className=" flex py-3.5 text-sm text-center font-medium  hover:text-mid-blue text-dark-purple font-sans">
                    Iniciar Sesión
                  </span>
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ForgotPassword;
