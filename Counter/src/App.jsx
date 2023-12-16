import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)


  
  const addValue = ()=> {
   if (counter >= 20) {
    return counter
   }
    setCounter(counter= counter + 1);
  };
  const removeValue = ()=> {
    if (counter <= 0) {
      return counter
     }
    setCounter(counter= counter - 1);
  };

  return (
    <>
     <h1>New Counter Project</h1>
     <h2>counter value is {counter}</h2>
     <button onClick={removeValue}>Remove Value {counter}</button>
     <button onClick={addValue}>Add Value {counter}</button>
     <div>Footer: also updating the value here: {counter}</div>
    </>
  )
}

export default App
