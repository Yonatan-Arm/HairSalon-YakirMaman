import { useState, useEffect } from "react";
import About from "../components/About";
import Advertising from "../components/Advertising";
import Gallary from "../components/Gallary";
import Hero from "../components/Hero";
import Services from "../components/Services";
import OrderModal from "../components/OrderModal";
import BigPicComp from "../components/BigPicComp";

export default function HomePage({ isOrderModalOpen, closeModalOrder }: HomePageProps) {
  const [OrderModalOpen, setOrderModalOpen] = useState(false);
  const close = () => {
    setOrderModalOpen(false);
    closeModalOrder();
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
      <a href="tel:+972534234428" className="phone-icon"></a>
      <Hero OpenModalOrder={() => setOrderModalOpen(true)} />
      <Advertising />
      <Gallary />
      <About OpenModalOrder={() => setOrderModalOpen(true)} />
      <Services />
      <BigPicComp />
      {OrderModalOpen && <OrderModal closeModalOrder={close} />}
    </div>
  );
}
