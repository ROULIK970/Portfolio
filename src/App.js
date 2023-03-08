import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'



const App = () =>{
    return(
      <div >
         <Nav/>
         <Home id='home'/>
         <About id='about'/>
         <Contact id='contact'/>
      </div>
    )
}

export default App