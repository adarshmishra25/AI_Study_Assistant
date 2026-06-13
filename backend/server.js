const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = require("./prismaClient");
const cors = require("cors");

const documentRoutes = require("./routes/documentRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(documentRoutes);

async function testPrisma() {
  const documents =
    await prisma.document.findMany();

  console.log(documents);
}

testPrisma();

app.listen(5000, () => { console.log("Server running on port 5000")});