import "./sass/App.scss";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import LandingPage from "./components/Landing/Landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
