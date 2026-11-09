import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Order.css";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3002/allOrders", {
          withCredentials: true,
        });

        setOrders(response.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError(err.response?.data?.message || "Unable to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="orders">Loading orders...</div>;
  }

  if (error) {
    return <div className="orders">{error}</div>;
  }

  return (
    <div className="orders">
      <h3>Orders ({orders.length})</h3>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price}</td>
                <td>
                  <span className={`order-mode ${order.mode.toLowerCase()}`}>
                    {order.mode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
