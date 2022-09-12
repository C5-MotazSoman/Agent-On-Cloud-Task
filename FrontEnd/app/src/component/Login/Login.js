import "./style.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginAction = () => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        localStorage.setItem("token", JSON.stringify(result.data.token));
        if (result.data.success) {
          navigate("/");
        }
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Login-contaier">
      <div className="login_box">
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="login_btn" onClick={loginAction}>
            Login
          </button>
        </div>
        <div>
          <h3>
            Don`t Have an account yet ? <Link to="/signUp"> SignUp</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Login;
