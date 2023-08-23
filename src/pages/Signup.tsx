import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase.service";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigate("/");
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 2500);
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <section className="signup-page">
      <div className="layer flex align-center justify-center">
        <div className="signup-form">
          <h1>הרשמה</h1>
          <form onSubmit={onSubmit} className="flex column">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="on"
                minLength={6}
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button type="submit">הרשמה</button>
            </div>
            {errorMessage && <div className="error-message">פרטי הרשמה שגויים</div>}
            <p>
              יש לך כבר חשבון? <NavLink to="/login">התחבר</NavLink>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
