import React, { useEffect, useState } from 'react'
import '../App.css'
import MenuIcon from '@mui/icons-material/Menu';
import $ from 'jquery'
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
  const [visible, setVisible] = useState(false)

  
  useEffect(() => {
    function handleResize() {
      if ($(window).width() >= 900) {
        setVisible(false);
      }
    }

    $(window).on("resize", handleResize);

    return () => {
      $(window).off("resize", handleResize);
    };
  }, []);
  

    const clickHandler = () => {
      setVisible(!visible)
    }

  const scrollTo = (selector) => {
    console.log('clicked');
    $('html, body').animate(
      {
        scrollTop: $(selector).offset().top,
      },
      500
    )
  }

  const hamScrollTo = (selector) => {
    setVisible(!visible)
    $('html, body').animate(
      {
        scrollTop: $(selector).offset().top,
      },
      500
    )
  }

  return (
    <div id = 'navbar-container'>
    <div id = 'navbar' className = 'navbar-div'>
        <div className = 'navbar-left'>
            <span><a href = '/'>Jake Williams</a></span>
        </div>
        <div className = 'navbar-right'>
          {visible ? (
            <CloseIcon id = 'close-icon' fontSize = 'large' onClick = {clickHandler} />
          ) : (
            <div>
            <div>
              <ul id = 'navbar-links'>
                <li onClick = {() => scrollTo('#about')}>About</li>
                <li onClick = {() => scrollTo('#projects')}>Portfolio</li>
                <li onClick = {() => scrollTo('#footer')}>Contact</li>
              </ul>
            </div>
            <MenuIcon id = 'menu-icon' fontSize = 'large' onClick = {clickHandler}/>
            </div>
            
          )}
          {visible && (
            <div id = 'hamburger-menu'>
              <ul>
                  <li onClick = {() => hamScrollTo('#portrait')}>About</li>
                  <li onClick = {() => hamScrollTo('#projects')}>Portfolio</li>
                  <li onClick = {() => hamScrollTo('#footer')}>Contact</li>
              </ul>
            </div>
          )}  
        </div>
    </div>
    
    </div>
  )
}

export default Navbar