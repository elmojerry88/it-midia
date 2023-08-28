import React from 'react';
import Navbar from '../components/Navbar';



function Intro() {
  return (
    <div className="h-all">
      <Navbar />
        <div className='mt-16 flex flex-col gap-2 md:flex-row md:justify-items-center md:items-center md:space-x-10'>
          <div className='mx-4'>
            <h1 className=' font-kanit text-5xl font-extrabold text-white md:text-7xl md:mt-10 animate-pulse'
            >Obtenha <br /> engenharia de <br /> software <br /> especializada <br /> quando precisar
            </h1>
            <h3 className='text-white font-kanit italic text-xl font-medium mt-2 animate-pulse'>Nós nos integramos á sua equipe, 
            ajudamos você a descobrir o software que precisa <br /> e em seguida entregamos rápidamente.</h3>
            <div className='flex items-center space-x-2 mt-2 '>
              <button className='text-white bg-gradient-to-tr from-purple-800 to-indigo-900 p-2 rounded-md'>Serviços</button>
              <button className=''>Contratar</button>
            </div>
          </div>
          <div>
            <img className='animate-pulse' src="./img/eng.png" alt="" srcset="" />
          </div>
        </div>
       
     
    </div>
  )
}

export default Intro;