import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img 
            src={viteLogo} 
            className="h-24 p-6 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all" 
            alt="Vite logo" 
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img 
            src={reactLogo} 
            className="h-24 p-6 hover:drop-shadow-[0_0_2em_#61dafbaa] transition-all animate-spin-slow" 
            alt="React logo" 
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-8 text-gray-800">Vite + React</h1>
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors mb-4"
        >
          count is {count}
        </button>
        <p className="text-gray-600">
          Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
