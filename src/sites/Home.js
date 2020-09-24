import React from "react";
import "./Home.css";
import ItemList from "./ItemList";

export default function Home({ greeting }) {
  return (
    <div className="home contenedor">
      <div className="saludo">
        <h1>Bienvenido, {greeting}!</h1>
        <p className="txtHome">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          placeat mollitia eligendi voluptatum magni, quia labore ipsum animi
          hic neque necessitatibus sed non quibusdam veniam consectetur,
          excepturi reiciendis adipisci vel?
        </p>
      </div>
      <ItemList className="lista-home" max={8} />
    </div>
  );
}
