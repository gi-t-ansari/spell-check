import "./styles.css";
import React, { useState, useEffect } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  cosnole: "console"
};

export default function App() {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const getInputText = (e) => {
    e.preventDefault();
    setInputText(e.target.value);

    const letters = inputText.split(" ");
    const correctedLetters = letters.map((letter) => {
      return customDictionary[letter.toLowerCase()];
    });

    const correctedText = correctedLetters.join(" ");

    const firstCorrection = correctedLetters.find(
      (word, index) => word !== letters[index]
    );

    setSuggestedText(firstCorrection || "");
  };

  return (
    <div className="App">
      <h1>Spell Checker & Auto Correction</h1>
      <textarea
        value={inputText}
        onChange={getInputText}
        placeholder="Enter Text"
        rows={5}
        cols={50}
      />
      {suggestedText && (
        <p>
          Did you mean : <strong>{suggestedText}</strong>
        </p>
      )}
    </div>
  );
}
