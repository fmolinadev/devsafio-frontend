import * as ApplicationForm from './components';
import { validateSchemaAplicationForm } from '../../validation/validateFormAplication.js';
import { Form, Formik } from 'formik';
import { initialForm } from '../../data/FormInitialData';
import { useAuth } from '../../context/authContext';
import { Fragment } from 'react';
import { postApplicationForm } from '../../hooks/postApplicationForm';
import Error from '../../components/Error/Error';
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom';

const ApplicationFormPage = () => {
  const { userData } = useAuth();
  const navigate = useNavigate();
  return (
    <main className="container mx-auto my-12">
      {!userData ? (
        <Error />
      ) : userData.statusId === 1 ? (
        <Fragment>
          <ApplicationForm.OverviewCard />
          <Formik
            initialValues={initialForm}
            validationSchema={validateSchemaAplicationForm}
            onSubmit={async (values) => {
              try {
                await postApplicationForm(values);
                return Swal.fire(
                  '¡Excelente!',
                  `${userData.firstName}, continúa completando tu perfil.`,
                  'success'
                ).then(navigate('/user'));
              } catch (error) {
                console.error(error);
              }
            }}
          >
            {({ errors, touched, isSubmitting, values, setFieldValue }) => (
              <Form>
                <ApplicationForm.PersonalInformation
                  errors={errors}
                  touched={touched}
                />
                <ApplicationForm.EducationProfile
                  errors={errors}
                  touched={touched}
                />
                <ApplicationForm.JobProfile
                  errors={errors}
                  touched={touched}
                  values={values}
                  setFieldValue={setFieldValue}
                />
                <ApplicationForm.ExperienceAndWork
                  errors={errors}
                  touched={touched}
                />
                <ApplicationForm.JobType errors={errors} touched={touched} />
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="rounded-lg border hover:border text-lg p-2 w-2/3 md:w-64 font-regular bg-mid-blue hover:bg-transparent hover:md:bg-mid-blue md:bg-dark-purple hover:md:text-white hover:text-dark-purple text-white md:text-white font-sans"
                  >
                    Enviar Formulario
                  </button>
                </div>
                {isSubmitting ? (
                  <div className="my-4 text-center">
                    <h2>Enviando Formulario</h2>
                    <progress className="animate-pulse progress w-56"></progress>
                  </div>
                ) : null}
              </Form>
            )}
          </Formik>
        </Fragment>
      ) : (
        <Navigate to={'/user'} />
      )}
    </main>
  );
};

export default ApplicationFormPage;
