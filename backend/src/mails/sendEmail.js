import { received_Contact_Message, sent_Contact_Message, received_Apply_Message, sent_Apply_Message } from "./emailTemplates.js";
import { getFileExtension } from "../config/multer.js";
import { nodeMailer } from "./nodeMailer.config.js";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

export const  clientContact = async (name, email) => {
  try {
    const emailContent = received_Contact_Message
      .replace("{user_name}", name)
      .replace("{user_email}", email);

    const response = await nodeMailer(email, "Dear seeker!", emailContent);
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error(`Error sending to email: ${error.message}`);
  }
};

export const adminContact = async (name, email, message) => {
  try {
    const emailContent = sent_Contact_Message
      .replace("{user_name}", name)
      .replace("{user_email}", email)
      .replace("{message}", message);

    const response = await nodeMailer(process.env.NODEMAILER_EMAIL, "From the seeker!", emailContent);
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error(`Error sending to email: ${error.message}`);
  }
};

export const clientApply = async (name, email, position) => {
  try {
    const dateSubmitted = new Date().toLocaleDateString();
    const emailContent = received_Apply_Message
      .replace("{user_name}", name)
      .replace("{user_email}", email)
      .replace("{position}", position)
      .replace("{date_submitted}", dateSubmitted);

    const response = await nodeMailer(email, "Dear seeker!", emailContent);
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error(`Error sending to email: ${error.message}`);
  }
};

export const adminApply = async (name, email, phoneNum, position, qualifications, resume, firstTime, workRemotely, interest, experience, skills, motivation, future, companyCulture, message) => {
  try {
    const attachment = resume ? [{
      filename: resume.originalname || `resume${getFileExtension(resume.mimetype)}`,
      content: resume.buffer,
    }] : [];

    const dateSubmitted = new Date().toLocaleDateString(); // Use the current date

    const emailContent = sent_Apply_Message
      .replace("{user_name}", name)
      .replace("{user_email}", email)
      .replace("{user_phone}", phoneNum)
      .replace("{position}", position)
      .replace("{qualifications}", qualifications)
      .replace("{firstTime}", firstTime)
      .replace("{workRemotely}", workRemotely)
      .replace("{interest}", interest)
      .replace("{experience}", experience)
      .replace("{skills}", skills)
      .replace("{motivation}", motivation)
      .replace("{future}", future)
      .replace("{company_culture}", companyCulture)
      .replace("{message}", message)
      .replace("{date_submitted}", dateSubmitted);

    const response = await nodeMailer(process.env.NODEMAILER_EMAIL, "From the seeker!", emailContent, attachment);
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error(`Error sending to email: ${error.message}`);
  }
};
