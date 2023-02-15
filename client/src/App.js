import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState({})

  axios({
    method: 'GET',
    url: '/api/data',
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    setData(res.data)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.message}
        </a>
      </header>
    </div>
  );
}

export default App;
