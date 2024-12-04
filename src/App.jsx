import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
