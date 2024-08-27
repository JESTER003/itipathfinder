import React from 'react'
import Card2 from '../Cards/Card2'
import Card3 from '../Cards/Card3'

const Courses = () => {

    const info = [
        {
            title: "Electrician",
            tagline: "Learn the skills to become a certified electrician",
            bname: "More students interested",
            img: "https://cdni.iconscout.com/illustration/premium/thumb/website-ranking-3465545-2928735.png?f=webp",
        },
        {
            title: "Fitter",
            tagline: "Master fitting techniques for various machinery and equipment",
            bname: "More students interested",
            img: "/colleges.png",
        },
        {
            title: "Mechanic Diesel",
            tagline: "Specialize in diesel engine maintenance and repair",
            bname: "Few students interested",
            img: "/exams.png",
        },
        {
            title: "Welder",
            tagline: "Gain expertise in welding and metalwork for diverse industries",
            bname: "More students interested",
            img: "/courses.png",
        },
        {
            title: "Plumber",
            tagline: "Become skilled in plumbing installation and maintenance",
            bname: "Few students interested",
            img: "/courses.png",
        },
        {
            title: "Computer Operator & Programming Assistant (COPA)",
            tagline: "Learn essential computer operations and basic programming",
            bname: "More students interested",
            img: "/courses.png",
        },
        {
            title: "Electrician",
            tagline: "Learn the skills to become a certified electrician",
            bname: "More students interested",
            img: "https://cdni.iconscout.com/illustration/premium/thumb/website-ranking-3465545-2928735.png?f=webp",
        },
        {
            title: "Fitter",
            tagline: "Master fitting techniques for various machinery and equipment",
            bname: "More students interested",
            img: "/colleges.png",
        },
        {
            title: "Mechanic Diesel",
            tagline: "Specialize in diesel engine maintenance and repair",
            bname: "Few students interested",
            img: "/exams.png",
        },
        {
            title: "Welder",
            tagline: "Gain expertise in welding and metalwork for diverse industries",
            bname: "More students interested",
            img: "/courses.png",
        },
        {
            title: "Plumber",
            tagline: "Become skilled in plumbing installation and maintenance",
            bname: "Few students interested",
            img: "/courses.png",
        },
        {
            title: "Computer Operator & Programming Assistant (COPA)",
            tagline: "Learn essential computer operations and basic programming",
            bname: "More students interested",
            img: "/courses.png",
        },
    ];

    return (
        <div className="w-full sm:px-6 lg:px-8 gap-4 mx-auto  flex justify-center flex-wrap py-5">

            {info.map((value, index) => (
                <div className="flex flex-wrap sm:flex-row lg:gap-4 justify-center" key={index}>
                    <Card3
                        title={value.title}
                        tagline={value.tagline}
                        bname={value.bname}
                        img={value.img}
                    />
                </div>
            ))}

        </div>
    )
}

export default Courses