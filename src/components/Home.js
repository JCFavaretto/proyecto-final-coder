import React from "react";
import "./Home.css";
import ItemList from './ItemList';

export function Home({nav, greeting }) {
  if (nav === "saludo") {
    return (
      <div className="home">
        <h1 className="saludo">Bienvenido, {greeting}!</h1>
        <p className="txtHome">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          placeat mollitia eligendi voluptatum magni, quia labore ipsum animi
          hic neque necessitatibus sed non quibusdam veniam consectetur,
          excepturi reiciendis adipisci vel?
        </p>
      </div>
    );
  } else if (nav === "lista-productos") {
    return(
      <ItemList />
    );
  }
}
