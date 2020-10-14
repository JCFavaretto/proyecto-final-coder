import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "components/NavBar/NavBar.js";
import { CartProvider } from "context/cartContext";
import { AuthProvider } from "context/AuthContext";
import Home from "pages/Home/Home.js";
import Cart from "pages/Cart/Cart.js";
import ItemDetailContainer from "pages/ItemDetailContainer";
import Products from "pages/Products/Products";
import Category from "pages/Category/Category";
import Authorization from "pages/Authorization/Authorization";

export default function App() {
  let nombre = "Juan";
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route path="/productos/categories/:categoryID">
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
                <Authorization />
              </Route>
              <Route exact path="/">
                <Home greeting={nombre} />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}
