import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const QS1 = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      navigate("/qtwo");
    }
    else{
      alert("Input something")
    }
  };

  return (
    <div className="min-h-fit w-full flex items-center justify-center  md:flex-nowrap p-2 ">
      <div className="container mx-auto p-4 flex justify-center items-center min-h-[80vh] flex-col md:flex-row lg:flex-row xl:flex-row ">
        <div className="w-full p-4 flex justify-center items-center lg:ml-5">
          <dotlottie-player
            src="https://lottie.host/a8514640-a286-4c85-a616-49d60ed8a5f0/NLvircMfjd.json"
            background="transparent"
            speed="1"
            style={{ width: 500, height: 500 }}
            loop
            autoplay
          />
        </div>
        <div className="w-full p-2 flex items-center justify-center lg:mr-5">
          <div className="w-full mx-auto p-4">
            <p className="text-lg lg:text-3xl font-bold mb-4">Tell me About yourself what's your name?</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              className="w-full p-2 text-xl border-2 border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <div className="mt-4 flex justify-start">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QS1;