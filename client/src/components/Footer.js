import React from 'react'

const Footer = () => {
  return (
    <div id = 'footer' className = 'footer vertical footer-before'>
      <div className = 'footer-left'>
        <span>Contact</span>
        <span>Me</span>
      </div>
      <hr />
      <div className = 'footer-right vertical'>
        <div className = 'footer-contact'>
          <span><a href = 'tel:6363996399'>Call Me</a></span>
          <span><a href = 'mailto:jakewilliams530@gmail.com'>Email Me</a></span>
          <span><a href = 'https://www.linkedin.com/in/jakewilliams530'>Message Me</a></span>
        </div>
        <div id = 'vertical-rule' className = 'vertical-rule remove hide'></div>
        <div className = 'footer-socials'>
          <span><a href = 'https://github.com/JakeWilliams21'>GitHub</a></span>
          <span><a href = 'https://dribbble.com/jakew21/'>Dribble</a></span>
          <span><a href = 'https://pin.it/6KE4vj6'>Pintrest</a></span>
        </div>
      </div>
    </div>
  )
}

export default Footer