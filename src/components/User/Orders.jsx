import { useOrders } from "hooks/useOrders";
import Loading from "components/Loading/Loading";
import React, { useState } from "react";
import CartTable from "components/CartTable/CartTable";

const Orders = () => {
  const { loading, orders } = useOrders();
  const [order, setOrder] = useState(false);

  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <section className="orders">
            <div className="lista-orders bordes">
              <h4 className="titulo2 divisor">Ordenes de compras</h4>
              <ul className="ali-left ">
                {orders.map((aux) => {
                  return (
                    <li
                      key={aux.id}
                      onClick={() => {
                        setOrder(aux);
                      }}
                    >
                      {aux.id}
                    </li>
                  );
                })}
              </ul>
            </div>
            {order && (
              <div className="item bordes txtHome" key={order.id}>
                <p className=" titulo2 divisor">
                  ID de la compra:<span className="dato"> {order.id}</span>
                </p>
                <p className="texto-order">
                  Fecha de la compra:
                  <span className="dato">
                    {new Date(order.date.seconds * 1000).toLocaleDateString(
                      "es-MX"
                    )}{" "}
                  </span>
                </p>
                <ul className="ali-left">
                  <li className="titulo2">Articulos comprados</li>
                  <li>
                    <CartTable
                      cart={order.cart}
                      totalGasto={order.total}
                      order={true}
                    />
                  </li>
                </ul>
              </div>
            )}
          </section>
        )}
      </div>
    </>
  );
};

export default Orders;
