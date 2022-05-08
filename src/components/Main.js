import React from 'react'
import img from '../images/hero-banner.png'

const Main = () => {
    return (
        <div className='md:flex md:flex-row-reverse py-10 bg-slate-100'>
            <div className='md:w-1/2'>
                <img src={img} className='' alt="" />
            </div>
            <div className='flex flex-col justify-center md:items-start items-center text-center md:text-left md:ml-12 xl:ml-24 md:w-1/2'>
                <h2 className='xl:text-5xl md:text-4xl text-3xl font-bold text-[#17225b] tracking-wider 2xl:w-[70%] xl:w-[75%] lg:w-[80%] md:[85%] w-[70%]'>Secure IT solutions for a more secure environment</h2>
                <p className='font-light text-slate-700 mt-5 tracking-wider 2xl:w-[70%]  xl:w-[75%] lg:w-[80%] md:[85%] w-[70%]'>Velit hendrerit sit auctor tempor sem. Congue mi tempor condimentum felis arcu, non cursus. Nulla pharetra porttitor sed platea arcu et leo odio.</p>
                <div className='my-7 bg-[#ff085a] text-white font-semibold text-lg px-3 py-2 rounded-lg hover:bg-purple-700'>
                    <button >
                        Get Started Now
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Main
