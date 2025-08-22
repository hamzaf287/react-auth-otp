import React from "react";
import AuthCard from "../components/authCard";
import { Link } from "react-router-dom";
import HandleOTP from "../utils/handleOTP";

function ForgotPass() {
  const goToOTP = HandleOTP("/resetpass");

  return (
    <AuthCard>
      <div className="header mb-10" title="Forgot Password?">
        <h3 className="text-gray-400">
          Don't worry! It occurs. Please enter the email address linked with
          your account.
        </h3>
      </div>
      <form className="space-y-6" onSubmit={goToOTP}>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="block w-full px-3 py-3 border rounded-md shadow-sm 
                       focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                       sm:text-sm border-gray-300 bg-gray-50"
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-5 py-3 rounded bg-black text-white border border-black 
                       hover:bg-white hover:text-black transition-colors duration-300 w-full"
          >
            Send Code
          </button>
        </div>
        <p className="text-center text-sm text-gray-600">
          Remember Password?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}

export default ForgotPass;
