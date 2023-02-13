import * as FormField from '../../../components/Forms';
import { useEffect, useState } from 'react';
import apiClient from '../../../services/api.service';
import { yearsOfExperience } from '../../../data/FormData';


export const ExperienceAndWork = ({ errors, touched }) => {
  const [softSkills, setSoftSkills] = useState(false);

  const getSoftSkills = async () => {
    const { data } = await apiClient('/soft-skills');
    setSoftSkills(data);
  };

  useEffect(() => {
    getSoftSkills();
  }, []);

  return (
    <div className=" mt-10 px-0">
      <div className="my-8 mx-auto justify-center">
        <h3 className="text-2xl mx-auto justify-center font-sans flex font-bold text-[#140B34]">
          EXPERIENCIA Y TRABAJO
        </h3>
      </div>
      <div className=" md:grid-cols-2 md:gap-6 max-w-8xl">
        <div className="md:col-span-2 md:mt-0">
          <div className="grid grid-cols-2 lg:grid-cols-6 mx-10 md:mx-40 md:gap-x-10 md:gap-y-6">
            <div className="col-span-6 sm:col-span-3">
              <FormField.InputField
                label={'URL CV:'}
                type="text"
                name="cvUrl"
                id="cvUrl"
                required
                placeholder="Link aquí"
                touched={touched}
                errors={errors}
              />
              <label className="block font-light text-base text-[#575253]">
                Subir como documento público en Google Drive o similar
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <FormField.InputField
                label={'URL de LinkedIn'}
                type="text"
                name="linkedinUrl"
                id="linkedinUrl"
                required
                placeholder="Link aquí"
                touched={touched}
                errors={errors}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <FormField.InputField
                label={'URL de GitHub'}
                type="text"
                name="githubUrl"
                id="githubUrl"
                required
                placeholder="Link aquí"
                touched={touched}
                errors={errors}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <FormField.InputField
                label={'URL de Portafolio/Sitio web'}
                type="text"
                name="portfolioUrl"
                id="portfolioUrl"
                required
                placeholder="Link aquí"
                touched={touched}
                errors={errors}
              />
            </div>
            <div className="rounded-lg text-sm col-span-full">
              <FormField.InputTextArea
                label={
                  'Explícanos en detalle algún proyecto que te enorgullece'
                }
                name="featuredProject"
                id="featuredProject"
                required
                placeholder="Cuentanos aquí..."
                touched={touched}
                errors={errors}
                headText={
                  <label
                    htmlFor="featuredProject"
                    className="text-justify font-light text-base pb-5 font-sans text-[#575253]"
                  >
                    Describe de que trató, tu rol en el proyecto y por qué lo
                    elegiste (por ejemplo: arquitectura de desarrollo, equipo y
                    tu rol en el proyecto, tecnologías utilizadas, dificultades
                    y soluciones, funcionalidades, objetivos, etc. Recuerda NO
                    esperamos link, sino explicación)
                  </label>
                }
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              {softSkills != null ? (
                <FormField.InputCheckbox
                  label="Selecciona 3 habilidades blandas que te representen"
                  touched={touched}
                  errors={errors}
                  required
                  name="softSkills"
                  id="softSkills"
                  data={softSkills}
                />
              ) : (
                <progress className="animate-pulse progress w-56">Cargando datos</progress>
              )}
            </div>
            <div className="col-span-6 sm:col-span-3">
              <FormField.InputRadio
                label=" ¿Cuántos años de experiencia laboral posees en desarrollo de software y/o diseño?"
                touched={touched}
                errors={errors}
                id="devExperience"
                name="devExperience"
                required
              >
                {yearsOfExperience}
              </FormField.InputRadio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
