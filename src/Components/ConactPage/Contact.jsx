import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to API)
        alert("Your message has been sent!");
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className=" text-gray-800 p-4 lg:p-10 min-h-fit">
            {/* Hero Section */}
            <section className="bg-[#3becb0] text-white py-4 rounded-tr-2xl rounded-tl-2xl">
                <div className="container mx-auto px-2 lg:px-2 md:px-2">
                    <div className="text-center">
                        <h1 className="text-2xl lg:text-4xl font-bold mb-2">Contact Us</h1>
                        <p className="text-lg lg:text-xl">
                            We’d love to hear from you! Whether you have questions or feedback, feel free to reach out to us.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className=" bg-[#3becb0] rounded-bl-2xl rounded-br-2xl pb-4">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 lg:pr-6">
                            <h2 className="text-3xl font-semibold mb-2">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        rows="5"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
                            <h2 className="text-3xl font-semibold mb-2">Our Contact Information</h2>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                                <p className="text-gray-700">info@itipathfinder.com</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                                <p className="text-gray-700">+91 123 456 7890</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                                <p className="text-gray-700">123 Career Lane, Knowledge City, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Find Us on the Map</h2>
                    <div className="relative w-full h-96 rounded-lg overflow-hidden">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.384224814163!2d-75.16522128417308!3d39.95258357942268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c6e727e54075%3A0x7c2e964be8128a4!2sPhiladelphia%2C%20PA%2019130%2C%20USA!5e0!3m2!1sen!2sin!4v1634064878483!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact