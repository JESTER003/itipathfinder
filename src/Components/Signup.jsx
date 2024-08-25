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
    <div className="flex justify-center h-screen bg-gray-100 min-h-[100vh] items-center flex-col">
      <h1 className="text-2xl font-bold mb-5">
        Here you can create an account for the right career options.
      </h1>
      <div className="max-w-md p-4 bg-white rounded shadow-md md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 mx-auto h-[50vh] grid place-content-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Signup</h1>
        <form onSubmit={submit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              minLength={3}
              maxLength={8}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Signup
            </button>
          </div>
        </form>

        <br />
        <p className="text-gray-600 text-sm text-center">OR</p>
        <br />

        <Link to="/" className="text-blue-500 hover:text-blue-800 text-center">
          Login Page
        </Link>
      </div>
    </div>
  );
}

export default Signup;
