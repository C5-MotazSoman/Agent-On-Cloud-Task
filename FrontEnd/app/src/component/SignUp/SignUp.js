import "./style.css";
import { useNavigate,Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const SignUp = async () => {
    let url = "http://localhost:5000/user";
    await axios.post(url, {
      firstName,
      lastName,
      age,
      country,
      email,
      password,
    });
  };
  return <div className="signup-contanair">
  <div className="content">
  <div>
        <input type="text" placeholder="FirstName" onChange={(e)=>{setFirstName(e.target.value)}}/>
    </div>
    <div>
        <input type="text" placeholder="LastName" onChange={(e)=>{setLastName(e.target.value)}}/>
    </div>
    <div>
        <input type="text" placeholder="Age" onChange={(e)=>{setAge(e.target.value)}}/>
    </div>
    <div>
        <input type="text" placeholder="country" onChange={(e)=>{setCountry(e.target.value)}}/>
    </div>
    <div>
        <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div>
        <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
    <div>
        <button className=" signup_btn"  onClick={SignUp}>
            SignUp
        </button>
    </div>
    <div>
        <h3>
            you Have already an account? <Link to="/login" >Login</Link>
        </h3>
    </div>
  </div>
  </div>;
}

export default SignUp;
