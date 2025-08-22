import React from "react";
import UserImg from "../assets/user.jpg";
function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("currentUser")) || [];
  const saved = JSON.parse(localStorage.getItem("users")) || [];
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#030C1B] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={UserImg}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-gray-300 dark:border-gray-600"
          />
        </div>

        {/* Name */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
          {user.username}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{user.email}</p>

        {/* Bio */}
        <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
          Passionate about creating intuitive digital experiences. Loves coding,
          coffee ☕, and minimal design.
        </p>

        {/* Social Links */}
        <div className="flex justify-center mt-5 space-x-4">
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
          >
            🌐
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
          >
            🐦
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
          >
            💼
          </a>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            Follow
          </button>
          <button className="px-4 py-2 border border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
