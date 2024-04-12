import { ChevronDown } from 'lucide-react';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='absolute top-2 flex flex-row my-12 gap-6 items-center justify-between w-9/12'>
        <Link to="/" className='flex items-center gap-1'>
          <img className='w-8' src="/chat.png" alt="" />
          <h3 className='text-2xl font-bold text-blue-900'>Fluxo</h3>
        </Link>
        <div className='flex flex-row items-center gap-2'>
          <Link to="/home"><button className='text-md font-light bg-white text-gray-950'>Home</button></Link>
          <button className='text-md flex flex-row gap-1 items-center font-light bg-white text-gray-950'>Pages <ChevronDown /></button>
          <button className='text-md flex flex-row gap-1 items-center font-light bg-white text-gray-950'>Sections <ChevronDown /></button>
          <button className='text-md flex flex-row gap-1 items-center font-light bg-white text-gray-950'>Docs <ChevronDown /></button>
          <Link to="/login">
            <button className='text-md font-normal text-white w-fit h-fit px-2 py-1 bg-purple-800 rounded-sm shadow-sm shadow-black hover:shadow-md'>Sign UP</button>
          </Link>
          <Link to="/login">
            <button className='text-md font-normal rounded-sm  w-fit h-fit px-2 py-1 bg-white text-black'>Login</button>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar