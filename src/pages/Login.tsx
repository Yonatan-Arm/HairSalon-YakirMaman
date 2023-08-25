import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase.service";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const onLogin = async (e: EmailFormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
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
    <section className="login-page  ">
      <div className="layer flex align-center justify-center">
        <div className="login-form">
          <h1>התחברות</h1>
          <form onSubmit={onLogin} className="flex column">
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
                type="password"
                id="password"
                name="password"
                autoComplete="on"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">התחבר</button>
            </div>
            {errorMessage && <div className="error-message">פרטי התחברות שגויים</div>}
          </form>
          <p>
             אין לך חשבון עדיין? <NavLink to="/signup">הירשם</NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
