import Modal from './Index';
import * as FormField from '../Forms';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';
import { time, availability } from '../../data/FormData';
import { validateAvailability } from '../../validation/validateModals';

const Availability = ({ updateProfile, data }) => {
  return (
    <Modal title="Disponibilidad">
      {props => (
        <Formik
          initialValues={{
            workAvailability: data.workAvailability || '',
            availabilityStatus: data.availabilityStatus || ''
          }}
          validationSchema={validateAvailability}
          onSubmit={async values => {
            try {
              await apiClient.put('/users/availability', {
                workAvailability: values.workAvailability.toString(),
                availabilityStatus: values.availabilityStatus.toString()
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
              <div className="col-span-7 md:col-span-4 lg:col-span-4 mx-10">
                <FormField.InputCheckbox
                  label="Indícanos tu disponibilidad laboral:"
                  touched={touched}
                  errors={errors}
                  name="workAvailability"
                  id="workAvailability"
                  data={availability}
                />
                <FormField.InputCheckbox
                  label="Indicanos tu tipo incorporación:"
                  touched={touched}
                  errors={errors}
                  name="availabilityStatus"
                  id="availabilityStatus"
                  data={time}
                />
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

export default Availability;
