import React, { useState } from "react";
import Logosrc from "../assets/imgs/logo.jpg";
import Menusrc from "../assets/imgs/menu.svg";

export function Navbar({ OpenModalOrder }: any) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="navbar flex row space-between align-center">
      <div className="logo">
        <img src={Logosrc} alt="logo" />
      </div>
      <div className="flex  links">
        <span>Home</span>
        <span>Service</span>
        <span>About</span>
        <span>Contect</span>
      </div>
      <div className="cta-btn">
        <button onClick={() => OpenModalOrder()}> Book Appointment</button>
      </div>
      <div className="mobile-menu">
        {isOpen ? (
          <div className="phone-menu">
            <span className="close-btn" onClick={() => setisOpen(!isOpen)}>
              X
            </span>
            <div className="flex column mobile-links align-center justify-center">
              <span>Home</span>
              <span>Service</span>
              <span>About</span>
              <span>Contect</span>
              <div className="cta-btn-mobile">
                <button
                  onClick={() => {
                    OpenModalOrder();
                    setisOpen(!isOpen);
                  }}
                >
                  {" "}
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ) : (
          <img src={Menusrc} alt="menu" onClick={() => setisOpen(!isOpen)} />
        )}
      </div>
    </div>
  );
}

// onClick={event => {
//   console.log('function 1:', sum(5, 5));
//   console.log('function 2:', multiply(5, 5));
// }}
