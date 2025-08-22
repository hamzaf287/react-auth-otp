import { useNavigate } from "react-router-dom";

export default function useHandleOTP(nextRoute = "/dashboard") {
  const navigate = useNavigate();

  return () => {
    navigate("/otp", { state: { nextRoute } });
  };
}
