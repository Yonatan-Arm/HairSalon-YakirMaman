import { useState } from "react";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [isOrderModalOpen, setisOrderModalOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar OpenModalOrder={() => setisOrderModalOpen(true)} />
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route
            path="/"
            element={
              <HomePage
                isOrderModalOpen={isOrderModalOpen}
                closeModalOrder={() => setisOrderModalOpen(false)}
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
export default App;
