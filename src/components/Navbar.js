import React from 'react'
import logo from '../images/logo.svg'

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 items-center py-2 px-10 bg-slate-100 md:sticky md:top-0 md:left-0'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className=''>
                <ul className='flex flex-row md:space-x-7 space-x-3 text-md md:text-lg font-semibold sm:tracking-wider relative'>
                    <li className='cursor-pointer hover:text-[#ef1053]'><a href="#">Home</a></li>
                    <li className='cursor-pointer hover:text-[#ef1053]'><a href="#myCard2">Features</a></li>
                    <li className='cursor-pointer hover:text-[#ef1053]'><a href="#service">Service</a></li>
                    <li className='cursor-pointer hover:text-[#ef1053]'><a href="#myCard">Blog</a></li>
                    <li className='cursor-pointer hover:text-[#ef1053]'><a href="#newsletter">Newsletter</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
