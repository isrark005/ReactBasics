import { useState } from "react"


function App() {
  const [color, setColor] = useState('olive')

  return (
   
      <div className="w-full h-screen duration-100" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 py-2 ">
        <div className="flex flex-wrap justify-center bg-white rounded-3xl">
          <button onClick={()=> setColor('red')} className="text-white rounded-3xl mx-1 my-5  px-3" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=> setColor('blue')} className="text-white rounded-3xl mx-1 my-5  px-3" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=> setColor('green')} className="text-white rounded-3xl mx-1 my-5  px-3" style={{backgroundColor: "green"}}>green</button>
          
        </div>
        </div>
      </div>
    
  )
}

export default App
