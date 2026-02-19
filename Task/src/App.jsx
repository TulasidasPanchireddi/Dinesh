import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import AdminDashboard from "./Components/AdminDashboard";
import EmployeeDashboard from "./Components/EmployeeDashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
