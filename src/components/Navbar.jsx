import React from 'react';



function Navbar() {
  return (
    <div>
        
        <nav className='flex fixed z-40 inset-x-0 top-0 justify-center m-4 space-x-1 items-center mt-8 md:space-x-1 '>
            <div className='text-white bg-purple-900 h-12 py-3 px-4 rounded-l-lg shadow-2xl hover:scale-110 transition duration-700 ease-in-out'>Logo</div>
            <div className='bg-indigo-900 bg-opacity-50 w-72 h-12 flex justify-center items-center space-x-8 rounded-r-lg shadow-2xl hover:scale-105 transition duration-700 ease-in-out'>
                
                <div className=''>
                  <h1 className='text-white hover:bg-purple-900 font-bold py-1 px-2 hover:rounded-md'>Home</h1>
                  </div>
                <div className=''>
                  <h1 className='text-white hover:bg-purple-900 font-bold py-1 px-2 hover:rounded-md'>Serviços</h1>
                </div>
                <div className=''>
                  <h1 className='text-white hover:bg-purple-900 font-bold py-1 px-2 hover:rounded-md'>Sobre</h1>
                </div>
                
               
            </div>
           
        </nav>

    </div>
  );
}

export default Navbar;