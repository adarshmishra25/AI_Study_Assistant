require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

function getModel() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not defined in environment variables");
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  return genAI.getGenerativeModel({ model: "gemini-3.6-flash" });
}

const generateStudyMaterials = async (text) => {
  const model = getModel();
  const prompt = `
You are an AI Study Assistant.

Analyze the following material.

Return EXACTLY in this format:

===SUMMARY===
Write a brief summary of the document and explain everything with minimum of 10 lines.

===KEY_POINTS===
Write important bullet points.
Each bullet point must start with "- ".

===QUIZ===
Write important questions and number them.
Do not provide answers.

Do not include any additional text before or after these sections.

TEXT:
${text}
`;

  const result = await model.generateContent(prompt);
  const response = result.response.text();
  return response;
};

async function askQuestion(text, question) {
  const model = getModel();
  const prompt = `
Answer the question using
only the information in
the document.

Document:

${text}

Question:

${question}
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = {
  generateStudyMaterials,
  askQuestion,
};
