import React, { useState, useRef } from 'react';
import ReactPhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { PiReadCvLogoFill } from "react-icons/pi";
import Swal from 'sweetalert2';
import axios from 'axios';

import { Header } from '../components/Header';

const Apply = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    user_email: '',
    user_phone: '',
    position: '',
    qualifications: '',
    resume: null,
    firstTime: '',
    workRemotely: '',
    interest: '',
    experience: '',
    skills: '',
    motivation: '',
    future: '',
    companyCulture: '',
    message: ''
  });

  // Handle next step
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Handle previous step
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevData => ({
      ...prevData,
      resume: file
    }));
  };

  // Send the form data
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();

    // Append form data (including file)
    Object.keys(formData).forEach((key) => {
      if (key === 'resume' && formData[key]) {
        data.append(key, formData[key]); // Append the file as form-data
      } else {
        data.append(key, formData[key]); // Append normal text fields
      }
    });

    try {
      const response = await axios.post('http://localhost:5000/api/send-application', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status) {
        Swal.fire({
          title: 'Application Sent!',
          text: 'Your application has been submitted successfully.',
          icon: 'success',
        });
        form.current.reset(); // Reset the form after successful submission
        setFormData({
          first_name: '',
          middle_name: '',
          last_name: '',
          user_email: '',
          user_phone: '',
          position: '',
          qualifications: '',
          resume: null,
          firstTime: '',
          workRemotely: '',
          interest: '',
          experience: '',
          skills: '',
          motivation: '',
          future: '',
          companyCulture: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong, please try again.',
        icon: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto p-6 my-10 flex flex-col md:flex-row items-center shadow-2xl">
          
          {/* Left side (Form) */}
          <div className="max-w-2xl w-full p-6 bg-slate-100 shadow-lg rounded-lg mb-6 md:mb-0">
            <div className="text-center mb-6">
              <p className="text-2xl font-semibold mb-2">Apply for the Job</p>
              <div className="flex justify-center mb-4">
                <PiReadCvLogoFill color="#1F4788" size="40px" />
              </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            {/* Step 1: Name, Email, and Phone Number */}
            {currentStep === 1 && (
               <div className="space-y-4">
               <div className="text-lg font-semibold mb-2">
                 <p>Please fill in your personal information below:</p> {/* Custom instruction */}
               </div>
           
               <div>
                 <input
                   type="text"
                   placeholder="First Name"
                   name="first_name"
                   value={formData.first_name}
                   onChange={handleInputChange}
                   required
                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
               </div>
               <div>
                 <input
                   type="text"
                   placeholder="Middle Name (optional)"
                   name="middle_name"
                   value={formData.middle_name}
                   onChange={handleInputChange}

                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
               </div>
               <div>
                 <input
                   type="text"
                   placeholder="Last Name"
                   name="last_name"
                   value={formData.last_name}
                   onChange={handleInputChange}
                   required
                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
               </div>
               <div>
                 <input
                   type="email"
                   placeholder="Email Address"
                   name="user_email"
                   value={formData.user_email}
                   onChange={handleInputChange}
                   required
                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
               </div>
           
                


              <div className="flex flex-col items-start space-y-3">
               

                {/* Country Selection */}
                 {/* I Copy it From ChatGPT AI. Note react tool don't want to work  {npm i react-select-country-list}*/}
                  <div>
                    <label htmlFor="country" className="block text-lg font-medium text-gray-700 mb-2">
                      Select Your Residing Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                      <option defaultValue={""}></option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Brunei Darussalam">Brunei Darussalam</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cabo Verde">Cabo Verde</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Central African Republic">Central African Republic</option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Democratic People's Republic of Korea">Democratic People's Republic of Korea</option>
                      <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">Dominican Republic</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">Equatorial Guinea</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Eswatini">Eswatini</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Greece">Greece</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-Bissau">Guinea-Bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                      <option value="Korea, Republic of">Korea, Republic of</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia (Federated States of)">Micronesia (Federated States of)</option>
                      <option value="Moldova (Republic of)">Moldova (Republic of)</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="North Macedonia">North Macedonia</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">Russian Federation</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Sudan">South Sudan</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania (United Republic of)">Tanzania (United Republic of)</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-Leste">Timor-Leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela (Bolivarian Republic of)">Venezuela (Bolivarian Republic of)</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </div>
                </div>

         


                <div>
                  <ReactPhoneInput
                    placeholder="Phone Number"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={(phone) => setFormData({ ...formData, user_phone: phone })}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-6 focus:ring-blue-300"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Position and Qualifications */}
            {currentStep === 2 && (
              <div className="space-y-4">

                <div>
                  <label
                    htmlFor="position"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Choose the Position You’re Applying For
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    
                    <option defaultValue={""}></option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

         

                <div>
                  <textarea
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleInputChange}
                    rows="6"
                    placeholder="Please briefly describe your qualifications and experience for this role."
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="flex flex-col items-start space-y-3">
                  {/* Custom Label for File Upload */}
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer py-3 px-8 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transform transition-all duration-200 "
                  >
                    Upload Your Resume (PDF, DOC, DOCX)
                  </label>

                  {/* Hidden File Input */}
                  <input
                    id="file-upload"
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="hidden" // Hide the default file input
                  />

                  {/* Instructions or Additional Text */}
                  <p className="text-sm text-gray-500">
                    Please upload your resume in PDF, DOC, or DOCX format.
                  </p>

                  {/* Optionally display the selected file name */}
                  {formData.resume && (
                    <p className="mt-2 text-sm text-gray-600 font-medium">
                      Selected File: <span className="text-blue-600">{formData.resume.name}</span>
                    </p>
                  )}
                </div>
        

              </div>

              )}
           


            

            {/* Step 3: Remote Work Questions */}
            {currentStep === 3 && (
            <div className="space-y-4">
                {/* Questions Section */}
                
                <div>
                  <label
                    htmlFor="firstTime"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Is this your first time working with us or with a company like ours?
                  </label>
                  <input
                    type="text"
                    name="firstTime"
                    value={formData.firstTime}
                    onChange={handleInputChange}
                    placeholder="Have you worked with us before? (Yes or No)"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="workRemotely"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Why do you want to work remotely?
                  </label>
                  <input
                    type="text"
                    name="workRemotely"
                    value={formData.workRemotely}
                    onChange={handleInputChange}
                    placeholder="Share your reasons for preferring remote work"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                

              
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Why are you interested in this role?
                  </label>
                  <input
                    type="text"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    placeholder="Please explain why you're interested in this role."
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    What relevant experience do you have for this role?
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Describe your relevant experience."
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

             
                <div>
                  <label
                    htmlFor="skills"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    What skills make you a good fit for this position?
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="What skills do you bring to the table?"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="motivation"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    What motivates you to do your best work?
                  </label>
                  <input
                    type="text"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="Explain what drives you in your work."
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

           
                <div>
                  <label
                    htmlFor="future"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Where do you see yourself in the next 2-3 years?
                  </label>
                  <input
                    type="text"
                    name="future"
                    value={formData.future}
                    onChange={handleInputChange}
                    placeholder="Tell us about your career goals and aspirations."
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
              
                <div>
                  <label
                    htmlFor="companyCulture"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    How do you align with our company culture?
                  </label>
                  <input
                    type="text"
                    name="companyCulture"
                    value={formData.companyCulture}
                    onChange={handleInputChange}
                    placeholder="Share how you think your values align with our company culture."
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>


                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Do you have any questions about the role or the company?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    placeholder="Please include any questions you have about the role or the company, especially related to remote work..."

                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>



              </div>
          

            )}

            {/* Step Navigation Buttons */}
            <div className="flex justify-between mt-5 px-4">
              {currentStep > 1 && (
                <button 
                  type="button" 
                  onClick={handlePreviousStep}
                  className="py-3 px-6 bg-orange-700 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                >
                  Previous
                </button>
              )}
              
              {currentStep < 3 ? (
                <button 
                  type="button" 
                  onClick={handleNextStep}
                  className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  Next
                </button>
              ) : (
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="py-3 px-6 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? `Submitting...` : "Submit Application"}
                </button>
              )}
            </div>
      
          </form>
        </div>
      
     
              {/* Right side */}
           <div className="w-full md:w-1/2 flex justify-center items-center md:block relative">
              {/* Step Number */}

              <div className="absolute top-4 right-4 flex items-center bg-blue-500 text-white  text-xl px-6 py-4 rounded-full shadow-xl ">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 animate-bounce w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v12m0 0l-3-3m3 3l3-3" />
                </svg>
                {currentStep === 3 ? `Last Step` : `Step ${currentStep} of 3`}
              </div>
            </div>
           
          </div>
          
    </div>
       
  );
};

export default Apply; 