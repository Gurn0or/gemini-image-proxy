const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.post("/generate", async (req, res) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${process.env.API_KEY}`,
      req.body,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({
      error: true,
      message: err?.response?.data || err.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
