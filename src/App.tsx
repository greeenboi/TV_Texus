
import './App.css'

function App() {
  

  return (
    <main className='flex flex-col items-center'>
      <div className='bg-[#1e1e1e] w-screen absolute top-0 h-12'>
        <button className='right-1 bg-green-500 text-normal'>Buy Now</button>
      </div>
      <nav className='absolute top-2 flex flex-row my-12 gap-6 items-center'>
        <div className='flex items-center gap-1'>
          <img className='w-8' src="/chat.png" alt="" />
          <h3 className='text-2xl font-bold text-blue-900'>Fluxo</h3>
        </div>
        <button className='text-md font-thin bg-white text-gray-950'>Home</button>
        <button className='text-md font-thin bg-white text-gray-950'>Pages <span className='rotate-90'>{`>`}</span></button>
        <button className='text-md font-thin bg-white text-gray-950'>Sections <span className='rotate-90'>{`>`}</span></button>
        <button className='text-md font-thin bg-white text-gray-950'>Docs <span className='rotate-90'>{`>`}</span></button>
        <button className='text-md font-normal text-white w-fit h-fit px-2 py-1 bg-purple-800 shadow-md'>Buy Now</button>
      </nav>
      <section className='h-full w-screen flex flex-row gap-4 items-center px-12'>
        <div className='flex flex-1 flex-col gap-4 w-fit ml-12 text-black'>
          <h1 className=' font-sans font-light w-[400px] text-left'>Become Social Media Marketing Experts</h1>
          <h3 className=' font-sans font-normal w-[400px] text-xl text-left text-gray-600'>We make it easy for businesses Lorem Ipsum dolor </h3>
          <button className=' bg-purple-600 p-2 rounded-sm w-fit shadow-sm shadow-black hover:shadow-md '>Get Started Now</button>
          
        </div>
        <div className='flex-1 flex items-center justify-center'>
          <img className='w-96 h-auto hover:scale-110 transition-all ease-linear duration-150 hover:rotate-6' src="/social.png" alt="social" />
        </div>
          
      </section>
    </main>
  )
}

export default App
