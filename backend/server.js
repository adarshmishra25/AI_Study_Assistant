const express = require("express");
const cors = require("cors");

const documentRoutes = require("./routes/documentRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(documentRoutes);

app.listen(5000, () => { console.log("Server running on port 5000")});