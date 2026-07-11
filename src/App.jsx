import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import AddStud from './components/AddStud'
import SearchStud from './components/SearchStud'
import DeleteStud from './components/DeleteStud'
import NavigationBar from './components/NavigationBar'
import ViewAll from './components/ViewAll'

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<AddStud />} />
        <Route path="/search" element={<SearchStud />} />
        <Route path="/delete" element={<DeleteStud />} />
        <Route path="/view" element={<ViewAll />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
