import { useOrders } from "hooks/useOrders";
import Loading from "components/Loading/Loading";
import React from "react";
import CartTable from "components/CartTable/CartTable";

const Orders = ({ isUser }) => {
  const { loading, orders } = useOrders();

  console.log(orders);
  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <ul className="lista-prod">
            {isUser.loggedIn &&
              orders.map(({ id, total, cart, date }) => (
                <li className="item bordes txtHome" key={id}>
                  <p className="divisor">
                    ID de la compra:<span className="dato"> {id}</span>
                  </p>
                  <p className="titulo2 ali-left">
                    Fecha de la compra:
                    <span className="dato">
                      {new Date(date.seconds * 1000).toLocaleDateString(
                        "es-MX"
                      )}{" "}
                    </span>
                  </p>
                  <ul className="ali-left">
                    <li className="titulo2">Articulos comprados</li>
                    <CartTable cart={cart} totalGasto={total} order={true} />
                  </ul>
                  <p>
                    Gasto Total: <span className="dato"> {total}</span>
                  </p>
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Orders;
