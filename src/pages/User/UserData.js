import AuthContext from "context/AuthContext";
import React, { useState, useContext } from "react";
import "pages/User/UserData.css";
import Wishlist from "components/User/Wishlist";
import Orders from "components/User/Orders";
import User from "components/User/User";
import { Redirect, Link } from "react-router-dom";

const UserData = () => {
  const [{ isUser }] = useContext(AuthContext);
  const [pag, setPag] = useState("data");
  const [data, setData] = useState("titulo2  selected");
  const [wish, setWish] = useState("titulo2");
  const [orders, setOrders] = useState("titulo2 ");

  function handleClick(newPag) {
    if (pag !== newPag) {
      setPag(newPag);
      if (newPag === "data") {
        setWish("titulo2");
        setOrders("titulo2");
        setData("titulo2 selected");
      } else if (newPag === "wishlist") {
        setData("titulo2");
        setOrders("titulo2");
        setWish("titulo2 selected");
      } else {
        setData("titulo2");
        setWish("titulo2");
        setOrders("titulo2 selected");
      }
    }
    return false;
  }

  return (
    <div className="home contenedor">
      {isUser.loggedIn ? (
        <>
          <h2 className="titulo divisor">Datos del Usuario</h2>
          <div>
            <div className="user-options divisor">
              <h4 className={wish} onClick={() => handleClick("wishlist")}>
                Wishlist
              </h4>
              <h4 className={data} onClick={() => handleClick("data")}>
                Mis Datos
              </h4>
              <h4 className={orders} onClick={() => handleClick("orders")}>
                Mis Compras
              </h4>
            </div>
            {pag === "data" ? (
              <User isUser={isUser} />
            ) : pag === "wishlist" ? (
              <>
                {isUser.wishlist.length > 0 ? (
                  <Wishlist isUser={isUser} />
                ) : (
                  <>
                    <h2 className="dato">
                      No tiene ningun elemento en su lista de deseados.
                    </h2>

                    <Link to="/productos" className="btn-prod">
                      Ir a Productos
                    </Link>
                  </>
                )}
              </>
            ) : isUser.orders.length > 0 ? (
              <Orders />
            ) : (
              <>
                <h2 className="dato">Todavia no realizo ninguna compra.</h2>

                <Link to="/productos" className="btn-prod">
                  Ir a Productos
                </Link>
              </>
            )}
          </div>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default UserData;
