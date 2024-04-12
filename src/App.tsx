import { Leaf } from "lucide-react"
import './App.css'
import { MouseEventHandler, useEffect, useState } from 'react';
import Navbar from './Navbar';

function App() {
  
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })

  const handleMouseMove = (event :  MouseEventHandler<HTMLDivElement>) => {
    //@ts-expect-error

      setCursorPosition({ top: event.screenY - 90, left: event.screenX - 90 });
  }

  useEffect(() => {
    //@ts-ignore
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      //@ts-ignore
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <main className='flex flex-col items-center'>
      <div
        //@ts-ignore
        onMouseMove={handleMouseMove}
        className={` bg-green-500 pointer-events-none blur-3xl w-48 h-48 rounded-full absolute z-[1000] `}
        style={{position: 'absolute', ...cursorPosition }}
      />
      <div className='bg-[#1e1e1e] w-screen absolute top-0 h-12 flex flex-row items-center justify-between px-16 '>
        <p className="flex gap-2 text-green-300"><Leaf />EnvatoMarket</p>
        <button className='right-1 bg-green-500 text-normal'>Buy Now</button>
      </div>
      <Navbar />
      <section className='h-full w-screen flex flex-row gap-4 items-center px-36 my-12'>
        <div className='flex flex-1 flex-col gap-4 w-full ml-12 text-black'>
          <h1 className=' font-sans font-light w-[400px] text-left'>Become Social Media Marketing Experts</h1>
          <h3 className=' font-sans font-normal w-[400px] text-xl text-left text-gray-600'>We make it easy for businesses Lorem Ipsum dolor </h3>
          <button className=' bg-purple-600 text-white p-2 rounded-sm w-fit shadow-sm shadow-black hover:shadow-md '>Get Started Now</button>
        </div>
        <div className=' flex flex-1 flex-row w-full translate-y-12 -translate-x-32 items-center justify-center'>
          <img className='w-96 h-auto hover:scale-110 transition-all ease-linear duration-300 ' src="/social.png" alt="social" />
        </div>
          
      </section>
      <section className='h-full w-screen flex flex-row gap-4 items-center px-36 my-12'>
        <div className=' flex flex-1 flex-row w-full translate-y-12 -translate-x-32 items-center justify-center'>
          <img className='w-96 h-auto hover:scale-110 transition-all ease-linear duration-300 ' src="/Silver.png" alt="social" />
        </div>
        <div className='flex  flex-1 flex-col gap-4 w-full ml-12 text-black'>
          <h1 className=' font-sans font-light w-[400px] text-left'>Express your creativity</h1>
          <h3 className=' font-sans font-normal w-[400px] text-xl text-left text-gray-600'>Lorem ipsum dolor sit amet consectetur elit. Nulla enim laborum, nam quasi error eius nihil! Iusto tenetur, nihil dicta sequi</h3>
          <button className=' bg-purple-600 text-white p-2 rounded-sm w-fit shadow-sm shadow-black hover:shadow-md '>Know More!</button>
        </div>
          
      </section>
      
    </main>
  )
}

export default App
