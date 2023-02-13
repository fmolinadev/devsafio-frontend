import apiClient from '../services/api.service';
import Swal from 'sweetalert2';
export const postRegisterAxios = async (values) => {
  try {
    const { data } = await apiClient.post('/auth/register', values);
    if (data !== null) {
      await apiClient.post('/auth/welcome-email', values);
      return data;
    }
    return data;
  } catch (error) {
    throw Swal.fire({
      icon: 'error',
      title: 'Error:',
      text: `${error.response?.data?.message || 'Falla en el sitio web.'}`
    });
  }
};

export const postLoginAxios = async (values) => {
  try {
    const { data } = await apiClient.post('/auth/login', values);
    return data;
  } catch (error) {
    throw Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.response?.data?.message || 'Credenciales inválidas.'}`
    });
  }
};

export const postForgotPassAxios = async (values) => {
  try {
    const { data } = await apiClient.post('/auth/forgot-password', values);
    return data;
  } catch (error) {
    throw Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `El mail no se encuentra registrado ${values.email}`
    });
  }
};

export const postRestorePassword = async (values) => {
  try {
    const { data } = await apiClient.post('/auth/reset-password', values);
    return data;
  } catch (error) {
    throw Swal.fire({
      icon: 'error',
      title: 'Token expirado...',
      html: `Serás redirigido a <b>restablecer contraseña</b>`,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    }).then(function (result) {
      if (result.isDismissed === true) {
        window.location = '/forgot-password';
      }
    });
  }
};
