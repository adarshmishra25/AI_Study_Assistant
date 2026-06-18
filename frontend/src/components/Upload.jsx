import axios from "axios";

export const Upload = ({ setDocuments }) => {
  const handleUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("pdf", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
      );

      localStorage.setItem("currentDocumentId", response.data.documentId);

      const uploadedDocuments = JSON.parse(
        localStorage.getItem("uploadedDocuments") || "[]",
      );

      uploadedDocuments.push(response.data.documentId);

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

      console.log(response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <label className="upload-btn">
      📄 Upload PDF
      <input type="file" accept=".pdf" hidden onChange={handleUpload} />
    </label>
  );
};
