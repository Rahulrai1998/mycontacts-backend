import express, { Router } from "express";
const router = Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "All Contacts" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Contact ${req.params.id}` });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: "Create Contact" });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update Contact ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete Contact ${req.params.id}` });
});

export default router;
