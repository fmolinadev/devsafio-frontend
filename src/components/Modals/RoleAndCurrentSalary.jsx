import Modal from './Index';
import * as FormField from '../Forms';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';
import { cargo } from '../../data/FormData';
import { validateStackAndSalary } from '../../validation/validateModals';

export const RoleAndCurrentSalary = ({ updateProfile, data }) => {
  return (
    <Modal title="Rol y salario">
      {props => (
        <Formik
          initialValues={{
            stack: data.stack || '',
            currentSalary: data.currentSalary || ''
          }}
          validationSchema={validateStackAndSalary}
          onSubmit={async values => {
            try {
              await apiClient.put('/users/stack-salary', {
                stack: values.stack.toString(),
                currentSalary: values.currentSalary.toString()
              });
              return Swal.fire({
                title: '¡Datos modificados!',
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#2738F5'
              }).then(() => {
                props.setShowModal(false);
                updateProfile(values);
              });
            } catch (error) {
              console.error(error);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="col-span-7 md:col-span-4 lg:col-span-4 md:mx-auto">
                <div className="col-span-6 md:col-span-3">
                  <FormField.InputCheckbox
                    label="¿Cuál o cuáles cargos te gustaria optar?"
                    touched={touched}
                    errors={errors}
                    name="stack"
                    data={cargo}
                    headText={
                      <label
                        htmlFor="stack"
                        className="block text-justify font-light text-base text-[#575253]"
                      >
                        <strong>Ten en cuenta:</strong> De acuerdo al cargo que
                        postules, te pediremos que seas capaz de demostrarlo de
                        manera practica durante el proceso de seleción.
                      </label>
                    }
                  />
                  <FormField.InputField
                    label="Salario actual (USD):"
                    touched={touched}
                    errors={errors}
                    name="currentSalary"
                    id="currentSalary"
                    className="w-50"
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
