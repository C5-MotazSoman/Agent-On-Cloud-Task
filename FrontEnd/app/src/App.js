import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";
import Home from "./component/Home/Home";
import { useEffect, useState } from "react";
import Product from "./component/Product/Product";
function App() {
  // need token to pass it to cheldren
  const [token, setToken] = useState("");
  useEffect(() => {
    if (!token) {
      if (localStorage.getItem("token")) {
        setToken(JSON.parse(localStorage.getItem("token")));
      }
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home token={token} setToken={setToken}/>} />
        <Route path="/login" element={<Login  setToken={setToken}/>} />
        <Route path="/signUp" element={<SignUp token={token} />} />
        <Route path="/product/:id" element={<Product token={token}/>} />
      </Routes>
    </div>
  );
}

export default App;
