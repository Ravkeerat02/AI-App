import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

// Configure the OpenAI API with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define a GET endpoint at "/"
router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALLE routes" });
});

// Define a POST endpoint at "/"
router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    // Generate an image using OpenAI API
    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
