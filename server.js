import express from "express";
import dotenv from "dotenv/config";
import router from "./routes/contactRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use("/api/contacts", router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
