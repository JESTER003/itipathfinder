import React, { useState } from 'react'
// import "../index.css"
import { Link, useNavigate } from 'react-router-dom';
const QS3 = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      navigate("/home");
    }
    else {
      alert("Input the city first.")
    }
  };
  return (
    <div className=" w-full flex items-center justify-center  md:flex-nowrap p-2">
      <div className="container mx-auto p-4 flex justify-center items-center min-h-[80vh] flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="w-full p-4 flex justify-center items-center lg:ml-5">
          <dotlottie-player
            src="https://lottie.host/83faa46b-31a0-4b5b-9877-6cc5aa2e2024/etUq0cFYbK.json"
            background="transparent"
            speed="1.5"
            style={{ width: 500, height: 500 }}
            loop autoplay></dotlottie-player>
        </div>
        <div className="w-full p-2 flex items-center justify-center lg:mr-5">
          <div className="w-full mx-auto p-4">
            <p className="text-lg lg:text-3xl font-bold mb-4">Which City is your favourite among india ?</p>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              className="w-full p-2 text-xl border-2 border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <div className="mt-4 flex justify-start">
              <button
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
                Next
              </button>

              <Link to="/qtwo" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded ml-5">
                Previous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QS3;