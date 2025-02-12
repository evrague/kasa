import { useState } from 'react'
import Hotels from './Components/Hotels'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hotels />      
    </>
  )
}

export default App
