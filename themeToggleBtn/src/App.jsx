
import { useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  
  const [themeMode, SetThemeMode] = useState('light')

  const darkMode = () => {
    SetThemeMode('dark');
  }
  const lightMode = () => {
    SetThemeMode('light');
  }
  


// actual change in theme

useEffect(() => {
  let switchColor = document.querySelector('html')
  switchColor.classList.remove('light', 'dark')
  switchColor.classList.add(themeMode)
}, [themeMode])

  return (
    <ThemeContextProvider value={{themeMode, darkMode, lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center ">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn /> 
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                       
                    </div>
                </div>
            </div>
    </ThemeContextProvider>
  )
}

export default App
