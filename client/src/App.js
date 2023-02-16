import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

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
    <div id = 'App' className="App">
        <Navbar/>
        <Home/>
        <About/>
      
    </div>
  );
}

export default App;
