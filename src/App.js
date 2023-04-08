import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import LoginRegister from "./Components/LoginRegister/LoginRegister";
import HospitalCard from "./Components/HospitalCard/HospitalCard";
import HospitalPage from "./Components/HospitalPage/HospitalPage";
import { Route, Routes } from "react-router-dom";
// import HospitalPage from "./Components/HospitalPage/HospitalPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/hospitalpage/:id" element={<HospitalPage />} />
        <Route exact path="/loginregister" element={<LoginRegister />} />
      </Routes>
    </div>
  );
}

export default App;
