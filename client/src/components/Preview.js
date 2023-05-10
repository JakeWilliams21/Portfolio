import React from 'react'

const Preview = (props) => {
  return (
    <div className = 'main hide'>
    <div className = 'preview vertical'>
          <div className = 'preview-photo'>
            <a href = {props.url} className = 'preview-link'><img src = {props.image} alt = {props.title}/></a> 
          </div>
          <div className = 'description'>
            <span>{props.title}</span>
            <span>{props.description}</span>
            <div className = 'skills'>
              <div className = 'skill project-link'>
                <span><a href = {props.url}>Project</a></span>
              </div>
              <div className = 'skill project-link'>
                <span><a href = {props.github}>Github</a></span>
              </div>
            </div>
           
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