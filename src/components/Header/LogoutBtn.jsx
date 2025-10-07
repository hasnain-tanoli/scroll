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
      className="ml-2 px-4 py-2 border border-gray-300 text-gray-700 bg-white font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
