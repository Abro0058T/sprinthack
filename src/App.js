import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import LoginRegister from "./Components/LoginRegister/LoginRegister";
import HospitalCard from "./Components/HospitalCard/HospitalCard";
import HospitalPage from "./Components/HospitalPage/HospitalPage";
import { Route, Routes } from "react-router-dom";
import Notification from "./Components/Notification/Notification";
import DonarPage from "./Components/DonarPage/DonarPage";
import RequestPage from "./Components/RequestPage/RequestPage";
// import DonorForm from "./Components/Form/DonorForm";
// import HospitalPage from "./Components/HospitalPage/HospitalPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/" element={<Notification />} /> */}
        <Route exact path="/hospitalpage/:id" element={<HospitalPage />} />
        <Route exact path="/loginregister" element={<LoginRegister />} />
        <Route exact path="/donorpage" element={<DonarPage/>} />
        <Route exact path="/requestpage" element={<RequestPage />} />
      </Routes>
    </div>
  );
}

export default App;
