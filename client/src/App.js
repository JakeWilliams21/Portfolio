import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  
  
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <div id = 'App' className="App">
      <div id = 'content' className = 'content'>
        <Navbar aboutRef = {aboutRef} projectsRef = {projectsRef} contactRef = {contactRef} />
        <Home/>
        <About ref = {aboutRef}/>
        <Projects ref = {projectsRef}/>
      </div>
        <Footer ref = {contactRef}/>
    </div>
  );
}

export default App;
