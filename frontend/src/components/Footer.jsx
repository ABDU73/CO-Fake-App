import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon


export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      {/* Footer Content */}
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        


        {/* Footer Text */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <p className="text-gray-400">
            Co. is a leading provider of innovative solutions. We are committed to excellence and customer satisfaction. Our team works tirelessly to deliver high-quality products and services to our clients. For more information about our offerings or to get in touch with us, please Contact Us.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <ul className="flex space-x-6 justify-center sm:justify-center">
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram fontSize="30px" className="hover:text-pink-500 transition" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaXTwitter fontSize="30px" className="hover:text-blue-400 transition" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <CiLinkedin fontSize="30px" className="hover:text-blue-700 transition" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook fontSize="30px" className="hover:text-blue-600 transition" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 text-center py-4 mt-8">
       
        <div className="mt-2">
            <p className="text-gray-400 text-sm ">
                &copy; 2025. Created by{' '}
                <span className="font-semibold text-white">ABDU 
                </span>
            </p>
            <div className=" mt-5 flex justify-center items-center">
                <a
                href="https://github.com/ABDU73" // Replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300"
                >
                <FaGithub fontSize="30px" /> {/* Centered GitHub Icon */}
                </a>
                <a
                    href="https://www.linkedin.com/in/abdu-gl-15537b334/" // Replace with your LinkedIn URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                    >
                    <CiLinkedin fontSize="30px" /> {/* Centered LinkedIn Icon */}
                </a>
            </div>
        </div>
      </div>
       
    </footer>
  );
};
