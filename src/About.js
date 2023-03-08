import React from 'react'
import Tenzies from './Images/Tenzies'
import Quiziccal from './Images/Quiziccal'
import Cart from './Images/Cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


const About = ({id}) => {

const ResumeUrl = 'https://docs.google.com/document/d/11yq1y8G-5VY8pwToA-bijTGTmmxHB9sfSmu1MOHXMZU/edit?usp=sharing'

const url = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

  return(
    <section className='about--page' id={id}>
      
        <div className='aboutPage--skills'> 
          <div className='about--skillImg'>
            <h2 className='about--skills'>My Skills </h2>
            <img className='about--img' src={url} alt='Macbook wallpaper'/>
          </div>
          <div className='about--tech'>
            <span>HTML</span>
            <span>CSS</span>
            <span>Vanilla Javascript</span>
            <span>ReactJs</span>
            <p className='resume'>Click on resume ...</p>
            <a className='ResumeLink' href={ResumeUrl}><FontAwesomeIcon className='resume--icon' id='resume' icon={faEnvelope} /></a>
          </div>
        </div>
        <div className='project--sec'>
          <h2 className='project'>Projects</h2>
          <div className='project--img'>
            <a href='https://dulcet-lolly-c5bcaa.netlify.app/'><img src={Tenzies} className='project--img'/></a>
            <a href='https://storied-halva-8391a3.netlify.app/'><img src={Quiziccal} className='project--img'/></a>
            <a href='https://tourmaline-lily-e4421b.netlify.app/'><img src={Cart} className='project--img'/></a>
          </div>
        </div>
      </section>
  )
}


export default About;