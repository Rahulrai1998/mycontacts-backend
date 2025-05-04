import express from "express";
import dotenv from "dotenv/config";
import router from "./routes/contactRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use("/api/contacts", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
