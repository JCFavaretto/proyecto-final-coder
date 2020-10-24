import { useOrders } from "hooks/useOrders";
import Loading from "components/Loading/Loading";
import React from "react";

const Orders = ({ isUser }) => {
  const { loading, orders } = useOrders();

  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <ul>
            {isUser.loggedIn &&
              orders.map(({ id }) => (
                <li key={id}>
                  <p>ID de la compra: {id}</p>
                  <p>Gasto Total: {} </p>
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Orders;
