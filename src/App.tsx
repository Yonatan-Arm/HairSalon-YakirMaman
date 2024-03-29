import { useState } from "react";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HairLightening from "./pages/HairLightening";
import HairStraightening from "./pages/HairStraightening";
import GallaryPage from "./pages/GallaryPage";
import Contact from "./pages/Contact";
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';


function App() {
  const [isOrderModalOpen, setisOrderModalOpen] = useState(false);
  SwiperCore.use([Autoplay])


  return (
    <Router>
      <div className="App">
        <Navbar OpenModalOrder={() =>{
           setisOrderModalOpen(true)
        }} />
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="lightening" element={<HairLightening />} />
          <Route path="straightening" element={<HairStraightening />} />
          <Route path="gallery" element={<GallaryPage />} />
          <Route path="Contact" element={<Contact />} />
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
