import React, { useContext } from "react";
import carrito from "../../context/cartContext";
import CartTable from "../../components/CartTable/CartTable";
import { Link } from "react-router-dom";
import "./Cart.css";
import Comprar from "components/Comprar/Comprar";
import AuthContext from "context/AuthContext";

const Cart = () => {
  const [{ cart, setCart, emptyStorage, totalGasto, updateStock }] = useContext(
    carrito
  );
  const [{ isUser }] = useContext(AuthContext);

  return (
    <div className="home contenedor cart">
      <h1 className="titulo ">Carrito</h1>
      {cart.length > 0 ? (
        <div>
          <CartTable cart={cart} totalGasto={totalGasto()} />
          {isUser.loggedIn ? (
            <Comprar
              cart={cart}
              setCart={setCart}
              total={totalGasto()}
              updateStock={updateStock}
              emptyStorage={emptyStorage}
            />
          ) : (
            <>
              <p className="error-msg">
                Tiene que iniciar sesion para continuar con la compra
              </p>
              <Link to="/ingresar" className="btn-prod">
                Ingresar
              </Link>
            </>
          )}{" "}
        </div>
      ) : (
        <React.Fragment>
          <p className="vacio">CARRITO VACIO </p>
          <Link to="/productos" className="btn-prod">
            IR A PRODUCTOS
          </Link>
        </React.Fragment>
      )}
    </div>
  );
};

export default Cart;
