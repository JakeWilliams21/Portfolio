import React, { useState, useEffect } from 'react'
import Preview from './Preview'
import axios from 'axios'
import { Buffer } from 'buffer'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('https://jake-williams-portfolio.herokuapp.com/api/projects').then((response) => {
      setProjects(response.data);
    })
  }, [])

  return (
    <div id = 'projects'>
      <span className = 'title main hide'>My Work</span>
      <hr id = 'projects-hr'/>
      <ul id = 'works' className = 'works'>
        {projects && projects.map((project) => (
          <li className = 'preview' key = {project._id}>
            <Preview
              title = {project.title}
              description = {project.description}
              image = {`data:${project.image.contentType};base64,${Buffer.from(project.image.data).toString('base64')}`} 
              id = {project._id}
              skills = {project.skills}
              url = {project.url}
              github = {project.githubUrl}
              />
              
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects