import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='w-full '>
            <nav className='py-2 bg-[whitesmoke] w-full text-lg text-gray-800 ml-2 basic-regular '>
                <ul className='flex flex-wrap w-full '>
                    <div className="py-2 flex justify-start w-[33%] ">
                        <img src="" alt="" /><a href="" className='text-2xl ml-4'>ITIpathfinder.com</a>
                    </div>
                    <div className="flex gap-4 font-source-serif-4 items-center w-[33%] justify-center ">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/cources">Course</Link></li>
                        <li><Link to="/contact">Contat</Link></li>
                    </div>
                    <div className="flex gap-3 justify-end items-center w-[33%] ">
                        <li className='text-center text-grey-600 bg-[#3becb9] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-[#3becb9] dark:hover:bg-green-400 focus:outline-none dark:focus:ring-blue-800'><a href="">Get Started</a></li>
                        <li className='text-center text-grey-600 bg-white hover:bg-[whitesmoke] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-white dark:hover:bg-[whitesmoke] focus:outline-none dark:focus:ring-blue-800 border border-[#3becb9]'><a href="">Sign in</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
export default Navbar