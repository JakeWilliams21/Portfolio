import React from 'react'

const Footer = () => {
  return (
    <div className = 'footer vertical'>
      <div className = 'footer-left'>
        <span>Contact</span>
        <span>Me</span>
      </div>
      <hr />
      <div className = 'footer-right vertical'>
        <div className = 'footer-contact'>
          <span>Call Me</span>
          <span>Email Me</span>
        </div>
        <div id = 'vertical-rule' className = 'vertical-rule remove hide'></div>
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