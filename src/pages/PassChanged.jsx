import React from "react";
import AuthCard from "../components/authCard";
import { useNavigate } from "react-router-dom";
import SuccessMark from "../assets/Successmark.png";

function PassChanged() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <AuthCard>
      <div className="flex flex-col items-center text-center mb-10">
        <img src={SuccessMark} alt="Success" className="w-20 h-20 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Password Changed!
        </h2>
        <h3 className="text-gray-500">
          Your password has been changed successfully.
        </h3>
      </div>

      <button
        type="button"
        className="px-5 py-3 rounded bg-black text-white border border-black 
        hover:bg-white hover:text-black transition-colors duration-300 w-full"
        onClick={handleClick}
      >
        Back to Login
      </button>
    </AuthCard>
  );
}

export default PassChanged;
