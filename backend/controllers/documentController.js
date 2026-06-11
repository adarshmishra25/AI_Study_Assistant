const fs = require("fs");
const pdfParse = require("pdf-parse");

let pdfText = "";
let summary = "";

const getHome = (req, res) => {
  res.send("AI Study Assistant Backend");
};

const getSummary = (req, res) => {
  res.json({
    summary,
  });
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

    pdfText = pdfData.text;

    summary =
      pdfText.substring(0, 300);

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