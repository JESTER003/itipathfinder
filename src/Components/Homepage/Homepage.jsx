import React from 'react'
import Card1 from '../Cards/Card1'
import Card2 from '../Cards/Card2';
import NotificationCard from '../Cards/NotificationCard';
import Table from '../Cards/Table';
import CollegeCard from '../Cards/CollegeCard';
import { useLocation } from 'react-router-dom';

const Homepage = () => {
    const courses = [
        "BE/B.Tech",
        "ME/M.Tech",
        "MBA",
        "BBA",
        "B.Sc",
        "M.Sc",
        "B.Com",
        "M.Com",
        "BCA",
        "MCA",
        "MBBS",
        "B.sc(Nursing)"
    ];

    const location = useLocation();
    // const { name } = location.state || {}

    return (
        <main className=''>
            {/* ------------------------------------------------------------Section-1------------------------------------ */}
            {/* <p className='text-center'>Hello</p> */}
            <section className='min-h-[80vh] bg-white bg-cover bg-center w-full' style={{
                backgroundImage: `url('your-image-url')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // backgroundImageXl: `url('your-image-url-xl')`,
                backgroundSizeXl: 'cover'
            }}>
                <div className="w-full min-h-[85vh] flex justify-center items-center">
                    <h1 className='source-serif-4 text-[25px] sm:text-[35px] lg:text-[45px] text-center w-[80%] lg:leading-relaxed'>
                        Elevate your learning
                        <span className='bg-[#3becb9] basic-regular px-1 mx-1 rounded-lg'>
                            journey with expertly selected courses
                        </span>
                        <br />
                        <span className='border-2 border-[#3becb9] rounded-xl px-1 py-1 mx-1 basic-regular'>
                            Discover your next passion
                        </span>
                        and unlock your potential.
                    </h1>
                </div>
            </section>

            {/* ------------------------------------------------ Section-3 (Explore all programs )----------------------------------- */}

            <section className='min-h-[80vh] w-full bg-[#ffffff] p-4 mt-5'>
                <div className="w-[80%] m-auto mt-3">
                    <h2 className='basic-regular text-[25px] sm:text-[35px] lg:text-[40px]'>Explore All Programs</h2>
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
                    <div className="w-fit m-auto grid">
                        <div className="flex flex-row gap-3">
                            <Card2
                                title="Ranking"
                                tagline="Collage Ranked based on data"
                                bname="Top Ranked Collges in india"
                                img="https://cdni.iconscout.com/illustration/premium/thumb/website-ranking-3465545-2928735.png?f=webp"
                            />
                            <Card2
                                title="Find colleges"
                                tagline="Discover colleges via preference"
                                bname="Top Ranked Collges in india"
                                img="/colleges.png"
                            />
                            <Card2
                                title="Find colleges"
                                tagline="Discover colleges via preference"
                                bname="Top Ranked Collges in india"
                                img="/colleges.png"
                            />
                        </div>
                        <div className="flex flex-row gap-3">
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
                                title="Course Finder"
                                tagline="Discover top courses among india"
                                bname="Get Top Courses in india"
                                img="/courses.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/*----------------------------------------------- Section-2 ( Select Study goal ) ------------------------------------- */}

            <section className='min-h-[80vh] w-full bg-[#ffffff] p-4'>
                <div className="w-[80%] m-auto mt-3">
                    <div className="text-start ml-3">
                        <h2 className='basic-regular text-[25px] sm:text-[35px] lg:text-[40px]'>Select your study goal</h2>
                        <p className='text-[10px] sm:text-[15px] lg:text-[20px]'>Share your knowledge through a complete suite of learning products</p>
                    </div>
                    <div className="p-2 flex flex-col gap-4">
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            <Card1
                                img="/engineering.jpg"
                                title="engineering"
                                cn={500}
                                cources1="BE/B.Tech"
                                cources2="Diploma in engineering"
                                cources3="ME/M.tech"
                                borderColor="#cc6b56"
                            />
                            <Card1
                                img="/engineering.jpg"
                                title="management"
                                cn={150}
                                cources1="MBA"
                                cources2="BBA"
                                cources3="Exclusive MBA"
                                borderColor="[#0d3063]"
                            />
                            <Card1
                                img="/engineering.jpg"
                                title="commerce" cn={800}
                                cources1="BE/B.Tech"
                                cources2="Diploma in engineering"
                                cources3="ME/M.tech"
                                borderColor="[#1b4942]"
                            />
                        </div>
                        <div className="flex justify-center gap-4">

                            <Card1
                                img="/engineering.jpg"
                                title="arts" cn={400}
                                cources1="BE/B.Tech"
                                cources2="Diploma in engineering"
                                cources3="ME/M.tech"
                                borderColor="[#3becb9]"
                            />
                            <Card1
                                img="/engineering.jpg"
                                title="medical"
                                cn={1100}
                                cources1="BE/B.Tech"
                                cources2="Diploma in engineering"
                                cources3="ME/M.tech"
                                borderColor="[#ffaf8d]"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* -------------------------------------------- SECTION - 4 ( Latest Notifiction)  -------------------------------------- */}

            <section className='min-h-[50vh] w-full bg-[#ffffff] p-4 mt-5'>
                <div className="w-[80%] m-auto mt-3">
                    <h2 className='basic-regular text-[25px] sm:text-[35px] lg:text-[40px]'>Latest Notifications</h2>
                    <div className="flex flex-wrap justify-center">
                        <NotificationCard
                            title="Notification 1"
                            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <NotificationCard
                            title="Notification 2"
                            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <NotificationCard
                            title="Notification 3"
                            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <NotificationCard
                            title="Notification 4"
                            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <NotificationCard
                            title="Notification 5"
                            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <NotificationCard
                            title="Notification 6"
                            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <NotificationCard
                            title="Notification 7"
                            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <NotificationCard
                            title="Notification 8"
                            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                    </div>
                </div>
            </section>

            {/* ---------------------------------------- ----SECTION-5 (Top college Tables ) --------------------------------------- */}

            <section className='min-h-[80vh] w-full bg-[#ffffff] p-4 mt-5'>
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

            <section className='min-h-[80vh] w-full bg-[#ffffff] p-4 mt-5'>
                <div className="w-[80%] m-auto mt-">
                    <h2 className='basic-regular text-[25px] sm:text-[35px] lg:text-[40px]'>Top colleges/Universities</h2>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-6 lg:gap-96">
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