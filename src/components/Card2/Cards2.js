import React from 'react'
import CardLayout2 from './CardLayout2'
import icon1 from '../../images/features-icon-1.png'
import icon2 from '../../images/features-icon-2.png'
import icon3 from '../../images/features-icon-3.png'
import icon4 from '../../images/features-icon-4.png'

const Cards2 = () => {

    let array = [
        {
            name: "Zero Configuration",
            description: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est non feugiat sagittis.",
            btnName: "Learn More"
        },
        {
            name: "Code Security",
            description: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est non feugiat sagittis.",
            btnName: "Learn More"
        },
        {
            name: "Team Management",
            description: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est non feugiat sagittis.",
            btnName: "Learn More"
        },
        {
            name: "Access Controlled",
            description: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est non feugiat sagittis.",
            btnName: "Learn More"
        }
    ]

    return (
        <div id='myCard2' className='py-10'>
            <div className='flex flex-col items-center justify-center text-center mt-5 mx-10'>
                <p className='lg:w-[40%] sm:w-[60%]'>How Can Help You</p>
                <h1 className='text-4xl tracking-wider font-bold text-[#17225b] my-3 lg:w-[40%] sm:w-[60%]'>We’re helping teams do their best work</h1>
            </div>
            <div className='flex flex-row flex-wrap justify-evenly'>
                <CardLayout2 name={array[0].name} desc={array[0].description} btnName={array[0].btnName} icon={icon1} />
                <CardLayout2 name={array[1].name} desc={array[1].description} btnName={array[1].btnName} icon={icon2} />
                <CardLayout2 name={array[2].name} desc={array[2].description} btnName={array[2].btnName} icon={icon3} />
                <CardLayout2 name={array[3].name} desc={array[3].description} btnName={array[3].btnName} icon={icon4} />
            </div>
        </div>
    )
}

export default Cards2
