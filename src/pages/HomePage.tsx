import { useState, useEffect } from "react";
import About from "../components/About";
import Advertising from "../components/Advertising";
import Gallary from "../components/Gallary";
import Hero from "../components/Hero";
import Services from "../components/Services";
import OrderModal from "../components/OrderModal";

export default function HomePage({ isOrderModalOpen, closeModalOrder }: any) {
  const [OrderModalOpen, setOrderModalOpen] = useState(false);
  const close = () => {
    setOrderModalOpen(false)
    closeModalOrder()
  };
  
  useEffect(() => {    
    if (isOrderModalOpen) {
      setOrderModalOpen(true);
    } else {
      setOrderModalOpen(false);
    }
    return () => {};
  }, [isOrderModalOpen]);


  return (
    <div className="App">
      <Hero OpenModalOrder={() => setOrderModalOpen(true)} />
      <Advertising />
      <Services />
      <About />
      <Gallary />
      {OrderModalOpen && <OrderModal closeModalOrder={close} />}
    </div>
  );
}
