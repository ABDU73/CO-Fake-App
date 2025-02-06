import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { PiInfoBold } from "react-icons/pi";

export const FaQ = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="p-6 sm:p-4 md:p-6 lg:p-12">

      {/* Header Section */}
      <div className="flex items-center justify-between mb-6 sm:mb-4">
        <h1 className="text-3xl sm:text-2xl font-semibold text-gray-800">FaQs</h1>
        <PiInfoBold color='#1F4788' size="30px" />
      </div>

      {/* FAQ Section */}
      <div className="space-y-6 sm:space-y-4">
        {/* FAQ 1 */}
        <div className="border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer py-3 text-xl sm:text-lg font-medium text-gray-700"
            onClick={() => toggleFAQ(0)}
          >
            <h2>Who We Are?</h2>
            <IoIosArrowDropdown className={`transform transition-transform ${activeFAQ === 0 ? 'rotate-180' : ''}`} size="24px" />
          </div>
          {activeFAQ === 0 && (
            <div className="pl-6 sm:pl-4 text-gray-600">
              <p>[Your Company Name] is a [industry or profession]. Founded in [Year], we specialize in [specific products or services].</p>
            </div>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer py-3 text-xl sm:text-lg font-medium text-gray-700"
            onClick={() => toggleFAQ(1)}
          >
            <h2>Our Mission and Vision</h2>
            <IoIosArrowDropdown className={`transform transition-transform ${activeFAQ === 1 ? 'rotate-180' : ''}`} size="24px" />
          </div>
          {activeFAQ === 1 && (
            <div className="pl-6 sm:pl-4 text-gray-600">
              <p>Our mission is to [briefly describe your company's mission or goal].</p>
            </div>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer py-3 text-xl sm:text-lg font-medium text-gray-700"
            onClick={() => toggleFAQ(2)}
          >
            <h2>What We Do?</h2>
            <IoIosArrowDropdown className={`transform transition-transform ${activeFAQ === 2 ? 'rotate-180' : ''}`} size="24px" />
          </div>
          {activeFAQ === 2 && (
            <div className="pl-6 sm:pl-4 text-gray-600">
              <p>We offer [describe your products or services]. Our team of [describe your team] works tirelessly to ensure that our customers receive the best possible [product/service].</p>
            </div>
          )}
        </div>

        {/* FAQ 4 */}
        <div className="border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer py-3 text-xl sm:text-lg font-medium text-gray-700"
            onClick={() => toggleFAQ(3)}
          >
            <h2>Our Values and Principles</h2>
            <IoIosArrowDropdown className={`transform transition-transform ${activeFAQ === 3 ? 'rotate-180' : ''}`} size="24px" />
          </div>
          {activeFAQ === 3 && (
            <div className="pl-6 sm:pl-4 text-gray-600">
              <p>At [Your Company Name], we believe in [describe your company's values or principles]. These values guide us in all our decisions and shape our culture.</p>
            </div>
          )}
        </div>

        {/* FAQ 5 */}
        <div className="border-b pb-4">
          <div
            className="flex justify-between items-center cursor-pointer py-3 text-xl sm:text-lg font-medium text-gray-700"
            onClick={() => toggleFAQ(4)}
          >
            <h2>Our Achievements</h2>
            <IoIosArrowDropdown className={`transform transition-transform ${activeFAQ === 4 ? 'rotate-180' : ''}`} size="24px" />
          </div>
          {activeFAQ === 4 && (
            <div className="pl-6 sm:pl-4 text-gray-600">
              <p>Since our inception, we have [describe any significant achievements, awards, or milestones].</p>
            </div>
          )}
        </div>

        {/* FAQ 6 */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer py-3 text-xl sm:text-lg font-medium text-gray-700"
            onClick={() => toggleFAQ(5)}
          >
            <h2>Contact Us</h2>
            <IoIosArrowDropdown className={`transform transition-transform ${activeFAQ === 5 ? 'rotate-180' : ''}`} size="24px" />
          </div>
          {activeFAQ === 5 && (
            <div className="pl-6 sm:pl-4 text-gray-600">
              <p>We'd love to hear from you! Please reach out to us at [contact information].</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
