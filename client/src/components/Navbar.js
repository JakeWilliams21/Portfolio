import React, { useEffect, useState } from 'react'
import '../App.css'
import MenuIcon from '@mui/icons-material/Menu';
import Links from './Links';
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

  return (
    <div id = 'navbar-container'>
    <div id = 'navbar' className = 'navbar-div'>
        <div className = 'navbar-left'>
            <h2><a href = '/'>Jake Williams</a></h2>
        </div>
        <div className = 'navbar-right'>
          {visible ? (
            <CloseIcon id = 'close-icon' fontSize = 'large' onClick = {clickHandler} />
          ) : (
            <div>
            <Links/>
            <MenuIcon id = 'menu-icon' fontSize = 'large' onClick = {clickHandler}/>
            </div>
            
          )}
          {visible && (
            <div id = 'hamburger-menu'>
              <ul>
                  <li>Portfolio</li>
                  <li>Resume</li>
                  <li>Blog</li>
                  <li>Contact</li>
              </ul>
            </div>
          )}  
        </div>
    </div>
    
    </div>
  )
}

export default Navbar