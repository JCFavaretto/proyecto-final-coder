import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CartProvider } from "context/cartContext";
import AuthContext from "context/AuthContext";
import { NavBar } from "components/NavBar/NavBar.js";
import Home from "pages/Home/Home.js";
import Cart from "pages/Cart/Cart.js";
import ItemDetailContainer from "pages/ItemDetailContainer";
import Products from "pages/Products/Products";
import Category from "pages/Category/Category";
import Authorization from "pages/Authorization/Authorization";
import "./App.css";
import UserData from "pages/User/UserData";

export default function App() {
  const [{ isUser, loading }] = useContext(AuthContext);

  return (
    <div className="App">
      {!loading && (
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route path="/user/:id">
                <UserData />
              </Route>
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
                {isUser.loggedIn ? <Redirect to="/" /> : <Authorization />}
              </Route>
              <Route path="/home">
                <Home
                  greeting={
                    isUser.loggedIn ? isUser.nombre : "a la tecnotienda"
                  }
                />
              </Route>
              <Route path="/">
                <Redirect to="/home" />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartProvider>
      )}
    </div>
  );
}
