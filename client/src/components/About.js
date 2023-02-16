import React, {useState, useEffect} from 'react'
import { useScrollHandler } from './scroll'

const About = () => {

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const position = window.scrollY
            const opacity = position * .004
            console.log(opacity);

            document.getElementById('App').style.backgroundColor = `rgba(24, 24, 24, ${opacity.toString()})`
            if (position === 0) {
                document.getElementById('navbar').style.backdropFilter = 'none'
            } else {
                document.getElementById('navbar').style.backdropFilter = 'blur(2px)'
            }
            
        })
    })

  return (
    <div id = 'about' className = 'about'>About</div>
  )
}

export default About