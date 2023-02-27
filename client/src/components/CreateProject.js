import React, { useState } from "react";
import "./stylesheets/CreateProject.css";
import axios from "axios";
import Navbar from "./Navbar";
import Cookies from "js-cookie";
import requireAuth from "./requireAuth";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState([]);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const token = Cookies.get('jwt_token')

  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSkillsChange = (event) => {
    const newSkills = event.target.value.split(",");
    setSkills(newSkills);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("skills", skills);
      formData.append("image", image);
      formData.append("url", url);
  
      axios.post('/api/projects', formData).then((response) => {
        console.log(response.data);
      })
      console.log({ title, description, skills, image, url });
      alert('Submitted!')
    
  };

  return (
    <div id = 'create-project-page'>
    <Navbar/>
      <div className="create-project-container vertical">
      <form id = 'project-form' onSubmit={handleSubmit}>
      <span>Create Project</span>
      <div className = 'form-inputs vertical'>
        <div>
            <input
              type="text"
              id="title"
              placeholder = 'Title'
              value={title}
              onChange={handleTitleChange}
            />

            <textarea
              id="description"
              value={description}
              placeholder = 'Put your description here...'
              onChange={handleDescriptionChange}
            ></textarea>
        </div>
          
          <div>
            <input
              type="text"
              id="skills"
              value={skills.join(",")}
              placeholder = 'Skill1, Skill2...'
              onChange={handleSkillsChange}
            />

            <input type="file" id="image" onChange={handleImageChange} />

            <input placeholder = 'Project URL' type="text" id="url" value={url} onChange={handleUrlChange} />
          </div>
      </div>
      

        <button className = 'project-submit' type="submit">Submit</button>
      </form>
    </div>
    </div>
    
  );
};

export default requireAuth(CreateProject);
