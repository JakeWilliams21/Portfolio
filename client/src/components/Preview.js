import React from 'react'

const Preview = (props) => {
  return (
    <div>
    <div className = 'preview vertical'>
          <div className = 'preview-photo'>
            <a href = {props.url} className = 'preview-link'><img src = {props.image} alt = {props.title}/></a> 
          </div>
          <div className = 'description'>
            <span>{props.title}</span>
            <span>{props.description}</span>
          </div>
    </div>
    <ul>
      {props.skills?.map((skill, index) => (
          <li key = {index}>
              <div className = 'skill'>
                  <span>{skill}</span>
              </div>
          </li>
      ))}
    </ul>
    <hr style={{'width': '20%'}}/>
    </div>
    
  )
}

export default Preview