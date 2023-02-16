import React from 'react'
import '../App.css'

const Navbar = () => {


  return (
    <div id = 'navbar' className = 'navbar-div'>
        <div className = 'navbar-left'>
            <h2>Jake Williams</h2>
        </div>
        <div className = 'navbar-right'>
            <ul>
                <li>Portfolio</li>
                <li>Resume</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar