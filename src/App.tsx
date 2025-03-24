import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-blue-600">
          Electron + Vite + React + Tailwind
        </h1>
        
        <div className="my-8 flex justify-center">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow-md transition-all hover:bg-blue-700 active:translate-y-0.5"
          >
            Compteur: {count}
          </button>
        </div>
        
        <p className="text-center text-sm text-gray-600">
          Modifiez <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">src/App.tsx</code> et enregistrez pour tester le Hot Reload
        </p>
      </div>
    </div>
  );
};

export default App; 