
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Users from './pages/Users'

function App() {
  

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId" element={<Users/>}/>
      </Routes>
       
      
    </>
  )
}

export default App
