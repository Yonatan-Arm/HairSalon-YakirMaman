import React, { useEffect, useState } from "react";
import Logosrc from "../assets/imgs/logo.jpg";
import Menusrc from "../assets/imgs/menu.svg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase.service";
import { NavLink, useLocation } from "react-router-dom";
export function Navbar({ OpenModalOrder }: any) {
  const [isOpen, setisOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user && user.uid === import.meta.env.VITE__USERADMIN) {
        setIsAdminLoggedIn(true);
        setIsUserLoggedIn(true);
      } else if (user) {
        setIsUserLoggedIn(true);
      } else {
      }
    });
    return () => {
      setIsUserLoggedIn(false);
      setIsAdminLoggedIn(false);
    };
  }, []);

  useEffect(() => {
    isOpen ? setisOpen(false) : null;
  }, [location]);

  const signOutUser = async () => {
    await signOut(auth);
    try {
      setIsUserLoggedIn(false);
      setIsAdminLoggedIn(false);
    } catch (error) {
      console.log("failed", error);
    }
  };

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
        {isAdminLoggedIn && <NavLink to="dashboard">Dashboard</NavLink>}
        {isUserLoggedIn && <span onClick={() => signOutUser()}>signout</span>}
        {!isUserLoggedIn && !isAdminLoggedIn && (
          <NavLink to="login">Login</NavLink>
        )}
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
              {isAdminLoggedIn && <NavLink to="dashboard">Dashboard</NavLink>}
              {isUserLoggedIn && (
                <span onClick={() => signOutUser()}>signout</span>
              )}
              {!isUserLoggedIn && !isAdminLoggedIn && (
                <NavLink to="login">Login</NavLink>
              )}
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
          <img
            src={Menusrc}
            alt="menu"
            onClick={() => {
              setisOpen(!isOpen);
              window.scrollTo(0, 0);
            }}
          />
        )}
      </div>
    </div>
  );
}
