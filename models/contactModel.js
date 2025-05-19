import mongoose, { Mongoose } from "mongoose";

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
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
