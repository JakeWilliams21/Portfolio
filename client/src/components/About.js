import React, {useState, useEffect} from 'react'
import frame from '../images/frame.png'
import portrait from '../images/Portrait.png'
import $ from 'jquery'

const About = () => {

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const position = window.scrollY
            const opacity = position * .0015
            document.documentElement.dataset.scroll = window.scrollY; 
            document.getElementById('content').style.backgroundColor = `rgba(24, 24, 24, ${opacity.toString()})`


            if (position === 0) {
                document.getElementById('navbar').style.backdropFilter = 'none'
            } else {
                document.getElementById('navbar').style.backdropFilter = 'blur(3px)'
            }

            if($(window).scrollTop() + $(window).height() > $(document).height() - 400) {
                $('.footer').addClass('footer-fade')
            }

            if (position > 900) {
                $('#projects-hr').addClass('hr-spread')
            }

            if(position > 200) {
                $('#about').removeClass('pre-fade')
                $('#about').addClass('fade-in')
            }
            
        })
    })

  return (
    <div id = 'about' className = 'about vertical pre-fade'>
        <div className = 'about-left'>
            <img id = 'portrait'  src = {portrait} alt = 'Jake'/>
        </div>
        <div className = 'about-right'>
            <span className = 'about-title'>Hi, I'm Jake.</span>
            <span className = 'about-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>

    </div>
  )
}

export default About