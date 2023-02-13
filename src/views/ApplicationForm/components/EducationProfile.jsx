import * as FormField from '../../../components/Forms';
import {
  educationLevel,
  typeInstitution,
  educationStatus,
  englishLevel
} from '../../../data/FormData';

export const EducationProfile = ({ errors, touched }) => {
  return (
    <div className="mt-10  sm:mt-0">
      <div className="my-8 mt-10 max-w-6xl mx-auto justify-center">
        <h3 className="text-2xl mx-auto justify-center font-sans flex font-bold text-[#140B34]">
          PERFIL EDUCACIONAL
        </h3>
      </div>
      <div className="md:grid md:grid-cols-1 max-w-8xl ">
        <div className="mt-5 my-4 md:col-span-7 md:mt-0">
          <div className="grid grid-cols-6  mx-10 md:mx-40 md:gap-x-6 md:gap-y-6">
            <div className="col-span-6 sm:col-span-6">
              <FormField.InputSelect
                label={'¿Cuál es tu máximo nivel educacional?'}
                touched={touched}
                errors={errors}
                id="educationalLevel"
                name="educationalLevel"
                data={educationLevel}
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <div
                htmlFor="stack"
                className="block text-justify font-bold my-4 text-sm md:text-2xl text-[#140B34]"
              >
                {' '}
                A continuación, indícanos la carrera profesional, curso,
                bootcamp o certificaciones cursada relacionada al desarrollo de
                software, diseño o TI (puedes indicarnos la más importante o
                actuale):
              </div>
            </div>
            <div className="col-span-6 sm:col-span-6">
              <FormField.InputField
                label="Nombre de la carrera, curso, bootcamp o certificación"
                type="text"
                name="name"
                id="name"
                required
                placeholder="Nombre de la carrera, curso, bootcamp o certificación"
                touched={touched}
                errors={errors}
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <FormField.InputField
                label="Nombre institución"
                type="text"
                name="institute_name"
                id="institute_name"
                required
                placeholder="Nombre institución"
                touched={touched}
                errors={errors}
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <FormField.InputSelect
                label={'Tipo institución'}
                touched={touched}
                errors={errors}
                id="type"
                name="type"
                data={typeInstitution}
              />
            </div>
            <div className="col-span-6 lg:col-span-4">
              <FormField.InputSelect
                label={
                  '¿Cuál es tu situacion educacional actual ( Bootcamp, diplomados,universidad, curso u otros)?'
                }
                touched={touched}
                errors={errors}
                id="educationStatusCurrent"
                name="educationStatusCurrent"
                data={educationStatus}
              />
            </div>
            <div className="col-span-6 lg:col-span-2 pt-6">
              <FormField.InputSelect
                label={'Nivel inglés'}
                touched={touched}
                errors={errors}
                id="englishLevel"
                name="englishLevel"
                data={englishLevel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
