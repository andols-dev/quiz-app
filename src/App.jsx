import React from "react";
import { questions } from "./data.js";

const App = () => {
  const [index, UpdateIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState();
  const [score, setScore] = React.useState(0);

 React.useEffect(() => {
    setSelectedOption(null); // Reset selection when question changes
  }, [index]);  
  console.log(selectedOption)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-200 to-blue-200">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 tracking-tight drop-shadow">
          Quiz App
        </h1>
        <p className="text-slate-500 mb-6 text-center">
          Test your knowledge with our interactive quiz!
        </p>
        {/* Quiz content will go here */}
        <h2 className="text-lg font-bold">Question</h2>
        {questions[index].question}
        <div className="mt-4 w-full">
          {questions[index].options.map((option) => (
            <div
              key={option.id}
              className="flex items-center mb-2 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={option.id === selectedOption}
                onChange={() => {
                  setSelectedOption(option.id);
                  if (!selectedOption && option.isCorrect) {
                    setScore((prev) => prev + 1);
                  }
                }}
                className="mr-3 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label className="text-slate-700">{option.text}</label>

              {selectedOption === option.id && (
                <span className="ml-2 text-green-500">
                  {option.isCorrect ? "✔️ Correct" : "❌ Incorrect"}
                </span>
              )}
        
            </div>
          ))}
                {score && (
                <span className="ml-2 text-blue-500">
                  Score: {score}
                </span>
              )}
        </div>
        <button
          onClick={() => {
            if (index + 1 < questions.length) {
              UpdateIndex((prev) => prev + 1);
            }
          }}
          className="mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-200 focus:outline-none cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
