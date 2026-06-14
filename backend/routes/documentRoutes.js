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
} = require(
    "../controllers/documentController"
);

const router = express.Router();

const storage =
    multer.diskStorage({destination: (req,file,cb) => {
            cb(null,"uploads/");
        },
        filename: (req,file,cb) => {
            cb(null,Date.now() +"-" +file.originalname);
        },
    });

const upload =
    multer({
        storage,
    });

router.get(
    "/",
    getHome
);

router.get(
    "/summary",
    getSummary
);

router.get(
    "/keypoints",
    getKeyPoints
);

router.get(
    "/quiz",
    getQuiz
);

router.get(
    "/ask",
    getAsk
);

router.post(
    "/ask",
    postAsk
);

router.post(
    "/upload",
    upload.single("pdf"),
    uploadPDF
);

module.exports = router;