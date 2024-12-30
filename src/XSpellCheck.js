import React, { useState, useEffect } from "react";

// Custom dictionary for spell-check
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState(""); // State to hold user input
  const [correction, setCorrection] = useState(""); // State for holding correction message

  useEffect(() => {
    // Function to check for spelling errors
    const checkSpelling = () => {
      // Convert text to lowercase to check case-insensitively
      const words = text.split(" ");
      for (let word of words) {
        const lowerCaseWord = word.toLowerCase(); // Checking in lowercase

        // If the word is in the dictionary, suggest the correction
        if (customDictionary[lowerCaseWord]) {
          setCorrection(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
          return;
        }
      }
      setCorrection(""); // Reset correction if no errors
    };

    checkSpelling(); // Run spell check on text change
  }, [text]); // Dependency array ensures this runs whenever 'text' changes

  const handleChange = (event) => {
    setText(event.target.value); // Update the text state when the user types
  };

  return (
    <div>
        <h2>Spell Check and Auto-Correction</h2>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type your text here..."
        rows="4"
        cols="50"
      />
      {correction && <p>{correction}</p>}
    </div>
  );
};

export default XSpellCheck;
