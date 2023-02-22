import React from 'react'
import Preview from './Preview'

const Projects = () => {
  return (
    <div id = 'projects'>
      <span className = 'title'>My Work</span>
      <hr id = 'projects-hr'/>
      <div className = 'works'>
        <Preview />
        <Preview />
        <Preview />
      </div>
    </div>
  )
}

export default Projects