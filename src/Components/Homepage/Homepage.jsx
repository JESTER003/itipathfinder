import React from 'react'
import Card1 from '../Cards/Card1'
import Card2 from '../Cards/Card2';

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

    return (
        <main className=''>
            {/* ------------------------------------------------------------Section-1------------------------------------ */}

            <section className='min-h-[80vh] bg-white bg-cover bg-center w-full' style={{ backgroundImage: "url('')" }}>
                <div className="w-full min-h-[85vh] flex justify-center items-center">
                    <h1 className='source-serif-4 text-[25px] sm:text-[35px] lg:text-[45px] text-center w-[80%] lg:leading-relaxed'>Create and sell <span className='bg-[#3becb9] basic-regular px-3 rounded-lg'> the most learning products</span> while providing the best possible experience <span className='border-2 border-[#3becb9] rounded-xl px-3 py-1 basic-regular'>for your students.</span></h1>
                </div>
            </section>

            {/* ------------------------------------------------------------Section-2------------------------------------ */}

            <section className='min-h-[80vh] bg-[#ffffff] grid place-content-center p-4'>
                <div className="w-full grid place-content-start py-2">
                    <div className="text-start ml-3">
                        <h2 className='basic-regular text-[25px] sm:text-[35px] lg:text-[45px]'>Select your study goal</h2>
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
                            {/* <Card1
                                img="/engineering.jpg"
                                title="design" cn={100}
                                cources1="BE/B.Tech"
                                cources2="Diploma in engineering"
                                cources3="ME/M.tech"
                                borderColor="[#cc6b56]"
                            /> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------Section-3- ----------------------------------- */}
            <section className='min-h-[80vh] w-full bg-[#ffffff] p-4'>
                <div className="w-[80%] m-auto mt-3">
                    <h2 className='basic-regular text-[25px] sm:text-[35px] lg:text-[42px]'>Explore All Programs</h2>
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
                        title="Exams"
                        tagline="Know more about exams all exams"
                        bname="Check all enterance exams in india"
                        img="/exams.png"
                        />
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Homepage