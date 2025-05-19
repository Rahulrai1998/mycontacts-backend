import express, { Router } from "express";
import {
  createContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
} from "../controllers/contactsController.js";
import validateToken from "../middleware/validateTokenHandler.js";

const contactRouter = Router();
contactRouter.use(validateToken);
contactRouter.route("/").get(getContacts).post(createContact);
contactRouter
  .route("/:id")
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

export default contactRouter;
