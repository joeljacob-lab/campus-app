import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import AddStud from './components/AddStud'
import SearchStud from './components/SearchStud'
import DeleteStud from './components/DeleteStud'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<AddStud />} />
        <Route path="/search" element={<SearchStud />} />
        <Route path="/delete" element={<DeleteStud />} />
        <Route path="/view" element={<div className="container mt-3"><h3>View Student</h3></div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
