import React from 'react';
import { useState } from 'react';
const CollegeCard = () => {
    const abdclg = [
         {
             name:"Nirma University",
             clgimg:"https://media.licdn.com/dms/image/v2/C4D1BAQGiTxDFnjX7KQ/company-background_1536_768/company-background_1536_768/0/1583301340061?e=2147483647&v=beta&t=O9KJRThSdSvwa0FFwgcohgJpWAmt6EVhNSc4heGyXgU",
             clglogo:"https://upload.wikimedia.org/wikipedia/en/8/83/Nirma_University_Logo.png"
        },
        {
            name:"LD Engineering",
            clgimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtp01uRZ3iGe1gaf1S2Ug8BiOSuCEgxbpyuA&s",
            clglogo:"https://media.licdn.com/dms/image/v2/C4D0BAQHfvameHidqKg/company-logo_200_200/company-logo_200_200/0/1631351078340?e=2147483647&v=beta&t=GnToL1Ihl8OjonG6YkVTQq9QfDtCuD1Iz65NNIasXKo"
        },
        {
            name:"Adani Engineering",
            clgimg:"https://www.adaniuni.ac.in/wp-content/uploads/2024/02/Dignitaries-with-the-convocating-batch-of-PGDM-2021-23.jpg",
            clglogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpe3NrwUulxyOVy7kABHoLGAUrOQyYXJCajQ&s"
        }
    ]
    const brdclg = [
        {
            name: "Parul University",
            clgimg: "https://image-static.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=260&w=360&mode=crop",
            clglogo:"https://logowik.com/content/uploads/images/t_parul-university3698.jpg"
        },
        {
            name: "Maharaj Sayajirao uni",
            clgimg: "https://i0.wp.com/historyofvadodara.in/wp-content/uploads/MSU.jpg?resize=1060%2C600&ssl=1",
            clglogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffmrxHvi5zvB4mTBgAQblFh1NYGYT7mLYtg&s"
        },
        {
            name: "Navrachna University",
            clgimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7HuISRs4EFmsy5Evf-app0WEs0TNAMpzNw&s",
            clglogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtbi-iMZH_CKCnpyJIa0f8BV7F4YAK5kHAA&s"
        }
    ];
    const srtclg = [
        {
            name: "SVNIT Surat",
            clgimg: "https://lh6.googleusercontent.com/proxy/TH3oS8jj40znwwWFacQUemcyDdrUUlbLgZQsNurJwJONwwP0hXEUjZWGhmE7mXZt14QDW3tx29Vin1z7",
            clglogo:"https://i.pinimg.com/564x/91/64/1e/91641e3b456269b48869a7e5af978c61.jpg"
        },
        {
            name: "IIIT SURAT",
            clgimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSMc4-VLs142DSK8BwaGZE9KGm6OniPd67HA&s",
            clglogo:""
        },
        {
            name: "SIT",
            clgimg: "https://i.ytimg.com/vi/lcu_aH9stFI/maxresdefault.jpg",
            clglogo:""
        }
    ];
    const rjclg = [
        {
            name: "Government Eng. Rajkot",
            clgimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTx7o8mB-vJkNXAKGlPkB8HzdDlWthxjXejA&s",
        },
        {
            name: "Marwadi University",
            clgimg: "https://i.ytimg.com/vi/9qhF1he3xyo/maxresdefault.jpg",
        },
        {
            name: "ATMIYA University",
            clgimg: "https://threebestrated.in/images/AtmiyaUniversity-Rajkot-GJ.jpeg",
        }
    ];
    const bvnclg = [
        {
            name: "Government Medical Bhavanagr",
            clgimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsClSFwqLt2bbkRwOfctFiYx40begfMCoPQ&s",
        },
        {
            name: "MKBU College",
            clgimg: "https://gcas.gujgov.edu.in/Documents/UniBanner_20231206155527930.jpg",
        },
        {
            name: "SVCCS Bhavnagar",
            clgimg: "https://image-static.collegedunia.com/public/college_data/images/appImage/24044_GLSICT.jpg?h=111.44&w=263&mode=stretch",
        }
    ];

    const [selectedCity, setSelectedCity] = useState(null)
    const handleCityClick = (city) => {
        setSelectedCity(city);
    }
    return (
        <>
            <div className="min-h-[85vh] w-full p-4 flex flex-col justify-start items-center">
                {/* ------------------ All cities name -----------------------*/}
                <div className="w-full h-fit flex flex-col items-center justify-center">
                    <h2 className="basic-regular text-[25px] sm:text-[35px] lg:text-[40px]">
                        Select Your Cities 
                    </h2>
                    <div className="flex flex-wrap gap-3 mt-3">
                        {/* {courses.map((course, index) => (
                            <button
                                key={index}
                                className="bg-gray-100 text-gray-800 py-2 px-4 border border-gray-300 rounded-xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                {course}
                            </button>
                        ))} */}
                        <button
                            className="bg-gray-100 text-gray-800 py-2 px-4 border border-gray-300 rounded-xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            onClick={() => handleCityClick("Ahmedabad")}
                        >Ahmedabad</button>
                        <button
                            className="bg-gray-100 text-gray-800 py-2 px-4 border border-gray-300 rounded-xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            onClick={() => handleCityClick("Vadodara")}
                        >Vadodara</button>
                        <button
                            className="bg-gray-100 text-gray-800 py-2 px-4 border border-gray-300 rounded-xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            onClick={() => handleCityClick("Surat")}
                        >Surat</button>
                        <button
                            className="bg-gray-100 text-gray-800 py-2 px-4 border border-gray-300 rounded-xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            onClick={() => handleCityClick("Rajkot")}
                        >Rajkot</button>
                        <button
                            className="bg-gray-100 text-gray-800 py-2 px-4 border border-gray-300 rounded-xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            onClick={() => handleCityClick("Bhavnagar")}
                        >Bhavnagar</button>
                    </div>
                </div>
                {/* --------------------------------------abd colleges----------------------- */}
                {selectedCity === "Ahmedabad" &&
                    <div className='flex mt-5 gap-5 w-full justify-center items-center flex-wrap flex-wrap'>
                        {abdclg.map((value, index) => (
                            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-h-fit" key={index}>
                                <div className="relative">
                                    <img
                                        src={value.clgimg}
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
                                            src={value.clglogo}
                                            alt="College Logo"
                                            className="w-10 h-10 rounded-full mr-2"
                                        />
                                        <h3 className="font-bold text-lg">{value.name}</h3>
                                    </div>

                                    <p className="text-gray-700 mb-2">India</p>
                                    <div className="flex justify-between items-center mb-2">
                                        {/* <h4 className="font-bold text-lg">ITI</h4> */}
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
                        ))
                        }
                    </div>
                }
                {/* --------------------------------------brd colleges------------------------ */}
                {selectedCity === "Vadodara" &&
                    <div className='flex mt-5 gap-5 w-full justify-center items-center flex-wrap'>
                        {/* // ------------------- Card 1  ------------- */}
                        {brdclg.map((value, index) => (
                            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-h-fit" key={index}>
                                <div className="relative">
                                    <img
                                        src={value.clgimg}
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
                                            src={value.clglogo}
                                            alt="College Logo"
                                            className="w-10 h-10 rounded-full mr-2"
                                        />
                                        <h3 className="font-bold text-lg">{value.name}</h3>
                                    </div>

                                    <p className="text-gray-700 mb-2">India</p>
                                    <div className="flex justify-between items-center mb-2">
                                        {/* <h4 className="font-bold text-lg">ITI</h4> */}
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
                        ))
                        }
                    </div>
                }
                {/* --------------------------------------surat colleges------------------------ */}
                {selectedCity === "Surat" &&
                    <div className='flex mt-5 gap-5 w-full justify-center items-center flex-wrap'>
                        {/* // ------------------- Card 1  ------------- */}
                        {srtclg.map((value, index) => (
                            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-h-fit" key={index}>
                                <div className="relative">
                                    <img
                                        src={value.clgimg}
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
                                            src={value.clglogo}
                                            alt="College Logo"
                                            className="w-10 h-10 rounded-full mr-2"
                                        />
                                        <h3 className="font-bold text-lg">{value.name}</h3>
                                    </div>

                                    <p className="text-gray-700 mb-2">India</p>
                                    <div className="flex justify-between items-center mb-2">
                                        {/* <h4 className="font-bold text-lg">ITI</h4> */}
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
                        ))
                        }
                    </div>
                }

                {/* --------------------------------------rajkot colleges------------------------ */}
                {selectedCity === "Rajkot" &&
                    <div className='flex mt-5 gap-5 w-full justify-center items-center flex-wrap'>
                        {/* // ------------------- Card 1  ------------- */}
                        {rjclg.map((value, index) => (
                            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-h-fit" key={index}>
                                <div className="relative">
                                    <img
                                        src={value.clgimg}
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
                                            src={value.clglogo}
                                            alt="College Logo"
                                            className="w-10 h-10 rounded-full mr-2"
                                        />
                                        <h3 className="font-bold text-lg">{value.name}</h3>
                                    </div>

                                    <p className="text-gray-700 mb-2">India</p>
                                    <div className="flex justify-between items-center mb-2">
                                        {/* <h4 className="font-bold text-lg">ITI</h4> */}
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
                        ))
                        }
                    </div>
                }

                {/* --------------------------------------bhavnagar colleges------------------------ */}
                {selectedCity === "Bhavnagar" &&
                    <div className='flex mt-5 gap-5 w-full justify-center items-center flex-wrap'>
                        {/* // ------------------- Card 1  ------------- */}
                        {bvnclg.map((value, index) => (
                            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] min-h-fit" key={index}>
                                <div className="relative">
                                    <img
                                        src={value.clgimg}
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
                                            src={value.clglogo}
                                            alt="College Logo"
                                            className="w-10 h-10 rounded-full mr-2"
                                        />
                                        <h3 className="font-bold text-lg">{value.name}</h3>
                                    </div>

                                    <p className="text-gray-700 mb-2">India</p>
                                    <div className="flex justify-between items-center mb-2">
                                        {/* <h4 className="font-bold text-lg">ITI</h4> */}
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
                        ))
                        }
                    </div>
                }
            </div>
        </>
    );
};

export default CollegeCard;