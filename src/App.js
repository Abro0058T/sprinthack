import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import LoginRegister from "./Components/LoginRegister/LoginRegister";
import HospitalCard from "./Components/HospitalCard/HospitalCard";
import HospitalPage from "./Components/HospitalPage/HospitalPage";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <HospitalPage/>
      {/* <LoginRegister /> */}
    </div>
  );
}

export default App;
