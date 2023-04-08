import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import LoginRegister from "./Components/LoginRegister/LoginRegister";
import DonorForm from "./Components/Form/DonorForm";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <LoginRegister /> */}
      <DonorForm />
    </div>
  );
}

export default App;
