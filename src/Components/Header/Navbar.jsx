import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="w-full p-2 ">
            <nav className="bg-whitesmoke text-gray-800 py-2 px-2 sm:px-6 lg:px-4 bg-green-100 rounded-2xl">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="flex items-center flex-shrink-0 mr-6">
                            <img src="/logo2.png" alt="" className="h-8 w-auto sm:h-10" />
                            <a href="" className="text-2xl ml-2 font-semibold source-serif-4">ITIpathfinder.com</a>
                        </div>
                        <div className="block lg:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-400 hover:text-black hover:border-black">
                                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                        <div className={`w-full flex-grow lg:flex lg:items-center  lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                            <div className="text-sm lg:flex-grow font-source-serif-4 lg:text-base">
                                <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 mr-6 font-medium transition duration-300 transform hover:translate-y-[-2px] border-b-2 border-transparent hover:border-gray-600">Home</Link>
                                <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 mr-6 font-medium transition duration-300 transform hover:translate-y-[-2px] border-b-2 border-transparent hover:border-gray-600">About</Link>
                                <Link to="/courses" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 mr-6 font-medium transition duration-300 transform hover:translate-y-[-2px] border-b-2 border-transparent hover:border-gray-600">Course</Link>
                                <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-medium transition duration-300 transform hover:translate-y-[-2px] border-b-2 border-transparent hover:border-gray-600">Contact</Link>
                            </div>
                            <div className="mt-4 lg:mt-0 flex gap-2">
                                {/* <Link to="/qone" className="inline-block text-sm px-4 py-2 leading-none rounded-full border-2 border-[#3becb9] text-gray-800 font-medium hover:bg-[#3becb9] hover:text-white transition duration-300 shadow-md hover:shadow-lg">Get started</Link> */}
                                <Link to="" className="inline-block text-sm px-4 py-2 leading-none rounded-full border-2 border-[#3becb9] text-gray-800 font-medium hover:bg-[#3becb9] hover:text-white transition duration-300 shadow-md hover:shadow-lg">Log Out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Navbar