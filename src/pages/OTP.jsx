import React, { useState } from "react";
import AuthCard from "../components/authCard";
import { Link, useNavigate, useLocation } from "react-router-dom";
import OtpInput from "react-otp-input";

function OTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const nextRoute = location.state?.nextRoute || "/dashboard";
  function handleVerify(e) {
    e.preventDefault();
    if (otp.length === 4) {
      navigate(nextRoute);
    }
  }

  return (
    <AuthCard title="OTP Verification">
      <div className="header mb-10">
        <h3 className="text-gray-400">
          Enter the verification code we just sent to your email address.
        </h3>
      </div>

      <form className="space-y-6 mt-8" onSubmit={handleVerify}>
        <div>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputType="tel"
            shouldAutoFocus
            containerStyle="flex w-full gap-7"
            renderInput={(props) => (
              <input
                {...props}
                className="flex-1 h-16 text-center text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-5 py-3 rounded bg-black text-white border border-black  hover:bg-white hover:text-black transition-colors duration-300 w-full"
          >
            Verify
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Didn’t receive the code?{" "}
          <Link to="/otp" className="text-blue-500 hover:underline">
            Resend
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}

export default OTP;
