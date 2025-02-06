import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();
// Create the transporter object for Nodemailer
const transporter = nodemailer.createTransport({ 
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.NODEMAILER_EMAIL, // Your Ethereal email
    pass: process.env.pass, // Your Ethereal password
  },
  logger: true, 
  debug: true

});

// Utility function to send a test email
export const nodeMailer = (to, subject, html, attachment) => {
  return transporter.sendMail({
    from: process.env.NODEMAILER_EMAIL, // sender address
    to: to, // receiver address
    subject: subject, // Subject line
    html: html, // HTML body
    attachments: attachment ? [attachment] : [], // Optional attachment
  });
};


// it done