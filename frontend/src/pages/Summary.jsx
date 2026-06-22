import { useState, useEffect } from "react";
import axios from "axios";
import { Typewriter } from "../components/Typewriter";

export const Summary = () => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const documentId = localStorage.getItem("currentDocumentId");

        const response = await axios.get(
          `https://ai-study-assistant-vssr.onrender.com/summary/${documentId}`,
        );

        setSummary(response.data.summary);
      } catch (error) {
        console.log(error);

        setError("Failed to load summary.");
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Generating Summary...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="outputs-page">
        <h1>Summary</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="outputs-page">
      <h1>Summary</h1>

      <div
        className="content-card "
        style={{
          whiteSpace: "pre-wrap",
        }}
      >
        <Typewriter text={summary} />
      </div>
    </div>
  );
};
