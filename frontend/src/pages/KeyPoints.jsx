import { useState, useEffect } from "react";
import axios from "axios";
import { Typewriter } from "../components/Typewriter";

export const KeyPoints = () => {
  const [keyPoints, setKeyPoints] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [completedPoints, setCompletedPoints] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const points = keyPoints.split("- ").filter((point) => point.trim());

  useEffect(() => {
    const fetchKeyPoints = async () => {
      try {
        const documentId = localStorage.getItem("currentDocumentId");

        const response = await axios.get(
          `http://localhost:5000/keypoints/${documentId}`,
        );

        setKeyPoints(response.data.keyPoints);
      } catch (error) {
        console.log(error);

        setError("Failed to load key points.");
      } finally {
        setLoading(false);
      }
    };

    fetchKeyPoints();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Key Points</h1>
        <p>⏳ Loading Key Points...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Key Points</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="outputs-page">
      <h1>Key Points</h1>

      <div
        style={{
          whiteSpace: "pre-wrap",
        }}
      >
        <div className="points-container">
          {completedPoints.map((point, index) => (
            <div key={index} className="point-card">
              ✅ {point}
            </div>
          ))}

          {currentIndex < points.length && (
            <div className="point-card">
              ✅
              <Typewriter
                text={points[currentIndex]}
                onComplete={() => {
                  setCompletedPoints((prev) => [...prev, points[currentIndex]]);

                  setCurrentIndex((prev) => prev + 1);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
