import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';




const GoogleLoginButton = ({ onSuccess, onError }) => {
  const login = useGoogleLogin({
    
    onSuccess,
    onError
  });

  return <GoogleButton onClick={() => login()} />;
};

export default GoogleLoginButton;
