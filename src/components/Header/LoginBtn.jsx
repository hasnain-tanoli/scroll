import { useNavigate } from "react-router-dom";
const LogInBtn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogin}
      className="ml-2 px-4 py-2 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-lg hover:from-primary-light hover:to-primary transition-all duration-200 shadow-sm hover:shadow-md"
    >
      Login
    </button>
  );
};
export default LogInBtn;
