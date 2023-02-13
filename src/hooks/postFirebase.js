import apiClient from '../services/api.service';
import Swal from 'sweetalert2';

const postLoginFirebase = async (values) => {
  try {
    const { data } = await apiClient.post('/auth/login-firebase', values);    
    return data;
  } catch ({ error }) {
      throw Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credenciales inválidas.'
      });
  }
};

export{postLoginFirebase}