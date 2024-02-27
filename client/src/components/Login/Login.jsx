import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });

  function handleUserLogin(e) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (userLogin.email === "" || userLogin.password === "") {
      return;
    }
    axios
      // .post(`http://localhost:8080/api/auth/login`, userLogin)
      .post("http://localhost:8080/api/auth/login", userLogin)
      .then((result) => {
        console.log(result);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        alert("Wrong Credentials");
      });
    setUserLogin({ email: "", password: "" });
  };

  return (
    <div className="login-body">
      <h1 id="login-head">Street Light Fault Detection</h1>
      <div className="login-wrapper">
        <form className="login-form" action="">
          <h1>Admin Login</h1>
          <div className="login-input-box">
            <input
              type="email"
              placeholder="Email"
              required
              id="email"
              name="email"
              value={userLogin.email}
              onChange={(e) => handleUserLogin(e)}
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="login-input-box">
            <input
              type="password"
              placeholder="Password"
              required
              id="password"
              name="password"
              value={userLogin.password}
              onChange={(e) => handleUserLogin(e)}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="login-remember-forgot">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button
            type="submit"
            className="btn"
            onClick={handleLogin}
            // disabled={isFetching}
          >
            Login
          </button>
          <div className="login-register-link">
            <p>
              Dont have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
