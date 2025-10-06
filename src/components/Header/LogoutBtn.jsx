import { useDispatch } from "react-redux";
import authService from "../../backend/auth";
import { logout } from "../../features/auth/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <button
      onClick={handleLogout}
      className="ml-4 px-3 sm:px-4 py-1.5 sm:py-2 border border-white text-white bg-transparent font-semibold rounded hover:bg-white hover:text-primary transition"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
