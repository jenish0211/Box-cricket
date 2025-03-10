import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Products from "../pages/Products";
import "./index.css";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </BrowserRouter>
);

export default App;