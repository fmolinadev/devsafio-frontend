/* eslint-disable array-callback-return */
import * as FormField from '../../Forms';
import { Form, Formik } from 'formik';
import { GrAddCircle } from 'react-icons/gr';
import '../../../assets/componentsCSS/button.css';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { validateDataSkillsLanguage } from '../../../validation/validateModals';
import apiClient from '../../../services/api.service';
import { editLanguage } from '../../../hooks/editHability';

export const LanguageModal = (props) => {
  const [lenguageAPI, setLenguageAPI] = useState(null);
  const [userLanguaje, setUserLanguaje] = useState(props.info);
  const [showComponent, setShowComponent] = useState(false);

  const getAllLanguajes = async () => {
    const { data } = await apiClient('/dev-languages');
    setLenguageAPI(data);
  };

  useEffect(() => {
    getAllLanguajes();
  }, []);

  let languajesFilter = lenguageAPI?.filter((el) => {
    let found = false,
      x = 0;
    while (x < userLanguaje.length && !found) {
      if (el.name === userLanguaje[x].name) found = true;
      x++;
    }
    if (!found) return el;
    // return userLanguaje.find((l) => l.name !== el.name);
  });

  const handlerChangeEvent = (e, values, setFieldValue) => {
    let add = languajesFilter.filter((el) => el.name === e.target.value);
    setUserLanguaje([...values, ...add]);
    setFieldValue('lenguage', [...values, ...add]);
    setShowComponent(false);
  };
  return (
    <>
      <Formik
        initialValues={{ lenguage: userLanguaje }}
        validationSchema={validateDataSkillsLanguage}
        onSubmit={async (values) => {
          try {
            await editLanguage(values.lenguage);
            return Swal.fire({
              title: '¡Datos modificados!',
              confirmButtonText: 'Cerrar',
              confirmButtonColor: '#2738F5'
            })
              .then(() => props.updateLanguagues())
              .then(() => props.setShowModal(false));
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <div className="col-span-7 md:col-span-4 lg:col-span-6 md:mx-auto w-full">
              <FormField.InputSelectArray
                data={values.lenguage}
                name="lenguage"
                id="lenguage"
                touched={touched}
                errors={errors}
                values={values}
                edit="true"
                updatedata={setUserLanguaje}
              />
            </div>
            <div className="flex w-auto justify-end">
              <button
                className="flex"
                type="button"
                onClick={() => setShowComponent(true)}
              >
                <GrAddCircle />
              </button>
            </div>
            {showComponent !== false ? (
              <>
                <div className="col-span-6 sm:col-span-6">
                  <FormField.InputSelect
                    label={'Indica la tecnología:'}
                    touched={touched}
                    errors={errors}
                    name="lenguageSelect"
                    id="lenguageSelect"
                    data={languajesFilter.map((e) => e.name)}
                    onChange={(e) => {
                      handlerChangeEvent(e, values.lenguage, setFieldValue);
                    }}
                  />
                </div>
              </>
            ) : null}

            <div className="container py-8 justify-center">
              <button className="btn btn-blue" type="submit">
                Guardar Cambios
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
