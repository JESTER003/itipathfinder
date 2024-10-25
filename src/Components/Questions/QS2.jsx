import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const QS2 = () => {
  const [interest, setInterest] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (interest !== "") {
      navigate("/cities");
    }
    else {
      alert("Please select an ITI branch before proceeding.");
    }
  };
  return (
    <div className="min-h-fit w-full flex items-center justify-center  md:flex-nowrap p-2 ">
      <div className="container mx-auto p-4 flex justify-center items-center min-h-[80vh] flex-col md:flex-row lg:flex-row xl:flex-row ">
        <div className="w-full p-2 flex items-center justify-end lg:mr-5">
          <div className="w-full mx-auto p-4">
            <p className="text-lg lg:text-3xl font-bold mb-4 text-end">In which branch of ITI you are interested ?</p>
            <div className="flex justify-end">
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="p-2 text-lg border-2 border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 lg:w-[500px]"
              >
                <option value="">Select an option</option>
                <option value="COMPUTER OPERATOR CUM PROGRAMMING ASST.">COMPUTER OPERATOR CUM PROGRAMMING ASST.</option>
                <option value="Gas Pipe Fitter">Gas Pipe Fitter</option>
                <option value="ADVANCE WELDING">ADVANCE WELDING</option>
                <option value="ARMATURE MOTOR REWINDING">ARMATURE MOTOR REWINDING</option>
                <option value="ATTENDENT OPERATOR CHEMICAL PLANT">ATTENDENT OPERATOR CHEMICAL PLANT</option>
                <option value="BINDING AND PACKAGING">BINDING AND PACKAGING</option>
                <option value="HARDWARE TECH. NETWORK & ADM">HARDWARE TECH. NETWORK & ADM</option>
                <option value="CARPENTARY">CARPENTARY</option>
                <option value="OTHER">OTHER</option>
              </select>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSubmit}
                to="/cities"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
                Next</button>

              <Link to="/qone" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded ml-5">
                Previous
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full p-4 flex justify-start items-center lg:ml-5">
          <dotlottie-player
            src="https://lottie.host/eb4aad3c-f485-4db6-8725-7a12119669f8/quSr154lD0.json"
            background="transparent"
            speed="1"
            style={{ width: 500, height: 500 }}
            loop autoplay></dotlottie-player>
        </div>

      </div>
    </div>
  )
}

export default QS2