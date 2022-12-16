import React from 'react';
import './App.css';
import CompA from './ComA';

function App() {

  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <CompA count={count} setCount={setCount} />
    </div>
  );
}

export default App;
