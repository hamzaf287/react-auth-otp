import facebookIcon from "../assets/facebook.svg";
import googleIcon from "../assets/google.svg";
import appleIcon from "../assets/apple.svg";

export default function SocialButtons() {
  return (
    <div className="flex gap-3 w-full">
      <button
        type="button"
        className="flex-1 flex items-center justify-center bg-white border border-gray-300 
                   hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 
                   font-medium rounded-lg text-sm py-2.5"
      >
        <img src={facebookIcon} alt="Facebook" className="w-4 h-5" />
      </button>
      <button
        type="button"
        className="flex-1 flex items-center justify-center bg-white border border-gray-300 
                   hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 
                   font-medium rounded-lg text-sm py"
      >
        <img src={googleIcon} alt="Google" className="w-5 h-6" />
      </button>
      <button
        type="button"
        className="flex-1 flex items-center justify-center bg-white border border-gray-300 
                   hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-500 
                   font-medium rounded-lg text-sm py-2.5"
      >
        <img src={appleIcon} alt="Apple" className="w-4 h-10" />
      </button>
    </div>
  );
}
