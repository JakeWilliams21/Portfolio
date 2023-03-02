import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  return (
    <div className = 'home-page'>
        <div className = 'home-page-top vertical'>
            <div className = 'home-page-left'>
                <div className = 'home-title'>
                    <span>Full stack</span>
                    <span>Developer</span>
                </div>
                <div className = 'home-socials'>
                    <a aria-label = 'Github' href = 'https://github.com/JakeWilliams21'><GitHubIcon alt = 'Github'fontSize = 'large'/></a>
                    <a aria-label = 'LinkedIn' href = 'https://www.linkedin.com/in/jakewilliams530'><LinkedInIcon alt = 'LinkedIn' fontSize = 'large'/></a>
                </div>
            </div>
            <div className = 'home-page-right'>
                <div>
                    <span>I am a recent college graduate with a passion for learning, namely learning to code! I can create interactive and responsive websites tailored to your needs.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home