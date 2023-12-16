import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl bg-green font-bold underline">
      Hello world!
    </h1>
    <br />
    <Card channel="cardhold" name="Israr" />

    </>
  )
}

export default App
