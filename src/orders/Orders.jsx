import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BuyModelContext } from "../context/BuyModelContext";

function Orders() {
  const [orders, setOrders] = useState([]);

  const { handleCloseBuyModel } = useContext(BuyModelContext);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}orders`).then((res) => {
      setOrders(res.data.data);
    });
  }, [handleCloseBuyModel]);
  return (
    <div className="container text-center mt-5">
      <div>
        <h1 className="fs-3">
          <i className="fa fa-book" aria-hidden="true"></i>&nbsp;Your Orders (
          {orders.length})
        </h1>
        <table className="table table-responsive">
          <thead>
            <th>Sno</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Mode</th>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              return (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>{order.mode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Orders;
