import { useState } from "react";
import axios from "axios";

export const KeyPoints = () => {
  const [keypoints, setKeyPoints] = useState([]);

  const getKeyPoints = async () => {
    const response = await axios.get(
      "http://localhost:5000/keypoints"
    );

    setKeyPoints(response.data.points);
  };

  return (
    <div>
      <h1>KeyPoints Page</h1>

      <button onClick={getKeyPoints}>
        Fetch KeyPoints
      </button>

      <ul>
        {keypoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};