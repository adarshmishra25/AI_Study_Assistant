import { useState, useEffect } from "react";
import "../App.css";

import { Header } from "../components/Header";
import { Upload } from "../components/Upload";
import { Documents } from "../components/Documents";
import { Actions } from "../components/Actions";
import axios from "axios";

export const Home = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedId, setSelectedId] = useState(
    localStorage.getItem("currentDocumentId"),
  );

  useEffect(() => {
    const loadDocuments = async () => {
      const ids = JSON.parse(localStorage.getItem("uploadedDocuments") || "[]");

      if (ids.length === 0) return;

      try {
        const loadedDocuments = [];

        for (const id of ids) {
          const response = await axios.get(
            `https://ai-study-assistant-vssr.onrender.com/documents/${id}`,
          );

          loadedDocuments.unshift({
            id: response.data.id,
            name: response.data.filename,
          });
        }

        setDocuments(loadedDocuments);
      } catch (error) {
        console.log(error);
      }
    };

    loadDocuments();
  }, []);

  const removeDocument = async (indexToRemove) => {
    const documentToDelete = documents[indexToRemove];

    await axios.delete(
      `https://ai-study-assistant-vssr.onrender.com/documents/${documentToDelete.id}`,
    );

    const uploadedDocuments = JSON.parse(
      localStorage.getItem("uploadedDocuments") || "[]",
    );

    const updatedIds = uploadedDocuments.filter(
      (id) => id !== documentToDelete.id,
    );

    localStorage.setItem("uploadedDocuments", JSON.stringify(updatedIds));

    const updatedDocuments = documents.filter(
      (_, index) => index !== indexToRemove,
    );

    setDocuments(updatedDocuments);

    const currentDocumentId = localStorage.getItem("currentDocumentId");

    if (Number(currentDocumentId) === documentToDelete.id) {
      if (updatedIds.length > 0) {
        localStorage.setItem(
          "currentDocumentId",
          updatedIds[updatedIds.length - 1],
        );
      } else {
        localStorage.removeItem("currentDocumentId");
      }
    }
  };

  return (
    <div className="main">
      <Header />

      <Upload setDocuments={setDocuments} setSelectedId={setSelectedId} />

      <Documents
        documents={documents}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        removeDocument={removeDocument}
      />

      <Actions />

      <footer className="footer">
        <p>Built by Adarsh Mishra</p>

        <a
          href="https://github.com/adarshmishra25"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/adarsh-mishra-0b0061305/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
};
