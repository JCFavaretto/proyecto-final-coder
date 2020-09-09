import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import { NavBar } from './components/NavBar/NavBar.js';
import { Home } from "./components/Home.js";
import { ItemCount } from "./components/ItemCount.js";


export default function App() {
  let nombre = "Juan";
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          
          <Route path="/productos">
            <Home nav='lista-productos' />
          </Route>
          <Route path="/ingresar">
            <h1 className="inner-test">Iniciar sesión</h1> <br></br>
            <p className="inner-test">Registrar nuevo usuario</p>
          </Route>
          <Route path="/carrito">
            <h1 className="inner-text">Carrito</h1>
            <ItemCount initial={0} max={5} min={0} onAdd={0} />
          </Route>
          <Route exact path="/">
            <Home nav='saludo' greeting={nombre} />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  )
 }