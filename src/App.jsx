import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStud from './components/AddStud'
import SearchStud from './components/SearchStud'
import DeleteStud from './components/DeleteStud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddStud /> 
      <SearchStud />
      <DeleteStud />
    </>
  )
}

export default App
