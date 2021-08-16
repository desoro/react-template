import { useEffect } from "react";
import axios from 'axios';
import config from 'config';

function AxiosDefaults() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      axios.defaults.baseURL = 'http://localhost:8844';
    } else {
      axios.defaults.baseURL = `${config.apiUrl}:8844`;
    }
    
    axios.defaults.withCredentials = true;
  }, []);

  return null;
}

export default AxiosDefaults;