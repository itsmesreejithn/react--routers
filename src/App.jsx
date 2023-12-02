import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
