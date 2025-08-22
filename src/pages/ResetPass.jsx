import { useNavigate } from "react-router-dom";
import AuthCard from "../components/authCard";
import { Link } from "react-router-dom";

function ResetPass() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/passchanged");
  };

  return (
    <AuthCard title="Create new password">
      <div className="header mb-10">
        <h3 className="text-gray-400">
          Your new password must be unique from those previously used.
        </h3>
      </div>
      <form className="space-y-7" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <input
            type="password"
            name="password"
            id="pass"
            placeholder="New Password"
            className="block w-full px-3 py-3 border rounded-md shadow-sm  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 bg-gray-50"
          />
          <input
            type="password"
            name="confirmPassword"
            id="con-pass"
            placeholder="Confirm Password"
            className="block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 bg-gray-50"
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-5 py-3 rounded bg-black text-white border border-black hover:bg-white hover:text-black transition-colors duration-300 w-full"
          >
            Reset Password
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

export default ResetPass;
