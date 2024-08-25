import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link, useOutletContext } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  // Access setIsAuthenticated from the Outlet context
  // const [isAuthenticated, setIsAuthenticated] = useOutletContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3333/signup", {
        email,
        password,
      });

      if (response.status === 200) {
        if (response.data === "exist") {
          alert("User already exists");
        } else if (response.data === "notexist") {
          // If the user is successfully signed up, update the authentication status and navigate to home
          setIsAuthenticated(true);
          navigate("/home", { state: { id: email } });
        }
      } else {
        alert("Error creating user");
      }
    } catch (error) {
      console.error(error);
      alert("Error creating user");
    }
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row h-screen bg-gray-100 p-8">
      {/* 3D Image Section */}

      {/* Signup Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white rounded-2xl">
        <div className="w-full max-w-md mx-auto bg-white rounded-lg p-4 border">
          <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>
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
                minLength={3}
                maxLength={8}
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
              Signup
            </button>
            <p className="mt-4 text-center text-gray-600">
              OR
            </p>
            <Link to="/" className="block text-center text-blue-500 hover:text-blue-700 mt-4">
              Login Page
            </Link>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-200 relative rounded-2xl">
        <div className="absolute inset-0">
          {/* Replace with your 3D image link */}
          <img
            src="https://3dbay.io/files/preview/1280x854/11631291445u9coqwepeefgswwqm3dfba0pds9aytfitduxblwlffpccr6tkvuxrchail2dyxlrc3dla89ngqntz5bcypnxrzchg62e1wpa8c0o.png"
            alt="3D Graphic"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-800 opacity-50"></div>
        <div className="relative z-10 p-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Join Us Today</h1>
          <p className="text-lg mb-8">Create your account to explore the best career paths with us.</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
