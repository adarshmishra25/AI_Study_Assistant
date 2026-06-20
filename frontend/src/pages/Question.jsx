import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

export const Questions = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const askQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const documentId = localStorage.getItem("currentDocumentId");

      const response = await axios.post(
        `http://localhost:5000/ask/${documentId}`,
        {
          question,
        },
      );

      setAnswer(response.data.answer);
    } catch (error) {
      console.log(error);

      if (error.response?.status === 429) {
        setError("AI quota exceeded. Please try later.");
      } else {
        setError("Failed to answer question.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="outputs-page">
      <h1>Ask Questions</h1>

      <input
        className="enter"
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            askQuestion();
          }
        }}
        placeholder="Ask a question..."
      />

      <button className="ask-btn" onClick={askQuestion} disabled={loading}>
        {loading ? "⏳ Thinking..." : "Ask"}
      </button>

      {error && (
        <p
          style={{
            color: "red",
          }}
        >
          {error}
        </p>
      )}

      <div className="answer-card">
        <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
    </div>
  );
};
