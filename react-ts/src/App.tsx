import { Route, Routes } from 'react-router-dom'
import './App.css'
import GetPosts from './pages/GetPosts'
import AddPost from './pages/AddPost'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GetPosts />}/>
        <Route path="/add/:id" element={<AddPost />}/>
      </Routes>
    </>
  )
}

export default App
