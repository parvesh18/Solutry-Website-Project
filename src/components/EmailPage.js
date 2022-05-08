import React from 'react'
import IMG from '../images/newsletter.png'

const EmailPage = () => {
    return (
        <div>
            <div id='newsletter' className='lg:flex lg:flex-row-reverse lg:items-center lg:justify-evenly bg-slate-200 py-5'>
                {/* image */}
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-[500px] lg:w-[750px]' src={IMG} alt="" />
                </div>
                <div className='mx-10 my-5 xl:w-[38%] lg:w[40%] p-4'>
                    <div>
                        {/* text */}
                        <p className='text-slate-600 font-bold tracking-widess my-4'>Subscribe Our Newsletter</p>
                        <h2 className='text-4xl font-bold tracking-wide text-[#17225b] my-4'>The latest resources, sent to your inbox weekly</h2>
                        {/* input */}
                        <input className='py-[6px] my-3 w-[90%] border-2 border-slate-400 rounded-lg pl-5' placeholder='Enter your email address' type="text" name="" id="" />
                    </div>
                    <div className='bg-[#eb0b52] inline-block px-3 py-2 font-bold text-white text-lg rounded-lg hover:bg-purple-600 hover:scale-110 mb-3'>
                        {/* button */}
                        <button>Subscribe Now</button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EmailPage
