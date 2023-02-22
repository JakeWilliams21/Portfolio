import React from 'react'
import website from '../images/website.jpg'

const Preview = (props) => {
  return (
    <div className = 'preview vertical'>
      <div className = 'preview-photo'>
        <img src = {props.image} alt = {props.title}/>
      </div>
      <div className = 'description'>
        <span>{props.title}</span>
        <span>{props.description}</span>
      </div>
    </div>
  )
}

export default Preview