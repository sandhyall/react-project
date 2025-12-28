import Checkout from "./Checkout";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate

const useCount = (initialize) => {
  const [count, setCount] = useState(initialize);

  const Increment = () => {
    setCount((count) => count + 1);
  };

  const Decrement = () => {
    setCount((count) => (count > 1 ? count - 1 : 1));
  };

  return {
    count,
    setCount,
    Increment,
    Decrement,
  };
};

const Cart = () => {
  const cust1 = useCount(1);
  const navigate = useNavigate(); // <-- initialize navigate

  const [product, setProduct] = useState([
    {
      name: "Shirt",
      color: "Red",
      size: "M",
      price: 200,
      image: "https://picsum.photos/200?random=1",
    },
  ]);

  const handleRemove = (index) => {
    setProduct((Products) => Products.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    navigate("/Checkout"); 
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {product.map((item, index) => (
        <div key={index} className="flex items-center gap-4 border p-4 rounded">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover rounded"
          />

          <div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p>Color: {item.color}</p>
            <p>Size: {item.size}</p>
            <p className="font-medium">₹{item.price}</p>
          </div>

          <button onClick={cust1.Decrement} className="px-2 border">
            -
          </button>
          <span className="px-3">{cust1.count}</span>
          <button onClick={cust1.Increment} className="px-2 border">
            +
          </button>

          <MdDelete
            onClick={() => handleRemove(index)}
            className="cursor-pointer"
          />
        </div>
      ))}

      <div className="bg-blue-500 hover:bg-pink-300 mt-4">
        <button
          className="w-full flex items-center justify-between text-white px-3 py-2"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
