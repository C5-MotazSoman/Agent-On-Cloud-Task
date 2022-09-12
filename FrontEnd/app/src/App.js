import './App.css';
import {Routes,Route} from "react-router-dom"
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
function App() {
  return (
    <div className="App">
    <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/login" element={<Login/>} />
      <Route path="/signUp" element={<SignUp/>} />
    </Routes>
    </div>
  );
}

export default App;
