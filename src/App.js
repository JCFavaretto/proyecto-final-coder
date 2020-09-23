import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.js";
import { Home } from "./components/Home.js";
import Cart from "./components/Cart.js";
import ItemList from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./components/cartContext";

export default function App() {
  let nombre = "Juan";
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <CartProvider>
            <Route path="/productos/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/productos">
              <ItemList max={12} />
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
          </CartProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
