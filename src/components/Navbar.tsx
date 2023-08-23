import React, { useEffect, useState } from "react";
import Logosrc from "../assets/imgs/logo.jpg";
import Menusrc from "../assets/imgs/menu.svg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase.service";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export function Navbar({ OpenModalOrder }: any) {
  const [isOpen, setisOpen] = useState(false);
  const [isDash, setIsDash] = useState(false);
  const [isSignInPage, setIsSignInPage] = useState(false);
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
    location.pathname === "/dashboard" ? setIsDash(true) : null;
    location.pathname === "/signup" || location.pathname === "/login"
      ? setIsSignInPage(true)
      : null;
    return () => {
      setIsDash(false);
      setIsSignInPage(false);
    };
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
    <div
      className={`
        ${
          isDash
            ? "navbar flex row space-between align-center dashboardPage"
            : "navbar flex row space-between align-center"
        }`}
    >
      {" "}
      <div className="logo">
        <NavLink to="/">
          <img src={Logosrc} alt="logo" />
        </NavLink>
      </div>
      {!isSignInPage && (
        <div className="flex  links">
          <NavLink to="/Contact">צור קשר</NavLink>
          {isAdminLoggedIn && <NavLink to="dashboard">Dashboard</NavLink>}
          {isUserLoggedIn && <span onClick={() => signOutUser()}>יציאה</span>}
          {!isUserLoggedIn && !isAdminLoggedIn && (
            <NavLink to="login">התחברות</NavLink>
          )}
          <Link to="/#about">אודות</Link>
          <Link to="/#Service">שירותי המספרה</Link>
          <NavLink to="/">דף הבית</NavLink>
        </div>
      )}
      <div className="cta-btn">
        {isSignInPage ? (
          <NavLink to="/">
            <button onClick={() => OpenModalOrder()}>זימון תור למספרה</button>
          </NavLink>
        ) : (
          <button onClick={() => OpenModalOrder()}>זימון תור למספרה</button>
        )}
      </div>
      <div className="mobile-menu">
        {isOpen ? (
          <div className="phone-menu">
            <span className="close-btn" onClick={() => setisOpen(!isOpen)}>
              X
            </span>
            <div className="flex column mobile-links align-center justify-center">
              <NavLink to="/">דף הבית</NavLink>
              <Link to="/#Service">שירותי המספרה</Link>
              <Link to="/#about">אודות</Link>
              <NavLink to="/Contact">צור קשר</NavLink>
              {isAdminLoggedIn && <NavLink to="dashboard">Dashboard</NavLink>}
              {isUserLoggedIn && (
                <span onClick={() => signOutUser()}>יציאה</span>
              )}
              {!isUserLoggedIn && !isAdminLoggedIn && (
                <NavLink to="login">התחברות</NavLink>
              )}
              <div className="cta-btn-mobile">
                <button
                  onClick={() => {
                    OpenModalOrder();
                    setisOpen(!isOpen);
                  }}
                >
                  זימון תור למספרה
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
