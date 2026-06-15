const fs = require("fs");
const pdfParse = require("pdf-parse");
const prisma = require("../prismaClient");

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
    const document =
      await getLatestDocument();

    res.json({
      summary:
        document.extractedText.substring(
          0,
          300
        ),
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Failed to fetch summary",
    });
  }
};

const getKeyPoints = (req, res) => {
  res.json({
    points: [
      "React",
      "Express",
      "Axios",
    ],
  });
};

const getQuiz = (req, res) => {
  res.json({
    question: "What is React?",
  });
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
  try {
    const dataBuffer =
      fs.readFileSync(req.file.path);

    const pdfData =
      await pdfParse(dataBuffer);

    const extractedText = pdfData.text;

    await prisma.document.create({
      data: {
        filename: req.file.originalname,
        extractedText,
      },
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