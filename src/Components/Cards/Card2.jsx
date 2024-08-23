import React from 'react'

const Card2 = (props) => {
    return (
        <>
            <div className='min-h-max w-[370px] bg-gradient-to-b from-teal-100 to-white border-gray-300 rounded-lg border mt-4 p-2'>
                <div className="flex min-h-[131px]">
                    <div className="">
                        <h2 className='basic-regular text-[20px] sm:text-[20px] lg:text-[25px]'>{props.title}</h2>
                        <p className='text-[15px]'>{props.tagline}</p>
                    </div>

                    <div className="w-44">
                        <img src={props.img} alt="" />
                    </div>
                </div>
                    <p className='text-center text-gray-500 mt-3'><button className=''>{props.bname} &#62;</button></p>
            </div>
        </>
    )
}

export default Card2;