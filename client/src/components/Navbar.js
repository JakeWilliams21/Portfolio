import React, { useEffect } from 'react'
import '../App.css'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    useEffect(() => {

    })

  return (
    <div id = 'navbar' className = 'navbar-div'>
        <div className = 'navbar-left'>
            <h2>Jake Williams</h2>
        </div>
        <div className = 'navbar-right'>
            <MenuIcon id = 'menu-icon' fontSize = 'large'/>
            <ul id = 'navbar-links'>
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