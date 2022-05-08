import React from 'react'

const CardLayout2 = (props) => {
    return (
        <div className='w-[250px] px-4 py-4 my-4'>
            <div>
                <img src={props.icon} alt="" />
            </div>
            <div>
                <h3 className='text-2xl font-semibold mt-3'>{props.name}</h3>
                <p className='mt-2'>{props.desc}</p>
                <div className='flex flex-row text-red-600 font-semibold cursor-pointer my-2 hover:text-slate-800'>
                    {props.btnName}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-[6px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CardLayout2