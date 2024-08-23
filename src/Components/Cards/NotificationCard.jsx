import React from 'react'

const NotificationCard = (props) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white shadow-md rounded-lg p-4 h-full">
                <h3 className="text-lg font-bold mb-2 uppercase">{props.title}</h3>
                <p className="text-gray-600">{props.data} </p>
            </div>
        </div>
    )
}

export default NotificationCard