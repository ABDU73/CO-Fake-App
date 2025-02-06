import { Schema, model } from 'mongoose';

const clientSchema = new Schema({
  first_name: { type: String, required: true },
  middle_name: { type: String },
  last_name: { type: String, required: true },
  user_email: { type: String, required: true },
  user_phone: { type: String, required: true },
  position: { type: String, required: true },
  qualifications: { type: String, required: true },
  resume: { type: Buffer, required: true },
  firstTime: { type: String, required: true },
  workRemotely: { type: String, required: true },
  interest: { type: String, required: true },
  experience: { type: String, required: true },
  skills: { type: String, required: true },
  motivation: { type: String, required: true },
  future: { type: String, required: true },
  companyCulture: { type: String, required: true },
  message: { type: String, required: true },

}, { timestamps: true });

const Client = model('Client', clientSchema);

export default Client;
