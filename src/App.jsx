import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import PrivateRouter from "./components/PrivateRouter";
import { useState } from "react";
import About from "./pages/About";
function App() {
  let userData = {
    firstName: "Akarsh",
    lastName: "Patel",
    userName: "AkarshPatel1990",
    email: "akarsh.patel@hotmail.com",
    password: "mypassword",
  };

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(null);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={
              <Login
                authenticate={() => setIsUserAuthenticated(true)}
                userData={userData}
              />
            }
          />
          <Route
            path="dashboard"
            element={
              <PrivateRouter isUserAuthenticated={isUserAuthenticated}>
                <Dashboard
                  authenticate={() => setIsUserAuthenticated(false)}
                  userData={userData}
                />
              </PrivateRouter>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRouter isUserAuthenticated={isUserAuthenticated}>
                <Profile userData={userData} />
              </PrivateRouter>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
