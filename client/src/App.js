import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  
  
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <div id = 'App' className="App">
      <div id = 'content' className = 'content'>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
