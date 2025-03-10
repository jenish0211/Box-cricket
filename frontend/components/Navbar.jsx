import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <h1 className="text-2xl font-bold">Box Cricket</h1>
      <div className="flex gap-4">
        <Link to="/products" className="hover:text-blue-200">
          Products
        </Link>
        {!localStorage.getItem("token") ? (
          <>
            <Link to="/signup" className="hover:text-blue-200">
              Signup
            </Link>
            <Link to="/login" className="hover:text-blue-200">
              Login
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="hover:text-blue-200"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;