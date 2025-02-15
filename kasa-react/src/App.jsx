import { useState } from 'react'
import './App.css';
import Essai from './Components/essai';
import Apropos from'./Components/Apropos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Apropos />      
    </>
  )
}

export default App
