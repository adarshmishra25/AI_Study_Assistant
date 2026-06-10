import { useState } from "react";
import axios from "axios";

export const Questions = () => {
  const [question, setQuestion] = useState("");

  const getQuestion = async () => {
    const response = await axios.get(
      "http://localhost:5000/ask"
    );

    setQuestion(response.data.answer);
  };

  return (
    <div>
      <h1>Question Page</h1>

      <button onClick={getQuestion}>
        Fetch Answer
      </button>

      <p>{question}</p>
    </div>
  );
};