import { useState } from "react";
import axios from "axios";

export const Summary = () => {
  const [summary, setSummary] = useState("");

  const getSummary = async () => {
    const response = await axios.get(
      "http://localhost:5000/summary"
    );

    setSummary(response.data.summary);
  };

  return (
    <div>
      <h1>Summary Page</h1>

      <button onClick={getSummary}>
        Fetch Summary
      </button>

      <p>{summary}</p>
    </div>
  );
};