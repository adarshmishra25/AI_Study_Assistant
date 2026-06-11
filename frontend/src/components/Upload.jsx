import axios from "axios";

export const Upload = ({ setDocuments }) => {

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    // Update UI
    setDocuments((prevDocs) => [
      ...prevDocs,
      file
    ]);

    // Send file to backend
    const formData = new FormData();

    formData.append("pdf", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData
      );

      console.log(response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <label className="upload-btn">
      📄 Upload PDF

      <input
        type="file"
        accept=".pdf"
        hidden
        onChange={handleUpload}
      />
    </label>
  );
};