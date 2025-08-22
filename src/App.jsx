import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPass from "./pages/ForgotPass";
import OTP from "./pages/OTP";
import ResetPass from "./pages/ResetPass";
import PassChanged from "./pages/PassChanged";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/Profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/resetpass" element={<ResetPass />} />
        <Route path="/passchanged" element={<PassChanged />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
