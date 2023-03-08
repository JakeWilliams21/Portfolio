import React, { useEffect} from 'react'
import portrait from '../images/Portrait.webp'

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
            
        })
    })

  return (
    <div id = 'about' className = 'about vertical main hide'>
        <div className = 'about-left'>
            <img id = 'portrait'  src = {portrait} alt = 'Jake'/>
        </div>
        <div className = 'about-right'>
            <span className = 'about-title'>Hi, I'm Jake.</span>
            <span className = 'about-paragraph'>I'm a full stack web developer based in Columbus, Ohio, with a passion for science-fiction, music, and design. I love creating applications inspired by these interests using a variety of technologies like HTML, CSS, and JavaScript, as well as frameworks like React and Node. When I'm not coding, I am attending concerts, reading sci-fi novels, and designing visually appealing applications. Let's collaborate to bring your ideas to life!</span>
        </div>

    </div>
  )
}

export default About