import React, { useState, useEffect } from "react";

const sampleOrders = [
  {
    _id: "order1",
    products: [
      { _id: "product1", name: "Product 1", price: 20, image: "product1.jpg" },
      { _id: "product2", name: "Product 2", price: 30, image: "product2.jpg" },
    ],
    user: "user1",
    totalPrice: 50,
    status: "pending",
    createdAt: new Date("2024-05-23T10:30:00"),
  },
  {
    _id: "order2",
    products: [
      { _id: "product3", name: "Product 3", price: 25, image: "product3.jpg" },
    ],
    user: "user2",
    totalPrice: 25,
    status: "confirmed",
    createdAt: new Date("2024-05-22T15:45:00"),
  },
  {
    _id: "order3",
    products: [
      { _id: "product4", name: "Product 4", price: 15, image: "product4.jpg" },
      { _id: "product5", name: "Product 5", price: 35, image: "product5.jpg" },
      { _id: "product6", name: "Product 6", price: 45, image: "product6.jpg" },
    ],
    user: "user1",
    totalPrice: 95,
    status: "delivered",
    createdAt: new Date("2024-05-21T09:00:00"),
  },
];

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">My Orders</h1>
      <div className="grid grid-cols-1 gap-6">
        {sampleOrders.map((order) => (
          <div key={order._id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">
              Order ID: {order._id}
            </h2>
            <p>Total Price: ${order.totalPrice}</p>
            <p>Status: {order.status}</p>
            <p>Ordered At: {new Date(order.createdAt).toLocaleString()}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Products</h3>
              <ul>
                {order.products.map((product) => (
                  <li key={product._id} className="flex items-center mb-2">
                    <img
                      src={
                        "https://nuturemite.info/wp-content/uploads/2022/11/1074343-3.jpg"
                      }
                      alt={product.name}
                      className="w-12 h-12 object-cover mr-2"
                    />
                    <span>
                      {product.name} - ${product.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
