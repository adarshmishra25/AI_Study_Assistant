const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

app.use(cors()); 
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

app.get("/", (req, res) => {
    res.send("AI Study Assistant Backend");
});

app.get("/summary", (req, res) => {
    res.json({
        summary: "This PDF contains React Router concepts."
    });
});

app.get("/keypoints", (req, res) => {
    res.json({
        points: [
            "React",
            "Express",
            "Axios"
        ]
    });
});

app.get("/quiz", (req, res) => {
    res.json({
        question: "What is React?"
    });
});

app.get("/ask", (req, res) => {
    res.json({
        answer: "This is a Sample answer"
    });
});

app.post("/ask", (req, res) => {
  const question = req.body.question;

  res.json({
    answer: `You asked: ${question}`
  });
});




const upload = multer({
  storage: storage,
});

app.post(
  "/upload",
  upload.single("pdf"),
  (req, res) => {
    res.json({
      message: "PDF uploaded successfully",
      file: req.file.filename,
    });
  }
);




app.listen(5000, () => {
    console.log("Server running on port 5000");
});