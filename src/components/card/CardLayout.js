import React from 'react'

const CardLayout = (props) => {
    return (
        <div className='w-[350px] pb-3 my-5 rounded-xl shadow-2xl cursor-pointer'>
            <div>
                <img className='w-full' src={props.img} alt="" />
            </div>
            <div className='px-3'>
                <div className='flex flex-row space-x-6 mt-4'>
                    <div className='flex flex-row font-thin space-x-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <p>{props.name}</p>
                    </div>
                    <div className='flex flex-row font-thin space-x-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p>{props.date}</p>
                    </div>
                </div>
                <div className='text-2xl font-bold text-[#17225b] mt-4 leading-7 mb-3 hover:text-[#e8188b] cursor-pointer'>{props.title}</div>
            </div>
        </div>
    )
}

export default CardLayout
