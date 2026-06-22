import { useState, useEffect } from "react";

export const useTypewriter = (text, speed = 20) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");

    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));

      index++;

      if (index > text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayText;
};
