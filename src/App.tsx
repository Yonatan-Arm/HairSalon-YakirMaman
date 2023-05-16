import { useState } from "react";
import About from "./components/About";
import Advertising from "./components/Advertising";
import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Services from "./components/Services";
import OrderModal from "./components/OrderModal";

function App() {
  const [isOrderModalOpen, setisOrderModalOpen] = useState(false);
  return (
    <div className="App">
      <Navbar OpenModalOrder={() => setisOrderModalOpen(true)} />
      <Hero />
      <Advertising />
      <Services />
      <About />
      <Gallary />
      <Footer />
      {isOrderModalOpen && (
        <OrderModal closeModalOrder={() => setisOrderModalOpen(false)} />
      )}
    </div>
  );
}

export default App;
