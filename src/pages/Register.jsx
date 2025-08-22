import { useForm } from "react-hook-form";
import AuthCard from "../components/authCard";
import SocialButtons from "../components/SocialButtons";
import HandleOTP from "../utils/handleOTP";
function Register() {
  const goToOTP = HandleOTP("/dashboard");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      let users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.some((u) => u.email === data.email)) {
        throw new Error("Email already exists");
      }
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(data));
      console.log("User Registered: ", data);
      goToOTP();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthCard title="Welcome Back! Glad to see you, Again!">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            name="username"
            id="username"
            {...register("username", {
              required: "Username is required",
            })}
            placeholder="Username"
            className={
              errors.username
                ? "block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm border-red-300 bg-red-50 placeholder-red-700 "
                : "block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 bg-gray-50"
            }
          />
          {errors.username && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors.username.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: "Email is required",
            })}
            placeholder="Email"
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
            placeholder="Password"
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
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="con-password"
            {...register("confirmPassword", {
              required: "Please Confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            placeholder="Confirm Password"
            className={
              errors.confirmPassword
                ? "block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm border-red-300 bg-red-50 placeholder-red-700 "
                : "block w-full px-3 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 bg-gray-50"
            }
          />
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-3 rounded bg-black text-white border border-black hover:bg-white hover:text-black transition-colors duration-300 w-full"
          >
            {isSubmitting ? "Registering" : "Agree and Register"}
          </button>
        </div>
        <div className="space-y-6">
          <p className="text-sm text-gray-600 text-center">Or Login with</p>
          <div className="w-full">
            <SocialButtons />
          </div>
        </div>
      </form>
    </AuthCard>
  );
}

export default Register;
