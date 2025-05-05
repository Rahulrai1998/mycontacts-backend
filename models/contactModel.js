import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Required!!"],
  },
  email: {
    type: String,
    required: [true, "Email Required!!"],
  },
  phone: {
    type: String,
    required: [true, "Phone Required!!"],
  },
});

export const ContactSchemaModel = mongoose.model(
  "ContactSchemaModel",
  contactSchema
);
