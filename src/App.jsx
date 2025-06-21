import React, { use } from "react";
import { questions } from "./data.js";

const App = () => {
  const [index, UpdateIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState();
  const [score, setScore] = React.useState(0);
let percentage = Math.round((score / questions.length) * 100);
const [message, setMessage] = React.useState("");
let correct = questions[index].options.find(o => o.isCorrect);
// percentage = 100; For testing purposes
React.useEffect(() => { 
  if (percentage === 100) {
    setMessage('You are a genius');
  } else if (percentage >= 80) {
    setMessage('Awesome');
  } else if (percentage >= 50) {
    setMessage('Keep up the good work!!');
  } else {
    setMessage('');
  }
}, [percentage]);

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
          Test your knowledge on data structures and algorithms with this interactive quiz. Select the correct answer for each question and track your score.
        </p>
        {/* Quiz content will go here */}
        <h2 className="text-lg font-bold mb-2 text-blue-800">Question {index + 1} / {questions.length}</h2>
        <div className="text-xl font-medium text-slate-700 mb-6 text-center px-2">
          {questions[index].question}
        </div>
        <div className="mt-4 w-full flex flex-col gap-2">
          {questions[index].options.map((option) => (
            <div
              key={option.id}
              className={`flex items-center mb-1 p-3 rounded-lg border transition-colors duration-200 cursor-pointer shadow-sm ${selectedOption === option.id ? (option.isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300') : 'bg-slate-50 border-slate-200 hover:bg-blue-50 hover:border-blue-200'}`}
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
              <label className="text-slate-700 text-base font-semibold select-none cursor-pointer flex-1">{option.text}</label>
              {selectedOption === option.id && (
                <span className={`ml-2 text-lg font-bold ${option.isCorrect ? 'text-green-600' : 'text-red-500'}`}>{option.isCorrect ? '✔️ Correct' : '❌ Incorrect'}</span>
              )}

            </div>
          ))}
          {score > 0 && (
            <span className="block mt-4 text-blue-600 text-lg font-bold text-center">Score: {score} / {questions.length}  </span>
          )}
          
        </div>
        <button
          onClick={() => {
            if (selectedOption && index + 1 < questions.length) {
              UpdateIndex((prev) => prev + 1);
            }
          }}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 cursor-pointer text-lg"
        >
          Next
        </button>
        {message && (
          <div className="mt-6 px-4 py-3 bg-green-100 border-l-4 border-green-400 text-green-800 rounded shadow text-center text-lg font-semibold">
            {message}
          </div>
        )}
      </div>
      <h1>correct answer {/* testing */}</h1>
      {correct && correct.text}
    </div>
  );
};

export default App;
