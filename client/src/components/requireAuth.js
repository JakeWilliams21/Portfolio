import React, { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode'

const requireAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const navigate = useNavigate()

    useEffect(() => {
      const token = Cookies.get('jwt_token'); // Check if the token exists in cookies

      if (!token) {
        navigate('/log-in'); // Redirect to login page if token doesn't exist
      } else {
        try {
          const decodedToken = jwt_decode(token)
          if (decodedToken.exp < Date.now() / 1000) {
            navigate('/log-in')
          }
        } catch (err) {
          navigate('/log-in')
        }
      }
    }, [navigate]);

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default requireAuth;
