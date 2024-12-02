import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminDashboard from './Pages/Admin/AdminDashboard'
import Navbar from "./Components/Layouts/Navbar"
import Layout from "./Components/Layouts/Layout"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Layout/>}  />
          <Route path='/admin-dashboard' element={<AdminDashboard/>}  />
        </Routes>
    </BrowserRouter>
  )
}

export default App
