import apiClient from '../services/api.service';
import Swal from 'sweetalert2';

export const editLanguage = async (values) => {
  let dataLanguaguesValues = values.map((element) => ({
    devLanguageId: element.devLanguageId ? element.devLanguageId : element.id,
    level: parseInt(element.level)
  }));
  try {
    const { data } = await apiClient.post(
      '/users/edit-devlanguages',
      dataLanguaguesValues
    );
    return data;
  } catch (error) {
    throw Swal.fire({
      icon: 'error',
      title: 'Error:',
      text: `${error.response?.data?.message || 'Falla al editar los campos.'}`
    });
  }
};

export const editDatabases = async (values) => {
  let dataFrameworksValues = values.map((element) => ({
    databaseId: element.databaseId ? element.databaseId : element.id,
    level: parseInt(element.level)
  }));
  try {
    await apiClient.post('/users/edit-databases', dataFrameworksValues);
  } catch (error) {
    throw Swal.fire({
      icon: 'error',
      title: 'Error:',
      text: `${error.response?.data?.message || 'Falla al editar los campos.'}`
    });
  }
};

export const editTools = async (values) => {
  let dataToolsValues = values.map((element) => ({
    toolsId: element.toolsId ? element.toolsId : element.id,
    level: parseInt(element.level)
  }));
  try {
    await apiClient.post('/users/edit-tools', dataToolsValues);
  } catch (error) {
    throw Swal.fire({
      icon: 'error',
      title: 'Error:',
      text: `${error.response?.data?.message || 'Falla al editar los campos.'}`
    });
  }
};
