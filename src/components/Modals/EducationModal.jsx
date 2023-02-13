import Modal from './Index';
import * as FormField from '../Forms';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';
import { month } from '../../data/FormData';
import { validateEducation } from '../../validation/validateModals';

const EducationModal = ({ updateEducation, id, data }) => {
  return (
    <Modal title="Educación">
      {props => (
        <Formik
          initialValues={{
            name: data.name || '',
            instituteName: data.instituteName || '',
            startMonth: data.startMonth || '',
            endMonth: data.endMonth || '',
            startYear: data.startYear || '',
            endYear: data.endYear || ''
          }}
          validationSchema={validateEducation}
          onSubmit={async values => {
            console.log(values);
            try {
              values['id'] = id;
              await apiClient.put('/users/education', values);
              return Swal.fire({
                title: '¡Datos modificados!',
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#2738F5'
              }).then(() => {
                props.setShowModal(false);
                updateEducation(values, id);
              });
            } catch (error) {
              console.error(error);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="grid grid-cols-2 grid-rows-7 gap-x-2 gap-y-1 ">
                <div className="col-span-2 row-span-1">
                  <FormField.InputField
                    label="Nombre de la carrera, curso, bootcamp o certificación"
                    type="text"
                    name="name"
                    id="name"
                    touched={touched}
                    errors={errors}
                  />
                </div>
                <div className="col-span-2 row-span-1">
                  <FormField.InputField
                    label="Nombre institución"
                    type="text"
                    name="instituteName"
                    id="instituteName"
                    touched={touched}
                    errors={errors}
                  />
                </div>
                <div className="row-span-3 col-start-1 col-end-2">
                  <FormField.InputSelect
                    label={'Mes ingreso'}
                    touched={touched}
                    errors={errors}
                    id="startMonth"
                    name="startMonth"
                    data={month}
                  />
                </div>
                <div className="row-span-3 col-start-2 col-end-3">
                  <FormField.InputField
                    label="Año ingreso"
                    type="text"
                    touched={touched}
                    errors={errors}
                    name="startYear"
                    id="startYear"
                  />
                </div>
                <div className="row-span-4 col-start-1 col-end-2">
                  <FormField.InputSelect
                    label={'Mes egreso'}
                    touched={touched}
                    errors={errors}
                    id="endMonth"
                    name="endMonth"
                    data={month}
                  />
                </div>
                <div className="row-span-4 col-start-2 col-end-3">
                  <FormField.InputField
                    label="Año egreso"
                    touched={touched}
                    errors={errors}
                    type="text"
                    name="endYear"
                    id="endYear"
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

export default EducationModal;
