import React from 'react'
import CardLayout from './CardLayout'
import IMG1 from '../../images/blog-1.jpg'
import IMG2 from '../../images/blog-2.jpg'
import IMG3 from '../../images/blog-3.jpg'

const Cards = () => {

    let array = [
        {
            name: "Technology",
            date: "25 Feb, 2022",
            title: "How is technology working with new things?"
        },
        {
            name: "Design",
            date: "25 Feb, 2022",
            title: "Top 10 important tips on IT services & design"
        },
        {
            name: "Start up",
            date: "25 Feb, 2022",
            title: "How our company works in different ways"
        },
    ]

    return (
        <div id="myCard" className='pt-10 pb-16'>
            {/* title */}
            <div className='flex flex-col justify-center items-center'>
                <div className='text-center my-10 text-[#17225b] mx-10 lg:w-[35%] sm:[50%]'>
                    <p className='font-bold text-slate-500 mb-4 tracking-wider'>Latest News</p>
                    <h2 className='text-4xl tracking-wider font-bold'>Our latest articles & resources</h2>
                </div>
            </div>
            {/* cards */}
            <div className='flex flex-row flex-wrap justify-evenly'>
                <CardLayout name={array[0].name} date={array[0].date} title={array[0].title} img={IMG1} />
                <CardLayout name={array[1].name} date={array[1].date} title={array[1].title} img={IMG2} />
                <CardLayout name={array[2].name} date={array[2].date} title={array[2].title} img={IMG3} />
            </div>
        </div>
    )
}

export default Cards
