import { useState, useEffect } from "react";

export const Typewriter = ({
  text,
  speed = 20,
  onComplete,
}) => {
  const [displayText, setDisplayText] =
    useState("");

  useEffect(() => {
    setDisplayText("");

    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(
        text.slice(0, index + 1)
      );

      index++;

      if (index >= text.length) {
        clearInterval(interval);

        if (onComplete) {
          onComplete();
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return <>{displayText}</>;
};