import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthCard from "../components/authCard";
import SocialButtons from "../components/SocialButtons";
import HandleOTP from "../utils/handleOTP";

function Login() {
  const goToOTP = HandleOTP("/dashboard");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = users.find(
        (u) => u.email === data.email && u.password === data.password
      );
      if (foundUser) {
        console.log("Login successful: ", foundUser);
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        goToOTP();
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      setError("root", { type: "manual", message: error.message });
    }
  };

  return (

    <AuthCard title="Welcome Back! Glad to see you, Again!">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: "Email is required",
            })}
            required

            placeholder="Enter your email"
            className={
              errors.email
                ? "block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm border-red-300 bg-red-50 placeholder-red-700 "
                : "block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 bg-gray-50"
            }
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            required
            
            placeholder="Enter your password"
            className={
              errors.password
                ? "block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm border-red-300 bg-red-50 placeholder-red-700 "
                : "block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 bg-gray-50"
            }
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors.password.message}
            </p>
          )}
          <div className="mt-2 text-right text-sm hover:text-blue-500 underline">
            <Link to="/forgotpass">Forgot Password?</Link>
          </div>
          {errors.root && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors.root.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-3 rounded bg-black text-white border border-black  hover:bg-white hover:text-black transition-colors duration-300 w-full"
          >
            {isSubmitting ? "Loging in" : "Login"}
          </button>
        </div>
        <div className="space-y-6">
          <p className="text-sm text-gray-600 text-center">Or Login with</p>
          <div className="w-full">
            <SocialButtons />
          </div>
        </div>
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?
          <Link to="/register" className="text-blue-500 hover:underline">
            Register Now!
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}

export default Login;
