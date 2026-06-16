const fs = require("fs");
const pdfParse = require("pdf-parse");
const prisma = require("../prismaClient");
const {
  generateSummary,
  generateKeyPoints,
  generateQuiz,
} = require("../services/geminiService");

const getHome = (req, res) => {
  res.send("AI Study Assistant Backend");
};

async function getLatestDocument() {
  return await prisma.document.findFirst({
    orderBy: {
      id: "desc",
    },
  });
}

const getSummary = async (req, res) => {
  try {
    const document = await getLatestDocument();

    res.json({
      summary: document.summary,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Failed to fetch summary",
    });
  }
};

const getKeyPoints = async (req, res) => {
  try {
    const document = await getLatestDocument();

    res.json({
      keyPoints: document.keyPoints,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Failed to fetch key points",
    });
  }
};

const getQuiz = async (req, res) => {
  try {

    const document =
      await getLatestDocument();

    res.json({
      quiz: document.quiz,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error:
        "Failed to fetch quiz",
    });

  }
};

const getAsk = (req, res) => {
  res.json({
    answer: "This is a Sample answer",
  });
};

const postAsk = (req, res) => {
  const question = req.body.question;

  res.json({
    answer: `You asked: ${question}`,
  });
};

const uploadPDF = async (req, res) => {
  console.log("Upload started");
  try {
    const dataBuffer = fs.readFileSync(req.file.path);

    const pdfData = await pdfParse(dataBuffer);

    const extractedText = pdfData.text
      .replace(/\0/g, "")
      .replace(/[\x00-\x1F\x7F]/g, "")
      .trim();

    let summary = "Summary generation unavailable.";

    try {
      summary = await generateSummary(extractedText);
    } catch (error) {
      console.log("Summary Error:", error);
    }

    let keyPoints = "Key point generation unavailable.";

    try {
      keyPoints = await generateKeyPoints(extractedText);
    } catch (error) {
      console.log("Key Points Error:", error);
    }

    let quiz = "Quiz generation unavailable.";

    try {
      quiz = await generateQuiz(extractedText);
    } catch (error) {
      console.log("Quiz Error:", error);
    }

    const cleanSummary = summary
      .replace(/\0/g, "")
      .replace(/[\x00-\x1F\x7F]/g, "")
      .trim();

    const cleanKeyPoints = keyPoints
      .replace(/\0/g, "")
      .replace(/[\x00-\x1F\x7F]/g, "")
      .trim();

    const cleanQuiz = quiz
      .replace(/\0/g, "")
      .replace(/[\x00-\x1F\x7F]/g, "")
      .trim();

    console.log("About to save document");

    await prisma.document.create({
      data: {
        filename: req.file.originalname,
        extractedText,
        summary: cleanSummary,
        keyPoints: cleanKeyPoints,
        quiz: cleanQuiz,
      },
    });

    console.log("Document saved");

    res.json({
      message: "PDF uploaded successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Failed to read PDF",
    });
  }
};

module.exports = {
  getHome,
  getSummary,
  getKeyPoints,
  getQuiz,
  getAsk,
  postAsk,
  uploadPDF,
};
