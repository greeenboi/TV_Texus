import Navbar from "./Navbar"

function Home() {
  return (
    <main className="flex flex-col mt-36 items-center justify-start w-full h-screen overflow-y-auto ">
      {/* <img src="/macbook.png" alt="apple" className="w-[1080px] object-cover z-0" /> */}
      <div className="background-image mt-48 w-full self-center" />
      <Navbar />
      <section className="flex flex-col items-center z-10 -translate-y-96  bg-[#090909] backdrop-blur-md bg-opacity-60 w-10/12 h-fit mt-[1000px]  gap-12 rounded-md border-black border-2 p-12">
        <h1 className='text-4xl font-bold text-blue-500 text-center'>Who are we?</h1>
        <div className='flex flex-row justify-evenly items-center'>
            <img src="" alt="" />
            <p className="font-light text-slate-200">Welcome to Fluxo, your dynamic social hub! Connect, share, and engage with ease. Discover vibrant communities and trending topics. Join us in shaping tomorrow's conversations</p>
        </div>
        <h4 className="text-3xl font-semibold text-blue-500 text-center">User Reviews</h4>
        <div className="flex flex-wrap w-11/12 justify-around items-center gap-4">
            <div className="flex flex-row-reverse justify-around items-center gap-4 border-2 rounded-md border-slate-900 w-96 px-2 py-1 h-fit">
                <p className="text-gray-200">Fluxo's sleek interface makes navigating a breeze. Love how it brings together diverse voices and keeps me updated!</p>
                <div className="flex flex-col justify-between items-center ">
                    <img src="/Ellipse-1.png" alt="" />
                    <p className="text-gray-300">Sarah</p>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-around items-center gap-4 border-2 rounded-md border-slate-900 w-96 px-2 py-1 h-fit">
                <p className="text-gray-200">Fluxo's sleek interface makes navigating a breeze. Love how it brings together diverse voices and keeps me updated!</p>
                <div className="flex flex-col justify-between items-center ">
                    <img src="/Ellipse-2.png" alt="" />
                    <p className="text-gray-300">Sarah</p>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-around items-center gap-4 border-2 rounded-md border-slate-900 w-96 px-2 py-1 h-fit">
                <p className="text-gray-200">Fluxo's sleek interface makes navigating a breeze. Love how it brings together diverse voices and keeps me updated!</p>
                <div className="flex flex-col justify-between items-center ">
                    <img src="/Ellipse-3.png" alt="" />
                    <p className="text-gray-300">Sarah</p>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-around items-center gap-4 border-2 rounded-md border-slate-900 w-96 px-2 py-1 h-fit">
                <p className="text-gray-200">Fluxo's sleek interface makes navigating a breeze. Love how it brings together diverse voices and keeps me updated!</p>
                <div className="flex flex-col justify-between items-center ">
                    <img src="/Ellipse-4.png" alt="" />
                    <p className="text-gray-300">Sarah</p>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-around items-center gap-4 border-2 rounded-md border-slate-900 w-96 px-2 py-1 h-fit">
                <p className="text-gray-200">Fluxo's sleek interface makes navigating a breeze. Love how it brings together diverse voices and keeps me updated!</p>
                <div className="flex flex-col justify-between items-center ">
                    <img src="/Ellipse-5.png" alt="" />
                    <p className="text-gray-300">Sarah</p>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-around items-center gap-4 border-2 rounded-md border-slate-900 w-96 px-2 py-1 h-fit">
                <p className="text-gray-200">Fluxo's sleek interface makes navigating a breeze. Love how it brings together diverse voices and keeps me updated!</p>
                <div className="flex flex-col justify-between items-center ">
                    <img src="/Ellipse-6.png" alt="" />
                    <p className="text-gray-300">Sarah</p>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-around items-center gap-4 border-2 rounded-md border-slate-900 w-96 px-2 py-1 h-fit">
                <p className="text-gray-200">Fluxo's sleek interface makes navigating a breeze. Love how it brings together diverse voices and keeps me updated!</p>
                <div className="flex flex-col justify-between items-center ">
                    <img src="/Ellipse.png" alt="" />
                    <p className="text-gray-300">Sarah</p>
                </div>
            </div>
            
        </div>
      </section>
    </main>
  )
}

export default Home