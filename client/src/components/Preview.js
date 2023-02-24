import React from 'react'

const Preview = (props) => {
  return (
    <div className = 'preview vertical'>
      <div className = 'preview-photo'>
        <a href = {`/project/${props.id}`} className = 'preview-link'><img src = {props.image} alt = {props.title}/></a> 
      </div>
      <div className = 'description'>
        <span>{props.title}</span>
        <span>{props.description}</span>
      </div>
    </div>
  )
}

export default Preview