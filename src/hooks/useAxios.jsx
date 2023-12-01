// import firebase from 'firebase/app';
import { useNavigate } from 'react-router-dom';
import axios, { axiosCancelToken } from '../config/axios';
// import { authService } from '../constants/urls';
// import 'firebase/auth';

const useAxios = () => {
  const navigate = useNavigate();

  /* Validation to assure the links are http: or https:
    to avoid javascript: URL based script injection. */

  // const validateURL = (url) => {
  //   const parsed = new URL(url);
  //   return ['https:', 'http:'].includes(parsed.protocol);
  // };
  const validateURL = (url) => url;

  const getURN = (path, options) => (process.env.REACT_APP_SKIP_SERVICE_NAME ? path : (options?.service || '') + path);

  // Common get function across the app.
  const get = (path, options = {}) => {
    const URL = getURN(path, options);

    return axios
      .get(validateURL(URL) ? URL : '')
      .then((res) => res.data)
      .catch((error) => {
        if (error.toString().includes('401') || error.toString().includes('403') || error.toString().includes('405')) {
          navigate('/unauthorized');
        }
        if (error.toString().includes('500')) {
          return {
            status: false,
            message: error?.response?.data?.message
              ? error.response.data.message
              : 'Internal Server Error',
          };
        }
        throw error;
      });
  };

  // const logout = (path) => {
  //   localStorage.removeItem('permissions');
  //   const options = {
  //     service: services.AUTH_SERVICE_URI,
  //     successAlert: false,
  //   };
  //   const URL = getURN(path, options);

  //   const config = {
  //     credentials: 'include',
  //   };

  //   if (options?.headers) {
  //     config.headers = options.headers;
  //   }
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       navigate('/login', { replace: true });
  //       return axios.get(validateURL(URL) ? URL : '');
  //     })
  //     .catch(() => {
  //       navigate('/login', { replace: true });
  //     });
  // };

  // Common get function across the app.
  const getQuery = (path, options = {}) => {
    // Build query params.
    let query;
    if (options?.payload) {
      query = Object.keys(options.payload)
        .map((key) => `${key}=${options.payload[key]}`)
        .join('&');
    }

    const URN = getURN(path, options);
    const URL = query ? `${URN}?${query.replace(/\w+=&/g, '').replace(/&\w+=$/, '')}` : URN;
    return axios
      .get(validateURL(URL) ? URL : '')
      .then((response) => response.data)
      // eslint-disable-next-line consistent-return
      .catch((error) => {
        if (error.toString().includes('500') || error.toString().includes('422')) return error;
        if (error.toString().includes('401') || error.toString().includes('403') || error.toString().includes('405')) navigate('/unauthorized');
        // else logout(authService.LOGOUT);
        if (error.toString().includes('500')) {
          return {
            status: false,
            message: error?.response?.data?.message
              ? error.response.data.message
              : 'Internal Server Error',
          };
        }
      });
  };

  // Common post function across the app.
  const post = (path, options = {}) => {
    const URL = getURN(path, options);

    const config = {
      credentials: 'include',
    };

    if (options?.headers) {
      config.headers = options.headers;
    }

    return axios
      .post(validateURL(URL) ? URL : '', options?.payload, config)
      .then((response) => response.data)
      .catch((error) => {
        if (error.toString().includes('401') || error.toString().includes('403') || error.toString().includes('405')) {
          navigate('/unauthorized');
        }
        if (error.toString().includes('500')) {
          return {
            status: false,
            message: error?.response?.data?.message
              ? error.response.data.message
              : 'Internal Server Error',
          };
        }
        throw error;
      });
  };

  // Common delete function across the app.
  const deleteFile = (path, options = {}) => {
    const URL = getURN(path, options);

    const config = {
      credentials: 'include',
    };

    if (options?.headers) {
      config.headers = options.headers;
    }
    return axios
      .delete(validateURL(URL) ? URL : '', { data: options?.payload }, config)
      .then((res) => res.data)
      .catch((error) => {
        if (error.toString().includes('401') || error.toString().includes('403') || error.toString().includes('405')) {
          navigate('/unauthorized');
        }
        if (error.toString().includes('500')) {
          return {
            status: false,
            message: error?.response?.data?.message
              ? error.response.data.message
              : 'Internal Server Error',
          };
        }
        throw error;
      });
  };

  // patch method for uploading updated json
  const patch = (path, options = {}) => {
    const URL = getURN(path, options);

    const config = {
      credentials: 'include',
    };

    if (options?.headers) {
      config.headers = options.headers;
    }

    return axios
      .patch(validateURL(URL) ? URL : '', options?.payload, config)
      .then((response) => response.data)
      .catch((error) => {
        if (error.toString().includes('401') || error.toString().includes('403') || error.toString().includes('405')) {
          navigate('/unauthorized');
        }
        if (error.toString().includes('500')) {
          return {
            status: false,
            message: error?.response?.data?.message
              ? error.response.data.message
              : 'Internal Server Error',
          };
        }
        throw error;
      });
  };

  // post with headers
  const postForBlobType = (path, options = {}) => {
    const URL = getURN(path, options);

    const config = {
      credentials: 'include',
      responseType: 'blob',
    };

    if (options?.headers) {
      config.headers = options.headers;
    }

    return axios
      .post(validateURL(URL) ? URL : '', options?.payload, config)
      .then((response) => response)
      .catch((error) => {
        if (error.toString().includes('401') || error.toString().includes('403') || error.toString().includes('405')) {
          navigate('/unauthorized');
        }
        if (error.toString().includes('500')) {
          return { status: false, message: 'Internal Server Error' };
        }
        throw error;
      });
  };

  // Function to upload file to server.
  const uploadFile = (path, options = {}) => {
    const URL = getURN(path, options);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        options?.updateProgress(Math.floor((loaded / total) * 100));
      },
      cancelToken: options?.cancelTokenSource?.token,
    };

    return axios.post(validateURL(URL) ? URL : '', options?.formData, config);
  };

  // Function to generate and return cancel token.
  const getCancelTokenSource = () => axiosCancelToken.source();

  return (
    {
      get,
      getQuery,
      post,
      patch,
      postForBlobType,
      uploadFile,
      getCancelTokenSource,
      deleteFile,
      // logout,
    }
  );
};

export default useAxios;
