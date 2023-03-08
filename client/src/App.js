import './App.css';
import React, {useEffect} from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import $ from 'jquery'

function App() {
  
  useEffect(() => {
    window.history.scrollRestoration = 'manual'

    $(window).on('scroll', () => {
      const windowTop = $(window).scrollTop();
      $('.main').each(function(){
        const position = $(this).offset().top;
        // const windowTop = $(window).scrollTop();
        if (position < windowTop + $(window).height()) {
          $(this).addClass('animate-class');
          $(this).removeClass('hide');
        }
      });

      const hrPosition = $('#projects-hr').offset().top;
      if (hrPosition < windowTop + $(window).height()) {
        $('#projects-hr').addClass('hr-spread')
      }

      const footerPosition = $('#footer').offset().top;
      if (footerPosition < windowTop + $(window).height()) {
        $('#footer').addClass('footer-fade')
        $('#footer').removeClass('footer-before')
      }
    });
    
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
