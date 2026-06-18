import { useState, useEffect } from "react";
import axios from "axios";

export const KeyPoints = () => {
  const [keyPoints, setKeyPoints] = useState("");

  useEffect(() => {
    const fetchKeyPoints = async () => {
      const documentId = localStorage.getItem("currentDocumentId");

      const response = await axios.get(
        `http://localhost:5000/keypoints/${documentId}`,
      );

      setKeyPoints(response.data.keyPoints);
    };

    fetchKeyPoints();
  }, []);

  return (
    <div>
      <h1>Key Points</h1>

      <div style={{ whiteSpace: "pre-wrap" }}>{keyPoints}</div>
    </div>
  );
};
