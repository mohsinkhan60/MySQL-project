import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className='w-full py-2 bg-slate-950'>
            <nav className=" w-full lg:w-[80%] mx-auto flex items-center justify-between">
                <Link to="/" className="text-xl cursor-pointer font-bold text-white">
                    Love Days
                </Link>

                <ul className="hidden md:flex space-x-3">
                    <li>
                        <a to="/" className="text-gray-200 hover:text-gray-400 transition-all duration-300 border-b border-b-transparent hover:border-b-orange-400">Home</a>
                    </li>
                    <li>
                        <a to="/" className="text-gray-200 hover:text-gray-400 transition-all duration-300 border-b border-b-transparent hover:border-b-orange-400">About</a>
                    </li>
                    <li>
                        <a to="/" className="text-gray-200 hover:text-gray-400 transition-all duration-300 border-b border-b-transparent hover:border-b-orange-400">Services</a>
                    </li>
                    <li>
                        <a to="/" className="text-gray-200 hover:text-gray-400 transition-all duration-300 border-b border-b-transparent hover:border-b-orange-400">Contact</a>
                    </li>
                </ul>
            </nav>

    </header>
  )
}

export default Header