import React from 'react';
import Navbar from '../components/Navbar';



function Intro() {
  return (
    <div className="h-all">
      <Navbar />
        <div className='mt-28 flex flex-col gap-2 md:flex-row md:justify-items-center md:items-center md:space-x-10'>
          <div className='mx-4'>
            <h1 className=' font-kanit text-5xl font-extrabold text-white md:text-7xl md:mt-10 animate-pulse'
            >Obtenha <br /> engenharia de <br /> software <br /> especializada <br /> quando precisar
            </h1>
            <h3 className='text-white font-kanit italic text-md font-normal mt-2'>Nós construimos por ti o melhor</h3>
          </div>
         
          <div>
            <img className='animate-pulse' src="./img/eng.png" alt="" srcset="" />
          </div>
        </div>
       
     
    </div>
  )
}

export default Intro;