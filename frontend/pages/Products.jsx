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
          headers: { Authorization: `Bearer ${token}` }
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
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Products</h2>
      <ul className="space-y-2">
        {products.map((product, index) => (
          <li key={index} className="p-2 border rounded flex justify-between">
            <span>{product.name}</span>
            <span className="font-bold">${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;