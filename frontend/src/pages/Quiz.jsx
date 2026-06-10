import { useState } from "react";
import axios from "axios";

export const Quiz = () => {
  const [quiz, setQuiz] = useState("");

  const getQuiz = async () => {
    const response = await axios.get(
      "http://localhost:5000/quiz"
    );

    setQuiz(response.data.question);
  };

  return (
    <div>
      <h1>Quiz Page</h1>

      <button onClick={getQuiz}>
        Fetch Questions
      </button>

      <p>{quiz}</p>
    </div>
  );
};