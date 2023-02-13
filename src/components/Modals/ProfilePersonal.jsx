import Modal from './Index';
import * as FormField from '../Forms';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';
import { validatePersonalInformation } from '../../validation/validateModals';

export const ProfilePersonal = ({
  updateProfile,
  updateUser,
  data,
  userData
}) => {
  return (
    <Modal title="Información Personal">
      {props => (
        <Formik
          initialValues={{
            phoneNumber: data.phoneNumber || '',
            city: data.city || '',
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            linkedinUrl: data.linkedinUrl || '',
            githubUrl: data.githubUrl || ''
          }}
          validationSchema={validatePersonalInformation}
          onSubmit={async values => {
            try {
              await apiClient.put('/users/personal-data', values);
              return Swal.fire({
                title: '¡Datos modificados!',
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#2738F5'
              }).then(() => {
                props.setShowModal(false);
                updateProfile(values);
                updateUser({
                  firstName: values.firstName,
                  lastName: values.lastName
                });
              });
            } catch (error) {
              console.error(error);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="grid grid-cols-2 grid-rows-7 gap-x-4 gap-y-1">
                <div className="col-span-2 row-span-1 text-xs md:text-md">
                  <FormField.InputField
                    label="Nombre"
                    touched={touched}
                    errors={errors}
                    type="text"
                    name="firstName"
                    id="firstName"
                  />
                </div>
                <div className="col-span-2 row-span-1 text-xs md:text-md">
                  <FormField.InputField
                    label="Apellido"
                    touched={touched}
                    errors={errors}
                    type="text"
                    name="lastName"
                    id="lastName"
                  />
                </div>
                <div className="col-span-2 row-span-1 text-xs ms:text-md">
                  <FormField.InputField
                    label="Email"
                    disabled
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="row-span-4 col-start-1 col-end-2 text-xs ms:text-md">
                  <FormField.InputField
                    label="Teléfono"
                    touched={touched}
                    errors={errors}
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                  />
                </div>
                <div className="row-span-3 col-start-2 col-end-3 text-xs ms:text-md mb-2">
                  <FormField.InputField
                    label="Ciudad"
                    touched={touched}
                    errors={errors}
                    type="text"
                    name="city"
                    id="city"
                  />
                </div>
                <div className="row-span-4 col-start-1 col-end-2 text-xs ms:text-md">
                  <FormField.InputField
                    label={'URL de LinkedIn'}
                    type="text"
                    name="linkedinUrl"
                    id="linkedinUrl"
                    touched={touched}
                    errors={errors}
                  />
                </div>
                <div className="row-span-4 col-start-2 col-end-3  text-xs ms:text-md">
                  <FormField.InputField
                    label={'URL de GitHub'}
                    type="text"
                    name="githubUrl"
                    id="githubUrl"
                    touched={touched}
                    errors={errors}
                  />
                </div>
              </div>
              <div className="container py-8 justify-center">
                <button className="btn btn-blue" type="submit">
                  Guardar Cambios
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </Modal>
  );
};
