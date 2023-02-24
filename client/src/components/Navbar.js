import React, { useEffect, useState } from 'react'
import '../App.css'
import MenuIcon from '@mui/icons-material/Menu';
import Links from './Links';
import $ from 'jquery'
import CloseIcon from '@mui/icons-material/Close';
import { Close } from '@mui/icons-material';


const Navbar = () => {
  const [visible, setVisible] = useState(false)

    useEffect(() => {
      let width = $(window).width()
      if (width > 900) {
        $('#hamburger-menu').css("display", "none")
        $('#close-icon').css('display', 'none')
        $('#menu-icon').css('display', 'none')
        setVisible(false)
      } else if (!visible && width <= 900) {
        $('#menu-icon').css('display', 'flex')
      }

      document.addEventListener('scroll', () => {
          let position = window.scrollY

          if (position > 0) {
            document.getElementById('navbar-container').classList.add('sticky')
        } else {
            document.getElementById('navbar-container').classList.remove('sticky')
        }
        })
    })

    const clickHandler = () => {
      const menu = $('#menu-icon')
      const close = $('#close-icon')
      const links = $('#hamburger-menu')

      if (visible) {
        links.addClass('phase-out')
        links.removeClass('phase-in')
        links.css("display", "none")
        menu.css('display', 'flex')
        close.css('display', 'none')
        setVisible(false)
      } else {
        links.css("display", "flex")
        links.addClass('phase-in')
        links.removeClass('phase-out')
        menu.css('display', 'none')
        close.css('display', 'flex')
        setVisible(true)
      }
      
    }

  return (
    <div id = 'navbar-container'>
    <div id = 'navbar' className = 'navbar-div'>
        <div className = 'navbar-left'>
            <h2><a href = '/'>Jake Williams</a></h2>
        </div>
        <div className = 'navbar-right'>
            <MenuIcon id = 'menu-icon' fontSize = 'large' onClick = {clickHandler}/>
            <CloseIcon id = 'close-icon' fontSize = 'large' onClick = {clickHandler} />
            <Links/>
        </div>
    </div>
    <div id = 'hamburger-menu'>
              <ul>
                  <li>Portfolio</li>
                  <li>Resume</li>
                  <li>Blog</li>
                  <li>Contact</li>
              </ul>
    </div>
    </div>
  )
}

export default Navbar