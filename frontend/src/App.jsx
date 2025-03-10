import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Products from "../pages/Products";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="container mx-auto px-4 py-6">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
