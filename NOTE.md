openai code:

// import OpenAIApi from "openai";

// const openai = new OpenAIApi({
// apiKey:"",
// });

// app.post("/chat", async (req, res) => {
// const { prompt } = req.body;

// try {
// const completion = await openai.completions.create({
// model: "text-davinci-003",
// max_tokens: 512,
// temperature: 0,
// prompt: prompt,
// });
// res.send(completion.data.choices[0].text);
// } catch (error) {
// console.error("Error:", error);
// res.status(500).send("An error occurred");
// }
// });
