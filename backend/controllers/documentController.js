const fs = require("fs");
const pdfParse = require("pdf-parse");
const prisma = require("../prismaClient");

const {
  generateStudyMaterials,
  askQuestion,
} = require("../services/geminiService");

const getHome = (req, res) => {
  res.send("AI Study Assistant Backend");
};

async function getDocumentById(id) {
  return await prisma.document.findUnique({
    where: {
      id: Number(id),
    },
  });
}

const getDocument = async (req, res) => {
  try {
    const document = await getDocumentById(
      req.params.id
    );

    if (!document) {
      return res.status(404).json({
        error: "Document not found",
      });
    }

    res.json({
      id: document.id,
      filename: document.filename,
    });
  } catch (error) {

    res.status(500).json({
      error: "Failed to fetch document",
    });
  }
};

const getSummary = async (req, res) => {
  try {
    const document = await getDocumentById(
      req.params.id
    );

    res.json({
      summary: document.summary,
    });
  } catch (error) {

    res.status(500).json({
      error: "Failed to fetch summary",
    });
  }
};

const getKeyPoints = async (req, res) => {
  try {
    const document = await getDocumentById(
      req.params.id
    );

    res.json({
      keyPoints: document.keyPoints,
    });
  } catch (error) {

    res.status(500).json({
      error: "Failed to fetch key points",
    });
  }
};

const getQuiz = async (req, res) => {
  try {
    const document = await getDocumentById(
      req.params.id
    );

    res.json({
      quiz: document.quiz,
    });
  } catch (error) {

    res.status(500).json({
      error: "Failed to fetch quiz",
    });
  }
};

const getAsk = (req, res) => {
  res.json({
    answer: "This is a Sample answer",
  });
};

const postAsk = async (req, res) => {
  try {
    const question = req.body.question;

    const document = await getDocumentById(
      req.params.id
    );

    const answer = await askQuestion(
      document.extractedText,
      question
    );

    res.json({
      answer,
    });
  } catch (error) {

    res.status(500).json({
      error: "Failed to answer question",
    });
  }
};

const uploadPDF = async (req, res) => {

  try {
    const pdfData = await pdf(req.file.buffer);

    const extractedText = pdfData.text
      .replace(/\0/g, "")
      .replace(/[\x00-\x1F\x7F]/g, "")
      .trim();

    let studyMaterials = `
===SUMMARY===
Summary unavailable.

===KEY_POINTS===
Key points unavailable.

===QUIZ===
Quiz unavailable.
`;

    try {
      studyMaterials =
        await generateStudyMaterials(
          extractedText
        );
    } catch (error) {
      console.log(
        "Study Materials Error:",
        error
      );
    }

    if (
      !studyMaterials.includes(
        "===SUMMARY==="
      ) ||
      !studyMaterials.includes(
        "===KEY_POINTS==="
      ) ||
      !studyMaterials.includes(
        "===QUIZ==="
      )
    ) {
      throw new Error(
        "Invalid Gemini response format"
      );
    }

    const summary = studyMaterials
      .split("===KEY_POINTS===")[0]
      .replace("===SUMMARY===", "")
      .trim();

    const keyPoints = studyMaterials
      .split("===KEY_POINTS===")[1]
      .split("===QUIZ===")[0]
      .trim();

    const quiz = studyMaterials
      .split("===QUIZ===")[1]
      .trim();

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

    const document =
      await prisma.document.create({
        data: {
          filename:
            req.file.originalname,
          extractedText,
          summary: cleanSummary,
          keyPoints: cleanKeyPoints,
          quiz: cleanQuiz,
        },
      });


    res.json({
      message:
        "PDF uploaded successfully",
      documentId: document.id,
    });
  } catch (error) {

    res.status(500).json({
      error: "Failed to process PDF",
    });
  }
};

const deleteDocument = async (
  req,
  res
) => {
  try {
    await prisma.document.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message:
        "Document deleted successfully",
    });
  } catch (error) {

    res.status(500).json({
      error: "Failed to delete document",
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
  getDocument,
  deleteDocument,
};