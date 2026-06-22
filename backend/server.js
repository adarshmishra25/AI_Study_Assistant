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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});