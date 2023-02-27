import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './stylesheets/LogIn.css'
import Cookies from 'js-cookie';
import { useNavigate} from 'react-router-dom'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/user', {username: username, password: password}).then((response) => {
      const token = response.data.accessToken
      Cookies.set('jwt_token', token)

      navigate('/create-project')
    })
  }

  return (
    <div id = 'log-in-page'>
    <Navbar/>
      <div id = 'log-in-div'>
      <form onSubmit={handleSubmit}>
            <span>Log-In</span>
            <div className="form-group">
              <input
                type="text"
                id="username"
                name="username"
                placeholder = 'Username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder = 'password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
    </div>
      </div>
      
    
  );
}

export default LoginForm;
