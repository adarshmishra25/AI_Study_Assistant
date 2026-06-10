const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // <-- add this

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


app.listen(5000, () => {
    console.log("Server running on port 5000");
});