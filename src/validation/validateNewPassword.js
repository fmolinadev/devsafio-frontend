import * as Yup from 'yup';

let validateAlphanumeric = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;

export const validateNewPassword = Yup.object().shape({
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
