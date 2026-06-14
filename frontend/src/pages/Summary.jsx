import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const Summary = () => {

  const [summary, setSummary] = useState("");

  useEffect(() => {

    const fetchSummary = async () => {

      const response =
        await axios.get(
          "http://localhost:5000/summary"
        );

      setSummary(
        response.data.summary
      );
    };

    fetchSummary();

  }, []);

  return (
    <div>
      <h1>Summary</h1>

      <p>{summary}</p>
    </div>
  );
};