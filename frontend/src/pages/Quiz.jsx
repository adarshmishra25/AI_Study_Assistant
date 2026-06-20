import { useState, useEffect } from "react";
import axios from "axios";
import { Typewriter } from "../components/Typewriter";

export const Quiz = () => {
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [completedQuestions, setCompletedQuestions] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const documentId = localStorage.getItem("currentDocumentId");

        const response = await axios.get(
          `http://localhost:5000/quiz/${documentId}`,
        );

        setQuiz(response.data.quiz);
      } catch (error) {
        console.log(error);

        setError("Failed to load quiz.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, []);

  const questions = quiz.split(/\d+\./).filter((q) => q.trim());

  if (loading) {
    return (
      <div>
        <h1>Quiz</h1>
        <p>⏳ Loading Quiz...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Quiz</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="outputs-page">
      <h1>Quiz</h1>

      <div className="quiz-container">
        {completedQuestions.map((question, index) => (
          <div key={index} className="quiz-card">
            <h2>Question {index + 1}</h2>

            <p>{question}</p>
          </div>
        ))}

        {currentIndex < questions.length && (
          <div className="quiz-card">
            
            <h2>Question {currentIndex + 1} </h2>
            
            <p>
              <Typewriter
                text={questions[currentIndex]}
                speed={10}
                onComplete={() => {
                  setCompletedQuestions((prev) => [
                    ...prev,
                    questions[currentIndex],
                  ]);

                  setCurrentIndex((prev) => prev + 1);
                }}
              />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
