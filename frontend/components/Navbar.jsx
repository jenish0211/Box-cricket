import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">Box Cricket</h1>
      <div>
        <Link to="/products" className="mx-2 hover:underline">Products</Link>
        {!localStorage.getItem("token") ? (
          <>
            <Link to="/signup" className="mx-2 hover:underline">Signup</Link>
            <Link to="/login" className="mx-2 hover:underline">Login</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
