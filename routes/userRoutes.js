import express, { Router } from "express";
import {
  currentUser,
  loginUser,
  registerUser,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/current-user", currentUser);

export default userRouter;
