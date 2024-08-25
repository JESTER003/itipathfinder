import React from 'react'

const About = () => {
    return (
        <div className="bg-gray-100 text-gray-800 p-10">
            {/* Hero Section */}
            <section className="bg-[#3becb0] text-white py-8 rounded-tl-2xl rounded-tr-2xl">
                <div className="container mx-auto px-6 lg:px-8 ">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Us</h1>
                            <p className="text-lg lg:text-xl">
                            At ITIPathfinder, we are committed to guiding students through their post-10th grade journey by offering expert advice on ITI courses. Our goal is to simplify the decision-making process and connect students with career paths that align with their interests and strengths. With a focus on providing accurate and personalized recommendations, we strive to be the go-to resource for aspiring professionals seeking the right educational opportunities.
                            </p>
                        </div>
                        <div className="w-full md:w-96">
                            <img
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/business-team-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--problem-solving-co-operative-corporate-joint-effort-action-pack-people-illustrations-4367802.png?f=webp"
                                alt="About Us"
                                className="w-full h-auto rounded-lg "
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="bg-[#3becb0] text-white py-8 rounded-bl-2xl rounded-br-2xl">
                <div className="container mx-auto px-6 lg:px-8 ">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="w-full md:w-96">
                            <img
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/mission-3d-icon-download-in-png-blend-fbx-gltf-file-formats--goal-target-success-business-pack-icons-7864007.png?f=webp"
                                alt="About Us"
                                className="w-full h-auto rounded-lg "
                            />
                        </div>
                        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Mission</h1>
                            <p className="text-lg lg:text-xl">
                            At ITIPathfinder, our mission is to empower students with the knowledge and tools they need to navigate their career paths after the 10th standard. We are dedicated to providing comprehensive guidance on ITI courses that align with individual interests and career aspirations. By offering detailed insights and personalized recommendations, we aim to help students make informed decisions about their future. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="bg-[#3becb0] py-16 mt-3 rounded-2xl ">
                <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
                    <div className="flex flex-col lg:flex-row justify-around">
                        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 text-center">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/012/447/670/original/3d-illustration-avatar-profile-man-png.png"
                                alt="Team Member 1"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">John Doe</h3>
                            <p className="text-gray-600">Founder & CEO</p>
                        </div>
                        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 text-center">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/012/447/670/original/3d-illustration-avatar-profile-man-png.png"
                                alt="Team Member 2"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">Jane Smith</h3>
                            <p className="text-gray-600">Head of Content</p>
                        </div>
                        <div className="w-full lg:w-1/3 text-center">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/012/447/667/small/3d-avatar-profile-woman-png.png"
                                alt="Team Member 3"
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">Emily Davis</h3>
                            <p className="text-gray-600">Marketing Specialist</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About