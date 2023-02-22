import React from 'react'
import website from '../images/website.jpg'

const Preview = (props) => {
  return (
    <div className = 'preview vertical'>
      <div className = 'preview-photo'>
        <img src = {website} alt = 'project'/>
      </div>
      <div className = 'description'>
        <span>Title</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
      </div>
    </div>
  )
}

export default Preview