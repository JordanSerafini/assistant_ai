import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200 p-4 ">
      {/* Barre de titre draggable */}
      <div className="titlebar absolute top-0 left-0 right-0"></div>
      
      <div></div>
    </div>
  );
};

export default App; 