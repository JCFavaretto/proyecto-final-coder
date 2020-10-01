import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "components/NavBar/NavBar.js";
import Home from "pages/Home/Home.js";
import Cart from "pages/Cart/Cart.js";
import ItemDetailContainer from "pages/ItemDetailContainer";
import { CartProvider } from "context/cartContext";
import Products from "pages/Products/Products";
import Category from "pages/Category/Category";

export default function App() {
  let nombre = "Juan";
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/products/categories/:categoryID">
              <Category />
            </Route>
            <Route path="/productos/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/productos">
              <Products />
            </Route>
            <Route path="/carrito">
              <Cart />
            </Route>
            <Route path="/ingresar">
              <h1 className="inner-test">Iniciar sesión</h1> <br></br>
              <p className="inner-test">Registrar nuevo usuario</p>
            </Route>
            <Route exact path="/">
              <Home greeting={nombre} />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
