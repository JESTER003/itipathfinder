import React from 'react'

const Card3 = (props) => {
    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden w-[370px] mt-4 transform transition-transform hover:scale-105">
            <div className="p-5">
                <div className="flex items-center">
                    <div className="flex-grow">
                        <h2 className="font-semibold text-[20px] lg:text-[25px] text-gray-800 leading-7">{props.title}</h2>
                        <p className="text-gray-600 text-[15px] mt-2">{props.tagline}</p>
                    </div>
                    <div className="w-24 h-24 flex-shrink-0 ml-4">
                        <img src={props.img} alt={props.title} className="w-full h-full object-cover rounded-lg shadow-sm" />
                    </div>
                </div>
            </div>
            <div className="bg-teal-50 text-center py-3">
                <button className="text-teal-600 font-medium hover:underline">
                    {props.bname} 
                </button>
            </div>
        </div>
    )
}

export default Card3