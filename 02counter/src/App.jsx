import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(5);

  const removeValue = () => {
    console.log("Clicked",counter);
    //counter = counter - 1;
    setCounter(counter - 1);
   }

 const addValue = () => {
    console.log("Clicked",counter);
    //counter = counter + 1;
    setCounter(counter + 1);
   }
   
  return (
    <>
      <h1>Dhruv Jaiswal</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}> Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
