import React from 'react'
import { Link } from 'react-router-dom' // Ensure this is installed

const Navbar = () => {
    return (
        <nav className="p-4 bg-white shadow-sm px-5 sticky top-0 z-50">
            <div className='flex items-center justify-between'>
                
                
                <Link to="/" className='flex items-center gap-3'>
                    <div className='rounded-full bg-red-500 h-10 w-10 flex items-center justify-center text-white font-bold cursor-pointer'>
                        B
                    </div>
                    <h1 className="text-xl font-bold">Ben</h1>
                </Link>
        
                <div className='flex items-center gap-12'>
                    <div className='flex items-center gap-8 text-black font-medium'>
                        
                        <Link to="/about" className="hover:text-blue-600 transition">About me</Link>
                        <Link to="/skills" className="hover:text-blue-600 transition">Skills</Link>
                        <Link to="/portfolio" className="hover:text-blue-600 transition">Portfolio</Link>
                    </div>

                    <Link to="/contact" className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-gray-800 transition">
                        CONTACT ME
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar