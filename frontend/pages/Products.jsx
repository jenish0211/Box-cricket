import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return navigate("/login");

        const res = await axios.get("http://localhost:5000/products", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProducts(res.data);
      } catch (error) {
        alert("Unauthorized! Please login.");
        navigate("/login");
      }
    };
    fetchProducts();
  }, [navigate]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul className="space-y-4">
        {products.map((product, index) => (
          <li key={index} className="bg-white p-4 rounded shadow-md">
            <span className="font-semibold">{product.name}</span>
            <span className="text-blue-600 ml-4">${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;