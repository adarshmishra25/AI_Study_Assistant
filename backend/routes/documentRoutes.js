const express = require("express");
const multer = require("multer");

const {
  getHome,
  getSummary,
  getKeyPoints,
  getQuiz,
  getAsk,
  postAsk,
  uploadPDF,
  getDocument,
  deleteDocument,
} = require("../controllers/documentController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
});

router.get("/", getHome);

router.delete("/documents/:id", deleteDocument);

router.get("/summary/:id", getSummary);

router.get("/keypoints/:id", getKeyPoints);

router.get("/quiz/:id", getQuiz);

router.get("/ask", getAsk);

router.get("/documents/:id", getDocument);

router.post("/ask/:id", postAsk);

router.post("/upload", upload.single("pdf"), uploadPDF);

module.exports = router;
