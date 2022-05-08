import React from 'react'
import IMG1 from '../../images/service-1.png'
import IMG2 from '../../images/service-2.png'

const Service = () => {
    return (
        <div id='service'>
            {/* 1 */}
            <div className='xl:px-10 lg:px-4 2xl:px-40 bg-slate-100 py-8'>
                <div className='lg:flex lg:flex-row lg:justify-center lg:items-center'>
                    {/* image */}
                    <div className='lg:w-1/2'>
                        <img src={IMG1} alt="" />
                    </div>
                    {/* content */}
                    <div className='lg:w-1/2 ml-12'>
                        <p className='text-slate-600 font-semibold text-lg'>Services We Offer</p>
                        <h1 className='text-3xl lg:text-5xl font-bold text-[#17225b] lg:leading-[55px]'>We are here, to help your startup business</h1>
                        <div className='flex flex-row items-center px-4 py-3 mt-8 m-2 mb-6 bg-white w-[80%] rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-600 hover:text-white hover:bg-pink-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h2 className='pl-4 text-xl lg:text-2xl font-bold text-[#17225b]'>Cloud Databases</h2>
                        </div>
                        <div className='flex flex-row items-center px-3 py-4 m-2 mb-6 bg-white w-[80%] rounded-lg sm:ml-16'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-600 hover:text-white hover:bg-pink-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h2 className='pl-4 text-xl lg:text-2xl font-bold text-[#17225b]'>Website Hosting</h2>
                        </div>
                        <div className='flex flex-row items-center px-3 py-4 m-2 mb-6 bg-white w-[80%] rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-600 hover:text-white hover:bg-pink-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h2 className='pl-4 text-xl lg:text-2xl font-bold text-[#17225b]'>Remote Desktop</h2>
                        </div>
                        <div className='flex flex-row items-center px-3 py-4 m-2 mb-6 bg-white w-[80%] rounded-lg sm:ml-16'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-600 hover:text-white hover:bg-pink-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h2 className='pl-4 text-xl lg:text-2xl font-bold text-[#17225b]'>File Backup</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className='xl:px-10 lg:px-4 2xl:px-40 bg-slate-100 py-8'>
                <div className='lg:flex lg:flex-row-reverse lg:justify-center lg:items-center'>
                    {/* image */}
                    <div className='lg:w-1/2'>
                        <img src={IMG2} alt="" />
                    </div>
                    {/* content */}
                    <div className='lg:w-1/2 ml-12'>
                        <p className='text-slate-600 font-semibold text-lg'>Our Services</p>
                        <h1 className='text-3xl lg:text-5xl font-bold text-[#17225b] lg:leading-[55px]'>Best IT & technology service in your area</h1>
                        <div className='flex flex-row items-center px-4 py-3 mt-8 m-2 mb-6 bg-white w-[80%] rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-600 hover:text-white hover:bg-pink-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h2 className='pl-4 text-xl lg:text-2xl font-bold text-[#17225b]'>Design & Development</h2>
                        </div>
                        <div className='flex flex-row items-center px-3 py-4 m-2 mb-6 bg-white w-[80%] rounded-lg sm:ml-16'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-600 hover:text-white hover:bg-pink-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h2 className='pl-4 text-xl lg:text-2xl font-bold text-[#17225b]'>Android Apps Development</h2>
                        </div>
                        <div className='flex flex-row items-center px-3 py-4 m-2 mb-6 bg-white w-[80%] rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-600 hover:text-white hover:bg-pink-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h2 className='pl-4 text-xl lg:text-2xl font-bold text-[#17225b]'>Laravel Web Development</h2>
                        </div>
                        <div className='flex flex-row items-center px-3 py-4 m-2 mb-6 bg-white w-[80%] rounded-lg sm:ml-16'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-600 hover:text-white hover:bg-pink-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h2 className='pl-4 text-xl lg:text-2xl font-bold text-[#17225b]'>React Web Development</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
