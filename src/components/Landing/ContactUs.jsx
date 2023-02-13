import { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateSchemaContactCompany } from '../../../src/validation/validateFormContactCompany';
import { postContactCompany } from '../../hooks/postContactCompany';
import ImgIntersec from '../../assets/design/Intersect.png';
import apiClient from '../../../src/services/api.service';
import Swal from 'sweetalert2';

const initialCredentials = {
  name: 'Sandra',
  lastName: 'Perez',
  email: 'sandra.per@devmail.com',
  phone: '12347545678',
  companyName: 'LatamDev',
  doubts: '',
  workAreaId: []
};

const CustomInputComponent = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <div>
    <textarea
      type="text"
      {...field}
      {...props}
      className="resize-none rounded-lg h-24 text-sm text-gray-900 bg-white border-0 w-full"
    />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
);

const ContactUs = () => {
  const [workAreaContact, setworkAreaContact] = useState(null);
  const getAllWorkArea = async () => {
    setworkAreaContact(await apiClient('/work-area-company'));
  };

  useEffect(() => {
    getAllWorkArea();
  }, []);
  return (
    <section
      className="animate__animated animate__fadeIn flex justify-center items-center min-h-screen pb-6 md:pb-8
  md:h-5/6 md:py-11"
      id="contact-section"
    >
      <div className="container flex mx-auto flex-col md:flex-row">
        <div className="text-center md:w-1/2 pb-8">
          <h2 className="py-8 px-4 md:py-1.5 font-sans text-5xl md:text-3xl font-semibold text-dark-purple">
            DEVsafiamos el sistema
          </h2>
          <h5 className="py-4 px-4 leading-relaxed font-sans text-xl font-medium md:w-4/5 md:mx-auto">
            ¿Escasez de talento Senior? No te preocupes, en Devsafio encontrarás
            el talento que necesitas en nuestro programa Mentorías.
          </h5>

          <h5 className="py-4 px-4 leading-relaxed font-sans text-xl font-medium md:w-4/5 md:mx-auto">
            Completa el formulario y te contactaremos en breve para acompañarte
            en la búsqueda de Talento TI que necesitas.
          </h5>

          <img
            className="container mx-auto py-3  sm:w-full md:w-auto flex-shrink-0 "
            src={ImgIntersec}
            alt="img"
          />

          <h5 className="py-4 px-4 leading-relaxed font-sans text-xl font-medium md:w-4/5 md:mx-auto">
            <b>
              ¡Agenda una asesoría con nosotros si quieres saber más sobre cómo
              acelerar y potenciar tu próximo Talento TI!
            </b>
          </h5>

          <button className="btn btn-active mx-5 sm:px-8">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0SQzKIaDQw2qnLJMrS8hm0EIM31uLGZUHFffAgzqX-0-TBwwD6RTMXxKU5pRMJxnfOftAHJ2Ao"
              target="_blank"
              rel="noopener noreferrer"
            >
              AGENDAR
            </a>
          </button>
        </div>
        <div className="card bg-[#140B34] w-auto h-auto md:w-1/2 mx-auto items-center pb-2">
          <Formik
            initialValues={initialCredentials}
            validationSchema={validateSchemaContactCompany}
            onSubmit={async (e) => {
              const { workAreaId, ...payload } = e;
              function toNumber(value) {
                return Number(value);
              }
              let nums = e.workAreaId.map(toNumber);
              payload.workAreaId = nums;
              try {
                await postContactCompany(payload);
                Swal.fire({
                  title: `${e.companyName}`,
                  text: `¡Formulario enviado!, nos pondremos en contacto contigo`,
                  icon: `success`,
                  showConfirmButton: false,
                  timer: 4000,
                  timerProgressBar: true
                });
              } catch (error) {
                console.error(error);
                alert('Error:', error);
              }
            }}
          >
            {({ errors, touched, handleSubmit, isSubmitting }) => (
              <Form
                className="py-5 px-8 flex flex-wrap"
                onSubmit={handleSubmit}
              >
                <h5 className="text-white py-4 px-4 leading-relaxed font-sans text-xl font-medium md:w-6/6 md:mx-auto">
                  <b>
                    Si eres empresa y buscas talento TI, déjanos tu información
                    en este formulario. En breve te contactaremos:
                  </b>
                </h5>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                  <div className="flex-initial h-auto w-auto m-5 col-span-6 sm:col-span-1">
                    <label className="text-white font-sans ">Nombre *</label>
                    <br />
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Ingrese Nombre"
                    />
                    {errors.name && touched.name && (
                      <ErrorMessage
                        component="div"
                        name="name"
                        className="text-red-500"
                      />
                    )}
                  </div>
                  <div className="flex-initial h-auto w-auto m-5 col-span-6 sm:col-span-1">
                    <label className="text-white font-sans sm:col-span-3">
                      Apellido *
                    </label>
                    <br />
                    <Field
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Ingrese Nombre"
                    />
                    {errors.lastName && touched.lastName && (
                      <ErrorMessage
                        component="div"
                        name="lastName"
                        className="text-red-500"
                      />
                    )}
                  </div>
                  <div className="flex-initial h-auto w-auto m-5 col-span-6 sm:col-span-1">
                    <label className="text-white font-sans ">
                      Email corporativo *
                    </label>
                    <br />
                    <Field
                      id="email"
                      name="email"
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Ingrese Nombre"
                    />
                    {errors.email && touched.email && (
                      <ErrorMessage
                        component="div"
                        name="email"
                        className="text-red-500"
                      />
                    )}
                  </div>
                  <div className="flex-initial w-auto m-5 col-span-6 sm:col-span-1">
                    <label className="text-white font-sans ">
                      Número de teléfono *
                    </label>
                    <br />
                    <Field
                      id="phone"
                      name="phone"
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Ingrese Nombre"
                    />
                    {errors.phone && touched.phone && (
                      <ErrorMessage
                        component="div"
                        name="phone"
                        className="text-red-500"
                      />
                    )}
                  </div>
                </div>

                <div className="grow h-auto w-auto m-5 grid grid-cols-1 ">
                  <label className="text-white font-sans ">
                    ¿A qué empresa perteneces? *
                  </label>
                  <Field
                    id="companyName"
                    name="companyName"
                    type="text"
                    className="input input-bordered"
                    placeholder="Ingrese aquí"
                  />
                  {errors.companyName && touched.companyName && (
                    <ErrorMessage
                      component="div"
                      name="companyName"
                      className="text-red-500"
                    />
                  )}
                </div>
                <p className="text-white font-sans flex px-5">
                  Cargo/área de preferencia que buscas contratar *
                </p>
                {/* workArea section */}
                <div className="hover:auto-cols-min">
                  {workAreaContact !== null ? (
                    workAreaContact.data.map((e, index) => (
                      <div
                        className="form-control grow h-auto w-auto mx-5 grid grid-cols-1"
                        key={index}
                      >
                        <label className="label cursor-pointer justify-start gap-4">
                          <Field
                            type="checkbox"
                            className="checkbox"
                            name="workAreaId"
                            value={`${e.id}`}
                          />
                          <span className="label-text text-white">
                            {e.name}
                          </span>
                        </label>
                      </div>
                    ))
                  ) : (
                    <progress className="animate-pulse progress w-56">
                      Cargando datos
                    </progress>
                  )}
                  <label className="text-white font-sans px-5 mt-3">
                    ¿Dudas? Déjalas acá!
                  </label>
                  {errors.workAreaId && touched.workAreaId && (
                    <ErrorMessage
                      component="div"
                      name="workAreaId"
                      className="text-red-500 px-5"
                    />
                  )}
                </div>

                <div className="w-full mb-5 px-5  mt-3">
                  <Field name="doubts" component={CustomInputComponent} />
                </div>
                <button
                  type="submit"
                  className="btn btn-active mx-5 cursor-pointer ..."
                >
                  Enviar
                </button>
                {isSubmitting ? (
                  <div className="my-4">
                    <h2>Enviando Formulario</h2>
                    <progress className="animate-pulse progress w-56"></progress>
                  </div>
                ) : null}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
