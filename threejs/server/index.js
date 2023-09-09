import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();

// middleware setup
const app = express();
app.use(cors());
// setting the limit
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALLE" });
});

app.listen(8080, () => console.log("server is runnign on 8000 "));
