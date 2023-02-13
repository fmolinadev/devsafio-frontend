import React, { useState } from 'react';
import { useAuth } from '../../../context/authContext';
import { useNavigate } from 'react-router-dom';
import {
  AiFillGoogleCircle,
  AiFillFacebook,
  AiOutlineMail
} from 'react-icons/ai';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import '../../../assets/componentsCSS/button.css';

const Account = ({ change }) => {
  const { loginWithGoogle, loginWithFacebook, loginWithGithub } = useAuth();
  const [/* error */ setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate('/application');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFacebookSignin = async () => {
    try {
      await loginWithFacebook();
      navigate('/application');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGithubSignin = async () => {
    try {
      await loginWithGithub();
      navigate('/application');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 p-4 max-w-xs md:max-w-lg mx-auto">
        <button
          className="btn btn-login text-dark-text md:col-start-2 bg-white  hover:text-white"
          onClick={() => change('email')}
        >
          <AiOutlineMail className="h-6 w-6 mr-1" />
          Ingresa con tu mail
        </button>
        <button
          onClick={handleGoogleSignin}
          className="btn btn-login bg-white text-dark-text "
        >
          <AiFillGoogleCircle className="h-6 w-6 mr-1" />
          Ingresa con Google
        </button>
        <button className="btn btn-login bg-dark-purple text-white ">
          <BsLinkedin className="h-6 w-6 mr-1" /> Ingresa con LinkedIn
        </button>
        <button
          onClick={handleFacebookSignin}
          className="btn btn-login bg-[#3b5998] text-white"
        >
          <AiFillFacebook className="h-6 w-6 mr-1" />
          Ingresa con Facebook
        </button>
        <button
          onClick={handleGithubSignin}
          className="btn btn-login bg-dark-text text-white "
        >
          <BsGithub className="h-6 w-6 mr-1" />
          Ingresa con Github
        </button>
      </div>
    </>
  );
};

export default Account;
