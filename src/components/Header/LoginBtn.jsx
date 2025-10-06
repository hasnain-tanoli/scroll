import { useNavigate } from "react-router-dom";
const LogInBtn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogin}
      className="ml-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-primary font-semibold rounded hover:opacity-90 transition cursor-pointer"
    >
      Login
    </button>
  );
};
export default LogInBtn;
