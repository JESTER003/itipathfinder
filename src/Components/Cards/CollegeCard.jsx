import React from 'react';

const CollegeCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-h-[70vh]">
            <div className="relative">
                <img
                    src="https://greenspacealliance.com/wp-content/uploads/2015/08/IIT-Completed-photos11.jpg"
                    alt="College Image"
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full px-2 py-1">
                    <span className="font-bold">10/10</span>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center">
                    <img
                        src="/logo2.png"
                        alt="College Logo"
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <h3 className="font-bold text-lg">ITI - Industrial training institute</h3>
                </div>
                <p className="text-gray-700 mb-2">India</p>
                <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-lg">ITI</h4>
                    <div className="flex items-center">
                        <span className="font-bold text-yellow-500">4.2/5</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1 text-yellow-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.614 4.968a1 1 0 00.95.69h5.212c.969 0 1.371 1.24.588 1.81l-4.21 3.056a1 1 0 00-.364 1.118l1.614 4.968c.3.921-.755 1.688-1.54 1.118L10 15.454l-4.21 3.056c-.784.57-1.84-.197-1.54-1.118l1.614-4.968a1 1 0 00-.364-1.118L1.291 10.395c-.783-.57-.38-1.81.588-1.81h5.212a1 1 0 00.95-.69l1.614-4.968z" />
                        </svg>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <p className="text-gray-700 text-sm sm:text-base">2.42 Lacs First Year Fees</p>
                    <span className="text-gray-700 text-sm sm:text-base">365 reviews</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">Ranked 227 out of 1400 QS</p>
                <div className="mt-2">
                    <button
                        className="bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-2 rounded-full w-full"
                        onClick={() => {
                            // Handle button click
                        }}
                    >
                        View All Courses and Fees
                    </button>
                    <button
                        className="bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-4 rounded-full w-full mt-2"
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