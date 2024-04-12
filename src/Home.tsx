import Navbar from "./Navbar"

function Home() {
  return (
    <main className="flex flex-col mt-36 items-center justify-start w-full h-screen overflow-y-auto ">
      {/* <img src="/macbook.png" alt="apple" className="w-[1080px] object-cover z-0" /> */}
      <div className="background-image mt-48 w-full self-center" />
      <Navbar />
      <section className="z-10 -translate-y-96  bg-[#090909] backdrop-blur-md bg-opacity-60 w-10/12 h-fit mt-[1000px]  gap-12 rounded-md border-black border-2 p-12">
        <h1 className='text-4xl font-bold text-blue-900 text-center'>Who are we?</h1>
        <div className='flex flex-row justify-evenly items-center'>
            <img src="" alt="" />
            <p className="font-light text-slate-200">Welcome to Fluxo, your dynamic social hub! Connect, share, and engage with ease. Discover vibrant communities and trending topics. Join us in shaping tomorrow's conversations</p>
        </div>
        <h4 className="text-3xl font-semibold text-blue-500 text-center">User Reviews</h4>
        <div className="flex flex-wrap justify-around items-center gap-4">
            <div className="flex flex-col justify-around items-center gap-2 border-2 rounded-md border-slate-900 w-[200px] h-[200px]">
                <p className="text-white">Fluxo's sleek interface makes navigating a breeze. Love how it brings together diverse voices and keeps me updated!</p>
                <div className="flex flex-row justify-between items-center">
                    <img src="" alt="" />
                    <p className="text-white">Sarah</p>
                </div>
            </div>
            <div className="flex flex-col justify-around items-center gap-2 border-2 rounded-md border-slate-900 w-[200px] h-[200px]">
                <p className="text-white">As a content creator, Fluxo's engagement tools are invaluable. The audience interaction is phenomenal, and the analytics are insightful.</p>
                <div className="flex flex-row justify-between items-center">
                    <img src="" alt="" />
                    <p className="text-white">Alex</p>
                </div>
            </div>
            <div className="flex flex-col justify-around items-center gap-2 border-2 rounded-md border-slate-900 w-[200px] h-[200px]">
                <p className="text-white">Fluxo fosters meaningful discussions. I appreciate the respectful atmosphere and the ability to connect with like-minded individuals effortlessly.</p>
                <div className="flex flex-row justify-between items-center">
                    <img src="" alt="" />
                    <p className="text-white">Emily</p>
                </div>
            </div>
            <div className="flex flex-col justify-around items-center gap-2 border-2 rounded-md border-slate-900 w-[200px] h-[200px]">
                <p className="text-white">Fluxo's personalized feed keeps me hooked. It's like it knows what I want before I do! Great for discovering new interests.</p>
                <div className="flex flex-row justify-between items-center">
                    <img src="" alt="" />
                    <p className="text-white">Jason</p>
                </div>
            </div>
            <div className="flex flex-col justify-around items-center gap-2 border-2 rounded-md border-slate-900 w-[200px] h-[200px]">
                <p className="text-white">Fluxo's community vibe is refreshing. Whether it's sharing hobbies or discussing world events, I always feel connected and supported.</p>
                <div className="flex flex-row justify-between items-center">
                    <img src="" alt="" />
                    <p className="text-white">Sophia</p>
                </div>
            </div>
            <div className="flex flex-col justify-around items-center gap-2 border-2 rounded-md border-slate-900 w-[200px] h-[200px]">
                <p className="text-white">Fluxo's privacy controls give me peace of mind. Finally, a social platform that prioritizes user security without sacrificing functionality. Kudos!</p>
                <div className="flex flex-row justify-between items-center">
                    <img src="" alt="" />
                    <p className="text-white">Max</p>
                </div>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Home