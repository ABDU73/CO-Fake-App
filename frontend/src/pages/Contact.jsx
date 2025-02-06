import React, { useRef, useState } from 'react';
import { MdEmail } from "react-icons/md";
import Swal from 'sweetalert2';
import axios from 'axios';
import { Header } from '../components/Header';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  const sendEmail = async (e) => {
    e.preventDefault();
    
    // Set submitting state to true
    setIsSubmitting(true);

    const formData = new FormData(form.current);  // Prepare the form data

    try {
      const response = await axios.post('http://localhost:5000/api/send-email', {
        user_name: formData.get('user_name'),
        user_email: formData.get('user_email'),
        message: formData.get('message'),
      });

      if (response.status) {
        Swal.fire({
          title: "Done!",
          text: "Message sent successfully!",
          icon: "success",
        });

        form.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong, please try again.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="text-center mb-6">
          <p className="text-2xl font-semibold mb-2">Send Us</p>
          <div className="flex justify-center mb-4">
            <MdEmail color="#1F4788" size="40px" />
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <small className="block mb-2 text-gray-500">Please include any questions about the role or company.</small>
            <textarea
              name="message"
              rows="6"
              placeholder="Your message..."
              required
              className="w-full p-3  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-auto py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting} // Disable the button while submitting
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;