import React from 'react';
import './app.css';
import Intro from './views/Intro';
import Web from './views/Web';
import Mobile from './views/Mobile';
import Bi from './views/Bi';
import About from './views/About';
import Footer from './components/Footer';




function App() {
 

  return (
   
         <div>
            <Intro />
            <Bi />
            <Web/>
            <Mobile/>
            <About />
            <Footer />   
         </div>
           
       
     
        
   )
    
  
}

export default App
