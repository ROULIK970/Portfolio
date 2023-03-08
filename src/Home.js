import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


const Home = ({id}) =>{

  


  return (
  <div className='home--page' id={id}>
    
    <div className='home--content'>
      <div>
        <p className='home--intro'>Hi, I am Pritish | Software Developer</p>
        <div className='homeContact--icons'>
           <a href='https://github.com/ROULIK970'><FontAwesomeIcon icon={faGithub} /></a>
           <a href='https://www.linkedin.com/in/pritish-bordoloi-a9819bbb/'><FontAwesomeIcon icon={faLinkedin} /></a>
           <a href='#resume'><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
        <p className='home--para'>Welcome to my website! As a junior web developer, I bring a fresh perspective and a passion for crafting intuitive and engaging user experiences. I believe that creativity and attention to detail are key to building successful websites, and I'm excited to collaborate with you to bring your vision to life. Let's make some magic happen!
        </p>
      </div>

      <div className='home--background'>
        <h2>Background </h2>
        <p>I am a graduate from Banaras Hindu University, with a first division in Philosophy, reflecting my dedication to academic excellence and my passion for critical thinking and exploration of complex ideas. With my strong academic record and passion for learning, I am eager to apply my skills and knowledge to a challenging and rewarding career opportunity.</p>
      </div> 
    </div>

  </div> 
  )
}


export default Home