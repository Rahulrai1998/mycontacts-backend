import asyncHandler from "express-async-handler";

//@description: register new user
//@route: POST /api/contacts/register
//@access: Public
export const registerUser = asyncHandler(async (req, res) => {
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
