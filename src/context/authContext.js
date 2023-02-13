import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { createContext, useContext, useState } from 'react';
import Swal from 'sweetalert2';
import {
  postForgotPassAxios,
  postLoginAxios,
  postRestorePassword
} from '../hooks/postAxios';
import { postLoginFirebase } from '../hooks/postFirebase';
import { auth } from '../services/firebaseConfig';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthContextProvider');
  }
  return context;
};

const initialUser = localStorage.getItem('user');

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    initialUser ? JSON.parse(initialUser) : null
  );

  const userLogout = () => {
    setUserData(null);
    localStorage.clear();
  };

  const updateUser = (data) => {
    setUserData(data);
    localStorage.setItem('user', JSON.stringify(data));
  };

  const postLogin = async (values) => {
    const { user, token } = await postLoginAxios(values);
    if (user) {
      setUserData(user);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      let timerInterval;
      Swal.fire({
        title: 'Bienvenido!',
        html: `Bienvenido, ${user.firstName} ${user.lastName},`,
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      });
    }
  };

  const loginWithGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const sign = await signInWithPopup(auth, googleProvider);
      const { user, token } = await postLoginFirebase(sign);
      setUserData(user);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
    }
  };

  const loginWithFacebook = async () => {
    const facebookProvider = new FacebookAuthProvider();
    await signInWithPopup(auth, facebookProvider);
  };

  const loginWithGithub = async () => {
    const githubProvider = new GithubAuthProvider();
    await signInWithPopup(auth, githubProvider);
  };

  const forgotPassword = async (values) => {
    await postForgotPassAxios(values);
    let timerInterval;
    Swal.fire({
      title: 'Enlace enviado!',
      html: `Revisa el email: ${values.email}`,
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    });
  };

  const restorePassword = async (values) => {
    await postRestorePassword(values);
    let timerInterval;
    Swal.fire({
      title: 'Contraseña restaurada con éxito',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then(function (result) {
      if (result.isDismissed === true) {
        window.location = '/login';
      }
    });
  };

  const data = {
    userData,
    updateUser,
    userLogout,
    postLogin,
    loginWithGoogle,
    loginWithFacebook,
    loginWithGithub,
    forgotPassword,
    restorePassword
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
