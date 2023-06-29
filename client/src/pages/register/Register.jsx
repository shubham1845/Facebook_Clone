import axios from "axios";
import "./register.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const conformPassword = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (conformPassword.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords didn't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      await axios.post("/auth/register", user);
      navigate("/login");
    }
    console.log("sinup clicked");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Connect with your friends and the world around you on Facebook.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              type="text"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              type="email"
              required
              ref={email}
              className="loginInput"
            />

            <input
              placeholder="Password"
              type="password"
              required
              minLength={6}
              ref={password}
              className="loginInput"
            />
            <input
              placeholder="Conform Password"
              type="password"
              required
              minLength={6}
              ref={conformPassword}
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="registerNewAccount">Log into Account </button>
          </form>
        </div>
      </div>
    </div>
  );
}
