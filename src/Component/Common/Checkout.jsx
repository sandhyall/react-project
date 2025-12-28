import React, { useState } from 'react';
import validate from './Validate';

const Checkout = () => {
  const product = [
    {
      name: "Shirt",
      color: "Red",
      size: "M",
      price: 200,
      image: "https://picsum.photos/200?random=1",
    }
  ];

  const shippingAddress = {
    fullname: '',
    address: '',
    city: '',
    postcode: '',
    country: '',
    phone: '',
  };

  const [form, setForm] = useState(shippingAddress);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('submitted successfully:', form);
      setForm(shippingAddress);
    }
  };

  const totalPrice = product.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4">
      <h1 className='text-xl font-bold text-center mb-6'>Order Summary</h1>
      <div className="space-y-4 mb-8">
        {product.map((item, index) => (
          <div key={index} className="flex items-center gap-4 border p-4 rounded">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p>Color: {item.color}</p>
              <p>Size: {item.size}</p>
              <p className="font-medium">₹{item.price}</p>
            </div>
          </div>
        ))}

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-medium">
            <p>Subtotal</p>
            <p>₹{totalPrice.toLocaleString()}</p>
          </div>
          <div className="flex justify-between text-medium">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between items-center text-medium border-t-2 pt-4 font-semibold">
            <p>Total</p>
            <p>₹{totalPrice.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 flex justify-center items-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Contact Details</h2>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value="user@example.com"
                disabled
                className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-gray-700 cursor-not-allowed"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Delivery</h2>

              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              />
              {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}

              <label className="block mb-1 mt-3">Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

              <label className="block mb-1 mt-3">City</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}

              <label className="block mb-1 mt-3">Post Code</label>
              <input
                type="text"
                name="postcode"
                value={form.postcode}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              />
              {errors.postcode && <p className="text-red-500 text-sm">{errors.postcode}</p>}

              <label className="block mb-1 mt-3">Country</label>
              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              />
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

              <label className="block mb-1 mt-3">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
            >
              Continue Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
