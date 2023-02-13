import { useEffect } from 'react';
import * as FormField from '../../../components/Forms';
import apiClient from '../../../services/api.service';

export const JobProfile = ({ errors, touched, values, setFieldValue }) => {
  const getAllData = async () => {
    const { data: lenguage } = await apiClient('/dev-languages');
    const { data: databases } = await apiClient('/databases');
    const { data: tools } = await apiClient('/tools');
    setFieldValue('lenguage', lenguage);
    setFieldValue('basesFrameworks', databases);
    setFieldValue('tools', tools);
  };

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="mt-10 max-w-6xl mx-auto justify-center">
      <h3 className="text-2xl mx-auto justify-center font-sans flex font-bold text-[#140B34]">
        PERFIL LABORAL
      </h3>
      <div className="flex justify-center max-w-8xl">
        <div className="p-4 max-w-6xl">
          <p className="font-sans text-lg tracking-wide leading-relaxed py-3">
            Queremos conocer tus competencias y experiencia. A continuación
            podrás elegir las competencias que conoces con respecto a 3 niveles:
            <br />
            <br />
            <b>Nivel 1:</b> No tengo experiencia laboral, pero he desarrollado
            proyectos utilizado esta tecnología/herramienta.
            <br />
            <br />
            <b>Nivel 2:</b> Tengo poca experiencia laboral, menos de dos años,
            necesito supervisión constante.
            <br />
            <br />
            <b>Nivel 3:</b> Tengo experiencia laboral (+2 años) y/o autonomía
            completa a la hora de desarrollar proyectos.
            <br />
            <br />
            <b>
              Ten en cuenta, de acuerdo a las competencias declaradas, te
              pediremos que seas capaz de demostrarlo de forma práctica durante
              el proceso de selección.
            </b>
            <br />
            <br />
          </p>
          <p className="font-sans text-lg tracking-wide leading-relaxed py-3">
            <b>Indícanos tus conocimientos a Nivel 1, Nivel 2, Nivel 3 </b>(No
            tengo experiencia laboral, pero he desarrollado proyectos utilizado
            esta tecnología/herramienta):
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* lenguaje */}
        <div className="flex justify-center mx-auto">
          <div className="form-control ">
            <div className="flex justify-center pb-2">
              <p className="pt-6">
                <b>Lenguaje</b>
              </p>
            </div>

            <FormField.InputSelectArray
              data={values.lenguage}
              name="lenguage"
              id="lenguage"
              touched={touched}
              errors={errors}
              values={values}
            />
          </div>
        </div>
        {/* bases o frameworks */}
        <div className="flex justify-center mx-auto">
          <div className="form-control">
            <div className="flex justify-center pb-2">
              <p className="pt-6">
                <b>Bases o frameworks</b>
              </p>
            </div>

            <FormField.InputSelectArray
              data={values.basesFrameworks}
              name="basesAndFrameworks"
              id="basesAndFrameworks"
              touched={touched}
              errors={errors}
              values={values}
            />
          </div>
        </div>
        {/*  herramientas*/}
        <div className="flex justify-center">
          <div className="form-control">
            <div className="flex justify-center pb-2">
              <p className="pt-6">
                <b>Herramientas</b>
              </p>
            </div>
            <FormField.InputSelectArray
              data={values.tools}
              name="tools"
              id="tools"
              touched={touched}
              errors={errors}
              values={values}
            />
          </div>
        </div>
      </div>
      <div className="col-span-6 md:col-span-3 px-5">
        <FormField.InputTextArea
          label="Indícanos alguna otra competencia, herramienta o tecnología que conozcas que creas importante agregar:"
          touched={touched}
          errors={errors}
          placeholder="Cuentanos aqui..."
          required
          name="additionalToolsComment"
          id="additionalToolsComment"
        />
      </div>
    </section>
  );
};
