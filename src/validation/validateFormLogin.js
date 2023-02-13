import * as Yup from 'yup';

let validateAlphanumeric = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;

export const validateSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .required('El e-mail es requerido.')
    .email('El e-mail ingresado no es válido.')
    .min(6, 'El e-mail es demasiado corto.')
    .max(50, 'El e-mail ingresado es muy largo.'),
  password: Yup.string()
    .matches(validateAlphanumeric, {
      excludeEmptyString: true,
      message:
        'La contraseña debe tener al menos una mayúscula, una minúscula y un número.'
    })
    .required('Debes ingresar una contraseña.')
    .min(8, 'La contraseña debe tener más de ocho caracteres.')
    .max(20, 'La contraseña debe ser más corta.')
});

export const validateForgotPassword = Yup.object().shape({
  email: Yup.string()
    .required('El e-mail es requerido.')
    .email('El e-mail ingresado no es válido.')
    .min(6, 'El e-mail es demasiado corto.')
    .max(50, 'El e-mail ingresado es muy largo.')
});