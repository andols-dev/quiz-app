import React from 'react'
import {questions} from './data.js' 



const App = () => {
  console.log(questions) // Log the imported data to verify it's loaded correctly
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-200 to-blue-200'>
      <div className='w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center'>
        <h1 className='text-3xl font-bold text-blue-700 mb-4 tracking-tight drop-shadow'>Quiz App</h1>
        <p className='text-slate-500 mb-6 text-center'>Test your knowledge with our interactive quiz!</p>
        {/* Quiz content will go here */}
      </div>
    </div>
  )
}

export default App