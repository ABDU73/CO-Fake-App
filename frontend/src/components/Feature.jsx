import React from 'react';
import { TbNetwork } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbClockEdit } from "react-icons/tb";

export const Feature = () => {
  return (
    <section className="bg-gradient-to-t from-blue-300 via-blue-500 to-blue-900 p-4 text-white relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative text-center z-10 mb-12 animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-4xl sm:text-5xl font-extrabold ">Our Features</h1>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12">
        {/* Feature 1 */}
        <div className="feature text-center p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-2 hover:shadow-xl animate__animated animate__fadeIn animate__delay-2s">
          <div className="icon mb-4 flex justify-center items-center text-blue-500 hover:text-blue-300">
            <TbNetwork size="60px" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Online Work</h2>
          <p className="font-light text-gray-300">
            Online work offers flexibility, reduces commute time, and gives access to global talent. It allows for more efficient collaboration but requires balancing work and communication challenges.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature text-center p-6  rounded-lg shadow-lg  transition-all duration-300 transform hover:scale-105 hover:translate-y-2 hover:shadow-xl animate__animated animate__fadeIn animate__delay-3s">
          <div className="icon mb-4 flex justify-center items-center text-blue-500 hover:text-blue-300">
            <HiOutlineBuildingOffice2 size="60px" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Comfortable Place</h2>
          <p className="font-light text-gray-300">
            A comfortable workspace boosts productivity. We provide ergonomic furniture, natural light, and spaces for collaboration, all to enhance well-being and creativity.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature text-center p-6  rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-2 hover:shadow-xl animate__animated animate__fadeIn animate__delay-4s">
          <div className="icon mb-4 flex justify-center items-center text-blue-500 hover:text-blue-300">
            <TbClockEdit size="60px" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Hours of Your Choice</h2>
          <p className="font-light text-gray-300">
            We offer flexible hours to help employees balance work and personal life. This flexibility leads to higher satisfaction, reduced stress, and increased productivity.
          </p>
        </div>
      </div>


    </section>
  );
};
