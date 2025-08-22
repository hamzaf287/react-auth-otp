import React from "react";
import DashImg from "../assets/dashboard.svg";
import CartImg from "../assets/cart.png";
import ShippingImg from "../assets/shipping.png";
import SettingImg from "../assets/settings.png";
import PaymentImg from "../assets/payment.png";
import ContactUsImg from "../assets/contactUs.png";
import ContactUsDarkImg from "../assets/contactUsDark.png";
import ProductImg from "../assets/product.png";
import QuitImg from "../assets/quit.png";
import QuitDarkImg from "../assets/quitDark.png";
function SideBar() {
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-4 py-7 overflow-y-auto bg-gray-50 dark:bg-[#171A3B]">
          <a href="/" className="flex items-center justify-center ps-2.5 mb-5">
            <img
              src={QuitDarkImg}
              className="h-full me-3 sm:h-7 dark:hidden"
              alt="Dashboard Logo"
            />
            <img
              src={QuitImg}
              className="hidden dark:block h-full me-3 sm:h-7"
              alt="Dashboard Logo"
            />
          </a>
          <ul className="space-y-4 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img src={DashImg} alt="Dashboard" className="w-5 h-5" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img src={CartImg} alt="Cart" className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap">Order</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img src={ProductImg} alt="Cart" className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap">Product</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img src={ShippingImg} alt="Shipping" className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap">Shipping</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img src={PaymentImg} alt="Payment" className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap">Payment</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img src={SettingImg} alt="Settings" className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </a>
            </li>
          </ul>
          <div className="mt-6 py-6 px-2 space-x-3 space-y-4 items-center">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Customer Support
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ask you query , place requests or important issues. Our support
              team will contact 24/7 to you.
            </p>
            <button
              type="button"
              className="px-5 py-2 text-md font-medium text-center inline-flex items-center text-[#1A6BBA] bg-[#C3DFFA] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#15F3FC] dark:hover:bg-[#1cdee6] dark:focus:ring-[#1cdee6] dark:text-black"
            >
              <img
                className="w-3 h-3 me-2 "
                src={ContactUsDarkImg}
                alt="Contact Icon"
              />
              Connect Now
            </button>
          </div>
          <footer className="fixed bottom-5 mt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Terms & Services Privacy Policy
            </p>
          </footer>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
