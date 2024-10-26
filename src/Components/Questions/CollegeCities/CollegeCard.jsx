import React from 'react';
import { useState } from 'react';
const CollegeCard = () => {
    const abdclg = [
        {
            name: "ITI KUBERNAGR",
            clgimg: "https://images.jdmagicbox.com/comp/ahmedabad/75/079p252775/catalogue/industrial-training-institute-kubernagar-ahmedabad-institutes-for-iti-cp8ho0.jpg",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"
        },
        {
            name: "ITI Sarkhej",
            clgimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAX1Q7Jv2sYCebMIQqwYetgn498k4fY1AZQ&s",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"
        },
        {
            name: "ITI Sanand",
            clgimg: "https://lh3.googleusercontent.com/p/AF1QipPYVjxpFnsTiIPItlyyvozgB6NtXOpqDpV76y2L=s1360-w1360-h1020",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"
        }
    ]
    const brdclg = [
        {
            name: "ITI Gorwa",
            clgimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIgFL7vtpeloKhllVuP-DPycpM_QkmHVALg&s",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"
        },
        {
            name: "ITI tarsali",
            clgimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsznpwR9TD_sPPvQ1T8SysiKcfN__NwNAzw&s",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"
        },
        {
            name: "ITI dashrath",
            clgimg: "https://itidashrath.gujarat.gov.in/Content/itidashrath.gujarat.gov.in/Gallery/Crop/574ITI%20WORKSHOP%20.jpg",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"
        }
    ];
    const srtclg = [
        {
            name: "ITI Bilimora",
            clgimg: "https://content.jdmagicbox.com/comp/navsari/l1/9999p2637.2637.180630155517.x9l1/catalogue/bilimora-iti-bilimora-navsari-lmud35nblv.jpg?clr=",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"
        },
        {
            name: "ITI Karchelia",
            clgimg: "https://content.jdmagicbox.com/v2/comp/surat/e2/0261px261.x261.180814164101.m2e2/catalogue/new-iti-karchelia-karchelia-surat-technical-institutes-plHjR7DZbI.jpg",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"
        },
        {
            name: "ITI Majuragate",
            clgimg: "https://slideplayer.com/slide/1459861/4/images/25/Industrial+Training+Institute%2C+Surat.jpg",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"
        }
    ];
    const rjclg = [
        {
            name: "ITI Rajkot",
            clgimg: "https://content.jdmagicbox.com/comp/rajkot/y3/0281px281.x281.120521121612.b2y3/catalogue/industrial-training-institute-bhavnagar-road-rajkot-institutes-for-iti-5bohal712c.jpg?clr=",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"

        },
        {
            name: "ITI Gondal",
            // clgimg: "https://i.ytimg.com/vi/9qhF1he3xyo/maxresdefault.jpg",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"


        },
        {
            name: "ITI jasdan",
            clgimg: "https://content.jdmagicbox.com/comp/botad/u6/0278px278.x278.180814101351.n2u6/catalogue/iti-botad-dhankaniya-botad-colleges-qtqazkx2w7.jpg",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"

        }
    ];
    const bvnclg = [
        {
            name: "ITI Bhavnagr",
            clgimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8_1yDl-YG47JKueJeZ9MH51A2RG6COsa8g&s",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"

        },
        {
            name: "ITI Palitana",
            clgimg: "https://content.jdmagicbox.com/comp/amreli/p3/9999p2792.2792.111019163405.g5p3/catalogue/industrial-training-institute-station-road-amreli-amreli-computer-training-institutes-qr9ee7dbl7.jpg",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"

        },
        {
            name: "ITI Gogha",
            clgimg: "https://content.jdmagicbox.com/v2/comp/bhavnagar/l6/0278px278.x278.171001172150.y9l6/catalogue/industrial-training-institute-gogha-bhavnagar-iti-institutes-UilDDsEVxB.jpg",
            clglogo: "https://ganeshiti.in/wp-content/uploads/2022/02/logo.png"

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
                    <div className='flex mt-5 gap-5 w-full justify-center items-center flex-wrap '>
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