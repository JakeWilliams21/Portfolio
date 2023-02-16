import React from 'react'

const Footer = () => {
  return (
    <div className = 'footer'>
      <div className = 'footer-left'>
        <span>Contact</span>
        <span>Me</span>
      </div>
      <div className = 'footer-right'>
        <div className = 'footer-contact'>
          <span>Call Me</span>
          <span>Email Me</span>
        </div>
        <div className = 'vertical-rule'></div>
        <div className = 'footer-socials'>
          <span>LinkedIn</span>
          <span>Dribble</span>
          <span>Pintrest</span>
        </div>
      </div>
    </div>
  )
}

export default Footer