import * as Yup from 'yup';

let validateStrings = /^[A-ZÁÉÍÓÚ a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ a-zñáéíóú]+)?$/;

export const validateSchemaContactCompany = Yup.object().shape({
  name: Yup.string()
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
  phone: Yup.string()
    .trim()
    .required('Debes ingresar un telefono.')
    .min(8, 'El telefono es muy corto.')
    .max(25, 'El numero de telefono debe ser más corto.'),
  companyName: Yup.string()
    .trim()
    .required('Debes ingresar nombre de la empresa.'),
  workAreaId: Yup.array()
    .min(1, 'Debes elegir al menos 1 item')
    .required('Debes seleccionar al menos una opción.')
});
