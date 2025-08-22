import { Routes, Route, Navigate } from "react-router-dom";
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
    <Routes>
      {/* Default route — redirect to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Main routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpass" element={<ForgotPass />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/resetpass" element={<ResetPass />} />
      <Route path="/passchanged" element={<PassChanged />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />

      {/* Catch-all route for unknown URLs */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
