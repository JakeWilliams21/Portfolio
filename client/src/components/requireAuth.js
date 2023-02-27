import React, { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';

const requireAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
      const token = Cookies.get('jwt_token'); // Check if the token exists in cookies
      if (!token) {
        navigate.push('/log-in'); // Redirect to login page if token doesn't exist
      }
    }, [navigate]);

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default requireAuth;
