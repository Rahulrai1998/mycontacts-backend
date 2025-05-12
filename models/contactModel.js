import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export const ContactSchemaModel = mongoose.model("contacts", contactSchema);
