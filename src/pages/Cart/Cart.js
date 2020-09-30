import React, { useContext } from "react";
import carrito from "../../context/cartContext";
import CartTable from "../../components/CartTable/CartTable";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [cart] = useContext(carrito);

  return (
    <div className="home contenedor">
      <h1 className="saludo">Carrito</h1>
      {cart.length > 0 ? (
        <CartTable />
      ) : (
        <React.Fragment>
          <p className="vacio">CARRITO VACIO </p>
          <Link to="/productos" className="btn btn-prod">
            IR A PRODUCTOS
          </Link>
        </React.Fragment>
      )}
    </div>
  );
};

export default Cart;