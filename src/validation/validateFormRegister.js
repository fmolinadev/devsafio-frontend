import * as Yup from 'yup';

let validateStrings = /^[A-ZÁÉÍÓÚ a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ a-zñáéíóú]+)?$/;
let validateAlphanumeric = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;

export const validateSchemaRegister = Yup.object().shape({
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
  password: Yup.string()
    .matches(validateAlphanumeric, {
      excludeEmptyString: true,
      message:
        'La contraseña debe tener al menos una mayúscula, una minúscula y un número.'
    })
    .required('Debes ingresar una contraseña.')
    .min(8, 'La contraseña debe tener más de ocho caracteres.')
    .max(20, 'La contraseña debe ser más corta.'),

  passwordConfirm: Yup.string().when('password', {
    is: (value) => (value && value.length > 0 ? true : false),
    then: Yup.string()
      .oneOf([Yup.ref('password')], 'Las contraseñas no cohinciden.')
      .required('Debes repetir la contraseña.')
  })
});
