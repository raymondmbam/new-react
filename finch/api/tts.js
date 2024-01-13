// tts.js
const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const { text } = req.body;

    // Make a request to OpenAI TTS API
    const response = await axios.post(
      "https://api.openai.com/v1/tts",
      {
        model:ttss-1,
        input: text,
        voice: "alloy",
      },
      {
        headers: {
          Authorization: "Bearer {sk-RBYqEpr6MvEwWeWpZ5b5T3BlbkFJEqY2rBXXIjvXDw8BXVS7vercel deploy tts.js}",
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer", // Important for binary data
      }
    );

    // Set the appropriate headers for audio
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Content-Disposition", "attachment; filename=speech.mp3");
    res.send(Buffer.from(response.data, "binary"));
  } catch (error) {
    console.error("Error generating TTS:", error);
    res.status(500).send("Internal Server Error");
  }
};
