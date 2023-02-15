import React from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const styles = {
    largeIcon: {
        width: 120,
        height: 120,
    }
}

const Home = () => {
  return (
    <div className = 'home-page'>
        <div className = 'home-page-top'>
            <div className = 'home-page-left'>
                <div className = 'home-title'>
                    <span>Full stack</span>
                    <span>Developer</span>
                </div>
                <div className = 'home-socials'>
                    <GitHubIcon className = 'github' fontSize='inherit'/>
                    <LinkedInIcon fontSize='inherit'/>
                </div>
            </div>
            <div className = 'home-page-right'>
                <div>
                    <span>I am a recent college graduate with a passion for learning, namely learning to code! I can create a intuitive and responsive website tailored to your needs.</span>
                </div>
            </div>
        </div>
        <div className = 'home-page-bottom'>
        </div>
    </div>
  )
}

export default Home