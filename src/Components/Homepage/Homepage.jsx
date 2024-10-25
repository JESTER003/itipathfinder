import React from 'react'
import Card1 from '../Cards/Card1'
import Card2 from '../Cards/Card2';
import NotificationCard from '../Cards/NotificationCard';
import Table from '../Cards/Table';
import CollegeCard from '../Cards/CollegeCard';
import { Link, useLocation } from 'react-router-dom';

const Homepage = () => {
    const courses = [
        "Electrician",
        "Fitter",
        "Welder",
        "Plumber",
        "Machinist",
        "Mechanic (Motor Vehicle)",
        "Draughtsman (Civil)",
        "Computer Operator and Programming Assistant (COPA)",
        "Refrigeration and Air Conditioning Mechanic",
        "Tool and Die Maker"
    ];


    const location = useLocation();
    // const { name } = location.state || {}

    return (
        <main className=''>
            {/* ------------------------------------------------------------Section-1------------------------------------ */}

            <section className="min-h-[80vh] bg-cover bg-center w-full">

                {/* <div className="absolute w-full overflow-hidden ">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M3000 120L0 16.48 0 0 1200 0 1200 120z" fill='#3becb9'></path>
                    </svg>
                </div> */}

                <div className="w-full min-h-[85vh] flex justify-center items-center">
                    <h1 className='source-serif-4 text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[48px] text-center w-[90%] lg:w-[80%] mx-auto lg:leading-[65px]'>
                        Kickstart your career
                        <span className='bg-[#3becb9] basic-regular px-2 mx-1 rounded-lg inline-block leading-[27px] lg:leading-[60px] '>
                            with industry-focused ITI courses
                        </span>
                        <br />
                        <span className='border-2 border-[#3becb9] rounded-xl px-2 mx-2 basic-regular leading-[27px] inline-block lg:leading-[60px]'>
                            Discover the path to your future
                        </span>
                        and build a successful trade career.<br />
                        <Link to="/qone" className="inline-block text-lg md:text-xl lg:text-2xl px-4 py-2 leading-none rounded-full border-2 border-[#3becb9] text-gray-800 font-medium hover:bg-[#3becb9] hover:text-white transition duration-300 shadow-md hover:shadow-lg ">Get started</Link>
                    </h1>
                </div>

                {/* <div className="absolute w-full bottom-0 rotate-180">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M3000 120L0 16.48 0 0 1200 0 1200 120z" fill='#3becb9'></path>
                    </svg>
                </div> */}
            </section>

            {/* ------------------------------------------------ Section-2 (Explore all programs )----------------------------------- */}

            <section className="min-h-[80vh] w-full bg-[#ffffff] py-6 mt-0 px-3">
                <div className="w-full lg:w-[80%] mx-auto mt-14">
                    <h2 className="basic-regular text-[25px] sm:text-[35px] lg:text-[40px]">
                        Explore All Programs
                    </h2>
                    <div className="flex flex-wrap gap-3 mt-3">
                        {courses.map((course, index) => (
                            <button
                                key={index}
                                className="bg-gray-100 text-gray-800 py-2 px-4 border border-gray-300 rounded-xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                {course}
                            </button>
                        ))}
                    </div>

                    <div className="w-full sm:px-6 lg:px-8 gap-4 mx-auto  flex justify-center flex-wrap">
                        <div className="flex flex-col sm:flex-row lg:gap-4 ">
                            <Card2
                                title="Ranking"
                                tagline="Colleges Ranked based on data"
                                bname="Top Ranked Colleges in india"
                                img="https://cdni.iconscout.com/illustration/premium/thumb/website-ranking-3465545-2928735.png?f=webp"
                            />
                            <Card2
                                title="Find colleges"
                                tagline="Discover colleges via preference"
                                bname="Find Colleges in india"
                                img="/colleges.png"
                            />
                            <Card2
                                title="Compare colleges"
                                tagline="See the difference between colleges"
                                bname="Make Comparison Now"
                                img="/compare.png"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Card2
                                title="Exams"
                                tagline="Know more about exams all exams"
                                bname="Check all enterance exams in india"
                                img="/exams.png"
                            />
                            <Card2
                                title="Course Finder"
                                tagline="Discover top courses among india"
                                bname="Get Top Courses in india"
                                img="/courses.png"
                            />
                            <Card2
                                title="College Predictor"
                                tagline="Make sure that which college suits you"
                                bname="Make Right prediction now"
                                img="/find.png"
                            />
                        </div>
                    </div>
                </div>


            </section>

            {/*----------------------------------------------- Section-3 ( Select Study goal ) ------------------------------------- */}

            <section className='min-h-[80vh] w-full bg-[#ffffff] p-4'>
                <div className="w-[90%] lg:w-[80%] m-auto mt-3">
                    <div className="text-start ml-3">
                        <h2 className='basic-regular text-[25px] sm:text-[35px] lg:text-[40px]'>
                            Select your study goal
                        </h2>
                        <p className='text-[12px] sm:text-[15px] lg:text-[20px]'>
                            Share your knowledge through a complete suite of learning products
                        </p>
                    </div>
                    <div className="p-2 flex flex-col gap-4">
                        <div className="flex  overflow-scroll justify-center items-center gap-4">
                            <Card1
                                img="https://img.freepik.com/free-photo/man-florist-working-green-house_1303-29960.jpg?t=st=1724763340~exp=1724766940~hmac=06a3989d5f517745cd08610f169c7b70fa12b9afcdd11f734ccd4aacefd3cb3f&w=996"
                                title="ITI in Electrician"
                                cn={500}
                                cources1="Industrial Training Institute"
                                borderColor="#cc6b56"
                            />
                            <Card1
                                img="https://img.freepik.com/free-photo/female-auto-repairer-working-shop-car_23-2150170002.jpg?t=st=1724763418~exp=1724767018~hmac=18162bb1226a20ca7eefa929a5fb6c78d5dacee56a70e721934c369c2fea07a5&w=996"
                                title="ITI in Mechanic "
                                cn={150}
                                cources1="Industrial Training Institute"
                                // cources2="BBA"
                                // cources3="Exclusive MBA"
                                borderColor="[#0d3063]"
                            />
                            <Card1
                                img="https://img.freepik.com/free-photo/park-lujiazui-financial-centre_1127-3343.jpg?t=st=1724763407~exp=1724767007~hmac=a410a3b02dde0a2af87c81e8ddcd6a4a48477e512f0f71832d7376d53cab2fa7&w=996"
                                title="ITI in Civil"
                                cn={800}
                                cources1="Industrial Training Institute"
                                // cources2="Diploma in engineering"
                                // cources3="ME/M.tech"
                                borderColor="[#1b4942]"
                            />
                        </div>
                        <div className="flex overflow-hidden justify-center items-center gap-4">
                            <Card1
                                img="https://img.freepik.com/free-photo/man-with-mask-welding-metal-atelier_23-2149025925.jpg?t=st=1724763790~exp=1724767390~hmac=a4df900aeeb76b32ae8ba89f191729894b21a03711ebc098e3fa8315071f6893&w=900"
                                title="ITI in WELDING  "
                                cn={400}
                                cources1="Industrial Training Institute"
                                // cources2="Diploma in engineering"
                                // cources3="ME/M.tech"
                                borderColor="[#3becb9]"
                            />
                            <Card1
                                img="https://img.freepik.com/free-photo/composition-fathers-day-with-tools_23-2147790959.jpg?t=st=1724763841~exp=1724767441~hmac=715d70ba24ee556b62307e503a84fcf1d16762abc9a97d265d2f68787be678e6&w=996"
                                title="ITI in Tool and Die Maker"
                                cn={100}
                                cources1="Industrial Training Institute"
                                // cources2="Diploma in engineering"
                                // cources3="ME/M.tech"
                                borderColor="[#ffaf8d]"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* -------------------------------------------- SECTION - 4 ( Latest Notifiction)  -------------------------------------- */}

            <section className=' min-h-[50vh] w-full bg-[#ffffff] lg:p-4 mt-5'>
                <div className=" w-[90%] m-auto mt-3">
                    <h2 className='basic-regular text-[25px] sm:text-[35px] lg:text-[40px]'>Latest Notifications</h2>
                    <NotificationCard />
                </div>
            </section>

            {/* ---------------------------------------- ----SECTION-5 (Top college Tables ) --------------------------------------- */}

            <section className='min-h-[80vh] w-fit bg-[#ffffff] p-4 mt-5'>
                <div className="w-[80%] m-auto mt-3">
                    <h2 className='basic-regular text-[25px] sm:text-[35px] lg:text-[40px]'>Top 10 colleges</h2>
                    <div className="flex flex-wrap gap-3 mt-3">
                        {courses.map((course, index) => (
                            <button
                                key={index}
                                className="bg-gray-100 text-gray-800 py-2 px-4 border border-gray-300 rounded-xl shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 border-1 "
                            >
                                {course}
                            </button>
                        ))}
                    </div>
                    <Table />
                </div>
            </section>

            {/* ---------------------------------------- ----SECTION-5 (Top college Tables ) --------------------------------------- */}

            <section className="min-h-[80vh] w-full bg-[#ffffff] p-4 mt-5">
                <div className="w-[90%] md:w-[80%] m-auto mt-5">
                    <h2 className="basic-regular text-[25px] sm:text-[35px] lg:text-[40px]">Top Colleges/Universities</h2>
                    <div className="flex  gap-4 flex-wrap">
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Homepage