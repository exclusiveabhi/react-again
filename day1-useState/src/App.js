import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  function handleCounter(e){
    setNumber(Number => Number + 1);
    console.log(number);
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleCounter}>Counter</button>
    </>
  );
}

export default App;
