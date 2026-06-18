import { useState } from "react";
import axios from "axios";

export const Questions = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = async () => {
    const documentId = localStorage.getItem("currentDocumentId");

    const response = await axios.post(
      `http://localhost:5000/ask/${documentId}`,
      {
        question,
      },
    );

    setAnswer(response.data.answer);

    setAnswer(response.data.answer);
  };

  return (
    <div>
      <h1>Ask Questions</h1>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={askQuestion}>Ask</button>

      <p>{answer}</p>
    </div>
  );
};
