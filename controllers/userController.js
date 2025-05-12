import asyncHandler from "express-async-handler";
import { UserModel } from "../models/userModel.js";
import bcrypt from "bcrypt";

//@description: register new user
//@route: POST /api/contacts/register
//@access: Public
export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!!");
  }

  const userAlreadyExists = await UserModel.findOne({ email });
  if (userAlreadyExists) {
    res.status(400);
    throw new Error("User already exists!");
  }
  //PASSWORD HASHING
  const hashedPassword = await bcrypt.hash(password, 10);

  const registeredUser = await UserModel.create({
    username: username,
    email: email,
    password: hashedPassword,
  });

  if (registeredUser) {
    const { id, email } = registeredUser;
    console.log(`User registered successfully ${registeredUser}`);
    res.status(201).json({ _id: id, email });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
  res.json({ message: "User Created" });
});

//@description: login user
//@route: POST /api/contacts/login
//@access: Public
export const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "User logged in" });
});

//@description: get current user
//@route: GET /api/contacts/currentUser
//@access: Private
export const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "user" });
});
