import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link, useOutletContext } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    // Access setIsAuthenticated from the Outlet context
    const [isAuthenticated, setIsAuthenticated] = useOutletContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3333/", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        // If the user exists, update the authentication status and navigate to home
                        setIsAuthenticated(true);
                        navigate("/qone", { state: { id: email } });
                    } else if (res.data === "notexist") {
                        alert("User has not signed up with this details");
                    }
                })
                .catch(e => {
                    alert("Incorrect details");
                    console.log(e);
                });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="flex flex-col lg:flex-row h-screen bg-gray-100 p-8 ">
            {/* 3D Image Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-400 relative rounded-2xl">
                <div className="absolute inset-0">
                    {/* Replace with your 3D image link */}
                    <img
                        src="https://r2.erweima.ai/imgcompressed/img/compressed_d6cbf2acc68781b9296e583eddb0a2da.webp"
                        alt="3D Graphic"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-800 opacity-50"></div>
                <div className="relative z-10 p-8 text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Welcome to ITIpathfinder</h1>
                    <p className="text-lg mb-8">Discover a path to a better career with our expert guidance.</p>
                </div>
            </div>

            {/* Login Form Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-white border rounded-2xl">
                <div className="w-full max-w-md mx-auto bg-white rounded-lg p-4 border">
                    <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                        >
                            Login
                        </button>
                        <p className="mt-4 text-center text-gray-600">
                            OR
                        </p>
                        <Link to="/signup" className="block text-center text-blue-500 hover:text-blue-700 mt-4">
                            Signup Page
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
