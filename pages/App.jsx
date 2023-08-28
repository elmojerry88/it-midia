import React from 'react';
import './app.css';
import Intro from '../src/views/Intro';
import Web from '../src/views/Web';
import Mobile from '../src/views/Mobile';
import Bi from '../src/views/Bi';
import About from '../src/views/About';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';



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
