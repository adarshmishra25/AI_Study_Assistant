import { useState, useEffect } from "react";
import axios from "axios";

export const Quiz = () => {
  const [quiz, setQuiz] = useState("");

  useEffect(() => {
    const fetchQuiz = async () => {
      const documentId = localStorage.getItem("currentDocumentId");

      const response = await axios.get(`http://localhost:5000/quiz/${documentId}`);

      setQuiz(response.data.quiz);
    };

    fetchQuiz();
  }, []);

  return (
    <div>
      <h1>Quiz</h1>

      <p>{quiz}</p>
    </div>
  );
};
