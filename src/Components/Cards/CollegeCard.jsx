import React from 'react';

const CollegeCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-[25vw] min-h-[70vh]">
            <div className="relative">
                <img
                    src="https://greenspacealliance.com/wp-content/uploads/2015/08/IIT-Completed-photos11.jpg"
                    alt="College Image"
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full px-2 py-1">
                    <span className="font-bold">10/10</span>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg"
                        alt="College Logo"
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <h3 className="font-bold text-lg">IIT Madras - Indian Institute of Technology - [IITM]</h3>
                </div>
                <p className="text-gray-700 mb-2">Chennai, Tamil Nadu | AICTE</p>
                <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-lg">BE/B.Tech</h4>
                    <div className="flex items-center">
                        <span className="font-bold text-yellow-500">4.2/5</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1 text-yellow-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            {/* image of star here */}
                        </svg>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <p className="text-gray-700">2.42 Lacs First Year Fees</p>
                    <span className="text-gray-700">365 reviews</span>
                </div>
                <p className="text-gray-700">Ranked 227 out of 1400 QS</p>
                <div className="mt-2">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full w-full"
                        onClick={() => {
                            // Handle button click
                        }}
                    >
                        View All Courses and fees
                    </button>
                    {/* <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full w-full mt-2"
                        onClick={() => {
                            // Handle button click
                        }}
                    >
                        Download Brochure
                    </button> */}
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full w-full mt-2"
                        onClick={() => {
                            // Handle button click
                        }}
                    >
                        Compare
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;