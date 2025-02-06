import { clientContact, adminContact, adminApply, clientApply } from "../mails/sendEmail.js"


export const contact = async (req, res) => {

  const { user_name, user_email, message } = req.body;

    try {
        
      // Validate if all required fields are provided
      if (!user_name || !user_email || !message) {
        return res.status(400).json({ message: 'All fields (name, email, message) are required.' });
      }

      // Send a notification email to the admin
      await adminContact(user_name, user_email, message);
      // Send a confirmation email to the client
      await clientContact(user_name, user_email);
  
      // Send a response back to the frontend
      res.status(201).json({ message: "Messages sent successfully" });
  
    } catch (error) {
      console.error("Error in contact form submission:", error);
      res.status(500).json({ error: "An error occurred while processing your request" });
    }
  }; // it done
  

export const apply = async (req, res) => {
    // Get form fields and resume file (uploaded by multer)
    const { first_name, middle_name, last_name, user_email, user_phone, position, qualifications, firstTime, workRemotely, interest, experience, skills, motivation, future, companyCulture, message } = req.body;
    const resume = req.file;  // Access the file directly

    if (!first_name || !last_name || !user_email || !position || !message) {
      return res.status(400).json({ error: "Missing required fields. Please fill all mandatory fields." });
    }
  
    try {
  
      let fullName = `${first_name} ${middle_name ? middle_name + ' ' : ''} ${last_name}`;
  
      // Send an email to the admin
      await adminApply(fullName, user_email, user_phone, position, qualifications, resume, firstTime, workRemotely, interest, experience, skills, motivation, future, companyCulture, message);
  
      // Send an email to the client
      

      // Call the clientApply function
      await clientApply(fullName, user_email, position);
      // Send success response
      res.status(201).json({ message: "Application sent successfully and saved to the database" });
  
      // Optionally, send an email to the admin
      // I used for the service mailTrap to send an email 
    } catch (error) {
      console.error("Error in apply form submission:", error);
      res.status(500).json({ error: "An error occurred while processing your request" });
    }
  };
    
  // Controller for sending an email to the admin and client
