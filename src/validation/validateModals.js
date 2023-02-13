import * as Yup from 'yup';

let validateURL =
  /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/;
let validateStrings = /^[A-ZÁÉÍÓÚ a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ a-zñáéíóú]+)?$/;
let validateNumber = /^([0-9])*$/;
let validateLinkedinURL =
  /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
let validateGithubURL =
  /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?github.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

const validatePersonalInformation = Yup.object().shape({
  phoneNumber: Yup.string()
    .trim()
    .required('Debes ingresar un telefono.')
    .min(8, 'El telefono es muy corto.')
    .max(18, 'El numero de telefono debe ser más corto.'),

  city: Yup.string()
    .trim()
    .required('Debes ingresar una ciudad.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'La ciuddad debe ser solo texto.'
    })
    .min(2, 'La ciudad debe tener al menos 2 letras.')
    .max(25, 'La ciudad debe ser más corta.'),
  firstName: Yup.string()
    .trim()
    .required('Debes ingresar un nombre.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'El nombre debe ser solo texto y comenzar con mayúscula.'
    })
    .min(2, 'El nombre debe tener al menos 2 letras.')
    .max(25, 'El nombre debe ser más corto.'),
  lastName: Yup.string()
    .trim()
    .required('Debes ingresar un apellido.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'El apellido ser solo texto y comenzar con mayúscula.'
    })
    .min(2, 'El apellido debe tener al menos 2 letras.')
    .max(30, 'El apellido debe ser más corto.'),
  email: Yup.string()
    .required('El e-mail es requerido.')
    .email('El e-mail ingresado no es válido.')
    .min(6, 'El e-mail es demasiado corto.')
    .max(50, 'El e-mail ingresado es muy largo.'),
  linkedinUrl: Yup.string()
    .trim()
    .required('Este link es requerido.')
    .matches(validateLinkedinURL, {
      excludeEmptyString: true,
      message: 'Debes ingresar un link de LinkedIn válido.'
    }),
  githubUrl: Yup.string()
    .trim()
    .required('Este link es requerido.')
    .matches(validateGithubURL, {
      excludeEmptyString: true,
      message: 'Debes ingresar un link de GitHub válido.'
    })
});

const validateAvailability = Yup.object().shape({
  workAvailability: Yup.array()
    .min(1, 'Debes elegir al menos 1 item')
    .max(3, 'Solo puedes elegir hasta 3 preferencias'),
  availabilityStatus: Yup.array()
    .max(1, 'Debes elegir al menos 1 item')
    .required('Este campo es requerido.')
});

const validateCV = Yup.object().shape({
  cvUrl: Yup.string()
    .trim()
    .required('Este link es requerido.')
    .matches(validateURL, {
      excludeEmptyString: true,
      message: 'Debes ingresar un link válido.'
    })
});

const year = Yup.string()
  .trim()
  .required('Debe ingresar un año.')
  .matches(validateNumber, {
    excludeEmptyString: true,
    message: 'Debe ingresar solo numeros.'
  })
  .min(4, 'Debe ingresar 4 digitos.')
  .max(4, 'El año no puede tener mas de 4 digitos.');

const validateEducation = Yup.object().shape({
  name: Yup.string()
    .required('Debes ingresar un nombre.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'El nombre debe ser solo texto.'
    })
    .min(2, 'El nombre debe tener al menos 2 letras.')
    .max(25, 'El nombre debe ser más corto.'),
  instituteName: Yup.string()
    .required('Debes ingresar un nombre.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'El nombre debe ser solo texto.'
    })
    .min(2, 'El nombre debe tener al menos 2 letras.')
    .max(25, 'El nombre debe ser más corto.'),
  startMonth: Yup.string().required('Debes seleccionar un mes.'),
  endMonth: Yup.string().required('Debes seleccionar un mes.'),
  startYear: year,
  endYear: year
});

const validateNewEducation = Yup.object().shape({
  name: Yup.string()
    .required('Debes ingresar un nombre.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'El nombre debe ser solo texto.'
    })
    .min(2, 'El nombre debe tener al menos 2 letras.')
    .max(25, 'El nombre debe ser más corto.'),
  instituteName: Yup.string()
    .required('Debes ingresar un nombre.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'El nombre debe ser solo texto.'
    })
    .min(2, 'El nombre debe tener al menos 2 letras.')
    .max(25, 'El nombre debe ser más corto.'),
  type: Yup.string().required('Debes seleccionar una opción.'),
  startMonth: Yup.string().required('Debes seleccionar un mes.'),
  endMonth: Yup.string().required('Debes seleccionar un mes.'),
  startYear: year,
  endYear: year
});

const validateStackAndSalary = Yup.object().shape({
  stack: Yup.array()
    .min(1, 'Debes elegir al menos 1 item')
    .max(3, 'Solo puedes elegir hasta 3 items')
    .required('Esta opcion es requerida.'),
  currentSalary: Yup.string()
    .trim()
    .required('Debes ingresar un valor.')
    .matches(validateNumber, {
      excludeEmptyString: true,
      message: 'El salario debe ser solo numeros.'
    })
});

const validateWorkExperience = Yup.object().shape({
  englishLevel: Yup.string().required('Debes seleccionar un nivel de ingles.'),
  devExperience: Yup.string().required('Debes seleccionar una opción.')
});

const validateDataSkillsLanguage = Yup.object().shape({
  lenguage: Yup.array().required('Este campo es requerido.')
});

const validateDataSkillsDatabase = Yup.object().shape({
  basesAndFrameworks: Yup.array().required('Este campo es requerido.')
});

const validateDataSkillsTools = Yup.object().shape({
  tools: Yup.array().required('Este campo es requerido.')
});

export {
  validatePersonalInformation,
  validateAvailability,
  validateCV,
  validateEducation,
  validateStackAndSalary,
  validateWorkExperience,
  validateDataSkillsLanguage,
  validateDataSkillsDatabase,
  validateDataSkillsTools,
  validateNewEducation
};
