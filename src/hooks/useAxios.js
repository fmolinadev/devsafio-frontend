import { useState, useEffect } from 'react';
import apiClient from '../services/api.service';

const useAxios = (url) => {
  let [dataDb, setDataDb] = useState([]);
  let [loading, setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let [error, setError] = useState('');

  const getData = async () => {
    try {
      const { data } = await apiClient.get(url);
      setDataDb(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { dataDb, loading, error };
};

export default useAxios;
