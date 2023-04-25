import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputText, setOutputText] = useState("");

  const getOutputText = (value) => {
    if (value === "" || isNaN(value)) {
      return "Please enter a valid number.";
    } else if (value < 0) {
      return "Please enter a positive value.";
    } else if (value % 2 === 0) {
      const nextThreeEvenNumbers = [
        parseInt(value) + 2,
        parseInt(value) + 4,
        parseInt(value) + 6,
      ];
      return `${nextThreeEvenNumbers.join(", ")}`;
    } else {
      const nextThreeOddNumbers = [
        parseInt(value) + 2,
        parseInt(value) + 4,
        parseInt(value) + 6,
      ];
      return `${nextThreeOddNumbers.join(", ")}`;
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const output = getOutputText(value);
    setOutputText(output);
    setInputValue(value);
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <label htmlFor="numberInput" className="block mb-2 font-bold text-lg">
          Enter a number:
        </label>
        <div className="flex items-center  border-b-2 border-gray-300 py-2">
          <input
            type="number"
            id="numberInput"
            value={inputValue}
            onChange={handleInputChange}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="e.g. 42"
          />
        </div>
        <p className="mt-4 text-gray-500 text-sm">{outputText}</p>
      </div>
    </div>
  );
}

export default App;
