import React from 'react';
import Nav from './components/nav';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <>
    <div className="App bg-slate-500">
      <Nav/>
   </div>
   <div className='flex flex-col items-center p-28 text-black mt-8'>

<p className=' text-5xl font-bold'> We Design</p>
<p className='text-5xl font-bold' > We Develop</p>
<div>
          <p className="inline  font-bold text-5xl">We </p>
          <p className="inline text-red-500 font-bold text-5xl">Inspir</p>
        </div>
        </div>
      <div className=' p-6 bg-slate-100'> 
        
      <div className=' flex flex-col rounded-t-2xl items-center p-32 bg-red-800'>
        "The 2nd AMS site"
      </div>
      <div className=' flex flex-col rounded-xl p-32 bg-black mt-3 text-white'>
        "The 2nd AMS site"
      </div>
      </div>
      
          <div className=' p-6 bg-white grid grid-cols-2'> 
          <div className=' mr-2 p-8 border-2 border-rose-500'>
            pkk
          </div>
          <div className=' p-8 border-2 border-rose-500'>
            pkk
          </div>
          <div className=' mt-2 mr-2 p-8 border-2 border-rose-500'>
            pkk
          </div>
          <div className=' mt-2 p-8 border-2 border-rose-500'>
            pkk
          </div>
          </div>
   <Footer/>
   </>
  );
}

export default App;
