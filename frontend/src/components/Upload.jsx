import { useState } from "react";
import axios from "axios";

export const Upload = ({ setDocuments, setSelectedId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setLoading(true);
    setError("");

    const formData = new FormData();

    formData.append("pdf", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
      );

      localStorage.setItem("currentDocumentId", response.data.documentId);

      setSelectedId(response.data.documentId);

      const uploadedDocuments = JSON.parse(
        localStorage.getItem("uploadedDocuments") || "[]",
      );

      uploadedDocuments.unshift(response.data.documentId);

      localStorage.setItem(
        "uploadedDocuments",
        JSON.stringify(uploadedDocuments),
      );

      setDocuments((prevDocs) => [
        {
          id: response.data.documentId,
          name: file.name,
        },
        ...prevDocs,
      ]);

    } catch (error) {
      console.error("Upload failed:", error);

      if (error.response?.status === 429) {
        setError("AI quota exceeded. Please try again later.");
      } else {
        setError("Failed to process PDF.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <label className="upload-btn">
        {loading ? "⏳ Processing PDF..." : "📄 Upload PDF"}

        <input
          type="file"
          accept=".pdf"
          hidden
          onChange={handleUpload}
          disabled={loading}
        />
      </label>

      {error && (
        <p
          style={{
            color: "red",
            marginTop: "10px",
          }}
        >
          {error}
        </p>
      )}
    </>
  );
};
