import * as FormField from '../../../components/Forms';
import { availability,status, visaStatus } from '../../../data/FormData';


export const JobType = ({ errors, touched }) => {
  return (
    <>
      <div className="mt-10 md:mt-0">
        <div className=" mx-auto justify-center">
          <h3 className="w-56 md:w-auto align-middle text-center flex text-lg md:text-2xl mx-auto justify-center font-sans font-bold text-[#140B34]">
            ¿QUÉ TIPO DE TRABAJO ESTÁS BUSCANDO?
          </h3>
        </div>
        <div className="grid md:grid-cols-1 md:gap-8 max-w-8xl">
          <div className="mt-5 my-4 md:col-span-2 ">
            <div className="col-span-12 md:col-span-6 mx-10 md:mx-40 lg:col-span-12">
              <FormField.InputTextArea
                label={
                  'Déjanos una breve descripción con respecto tu trabajo ideal'
                }
                name="idealWorkComment"
                id="idealWorkComment"
                required
                placeholder="Ingresa tu comentario aquí..."
                touched={touched}
                errors={errors}
              />
            </div>
            <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-12 mx-10 lg:mx-40 md:gap-x-6 md:gap-y-6">
              <div className="col-span-7 md:col-span-4 lg:col-span-4 md:mx-auto">
                <FormField.InputCheckbox
                  label="Indícanos tu disponibilidad laboral:"
                  touched={touched}
                  errors={errors}
                  required
                  name="workAvailability"
                  id="workAvailability"
                  data={availability}
                />
              </div>
              <div className="col-span-7 md:col-span-5 lg:col-span-4 md:mx-auto">
                <FormField.InputRadio
                  label="¿Qué describe mejor tu situación actual?"
                  touched={touched}
                  errors={errors}
                  id="relocationOption"
                  name="relocationOption"
                  required
                >
                  {status}
                </FormField.InputRadio>
              </div>
              <div className="col-span-7 md:col-span-4 lg:col-span-4 md:mx-auto">
                <FormField.InputCheckbox
                  label="¿Cuentas con Visa de trabajo activa en?"
                  touched={touched}
                  errors={errors}
                  name="visa"
                  id="visa"
                  data={visaStatus}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
