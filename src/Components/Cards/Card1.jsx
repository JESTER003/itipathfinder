import React from 'react'

const Card1 = (props) => {
    return (
        <div className="bg-white border-t-[12px] shadow-xl rounded-xl ">
            <div className="border-t-[2px] border-white">
                <img src={props.img} alt="" width={300} height={200} />
            </div>
            <div className="p-3 ">
                <div className="flex items-center justify-start">
                    <h3 className='uppercase text-xl font-semibold '>{props.title} <br /><span className='text-[15px] border border-gray-800 p-1 rounded '>{props.cn} Colleges</span></h3>
                </div>
                <div className="mt-3">
                    <ul>
                        <li><button>{props.cources1}</button></li>
                        <li className='border-y-2 border-gray-200'><button>{props.cources2}</button></li>
                        <li><button>{props.cources3}</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card1;