import Navbar from "./Navbar"
import { EyeOff } from "lucide-react"
// import { Minus } from 'lucide-react';

function Login() {
  return (
    <main className="bg-[#F9E6E6] flex flex-col items-center w-screen h-screen">
        <Navbar />
        <div className="flex flex-row justify-around items-center mt-48 gap-12 w-11/12">
            <div className="flex flex-1 flex-col gap-4 items-start">
                <h2 className=" font-mono font-light text-4xl text-black">Login now</h2>
                <p className="text-md text-black font-light">{`Hi, Welcome back 👋`}</p>
                <button className="bg-[#FFA3BE] hover:bg-[#ff749e] text-white gap-6 rounded-md w-11/12 h-fit flex flex-row items-center justify-center transition-all duration-75 ease-in-out"><img src="/google.png" alt="social" />Login with Google</button>
                <div className="flex items-center w-11/12 justify-center my-2">
                    <img src="/line.png" alt="line" className="w-fit"/>
                </div>
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                    <p className="font-medium text-left w-full font-sans">Email</p>
                    <input
                        type="text"
                        placeholder=" Enter your email id"
                        className="bg-[#FFA3BE] w-11/12 h-fit px-2 py-2 rounded-md text-red-600"
                    />
                </div>
                <div className="flex flex-col justify-start items-center gap-2 w-full">
                    <p className="font-medium text-left w-full font-sans">Password</p>
                    <span className="flex flex-row w-full items-center">
                        <input
                            type="password"
                            placeholder=" Enter your password"
                            className="bg-[#FFA3BE] w-11/12 h-fit px-2 py-2 rounded-md text-red-600"
                            />
                        <EyeOff size={20} className=" -translate-x-8 cursor-pointer" />
                    </span>
                </div>
                <p className="text-md text-blue-400 font-thin">Forgot Password?</p>
                <button className="w-11/12 h-fit text-white bg-[#474BCA] hover:bg-[#3d41b3] transition-all duration-75 ease-in-out font-medium ">Login</button>
            </div>
            <div className="flex flex-1 ">
                <img
                    src="/login.png"
                    alt="Login page image"
                    className="w-[450px] h-[381px] object-cover"
                />

            </div>
        </div>
    </main>
  )
}

export default Login