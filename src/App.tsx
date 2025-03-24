import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Electron + Vite + React + TypeScript</h1>
      <p>Application construite avec Electron Forge</p>
      
      <div style={{ margin: '2rem 0' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}
        >
          Compteur: {count}
        </button>
      </div>
      
      <p>
        Modifiez <code>src/App.tsx</code> et enregistrez pour tester le Hot Reload
      </p>
    </div>
  );
};

export default App; 