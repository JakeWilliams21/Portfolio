import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Buffer } from 'buffer'
import { useParams } from 'react-router'
import Navbar from './Navbar'
import '../components/stylesheets/ProjectView.css'


const ProjectView = () => {
    const [project, setProject] = useState([])

    let { id } = useParams()

    useEffect(() => {
        axios.get(`/api/project/${id}`).then((response) => {
          setProject(response.data[0]);
        })
      }, [id])

  return (
    <div className = 'project-page'>
        <Navbar/>
        <div className = 'project-div'>
        <div className = 'project-photo'>
        {project.image && (
            <img src = {`data:${project.image.contentType};base64,${Buffer.from(project.image.data).toString('base64')}`} alt = {project.title}/>
            )} 
        </div>
        <div className = 'project-details'>
            <span className = 'title'>{project.title}</span>
            <span className = 'description'>{project.description}</span>
            <div className = 'skill-container'>
                <ul>
                    {project.skills?.map((skill, index) => (
                        <li key = {index}>
                            <div className = 'skill'>
                                <span>{skill}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default ProjectView