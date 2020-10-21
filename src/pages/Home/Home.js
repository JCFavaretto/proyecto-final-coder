import React from "react";
import "./Home.css";
import ItemList from "components/ItemList/ItemList";

export default function Home({ greeting }) {
  function show() {
    let show = "";
    if (greeting !== "a la tecnotienda") {
      show = "high-light";
    }
    return show;
  }

  return (
    <div className="home contenedor">
      <div className="saludo">
        <h1 className="titulo">
          Bienvenido <span className={show()}>{greeting}!</span>
        </h1>
        <p className="txtHome divisor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          placeat mollitia eligendi voluptatum magni, quia labore ipsum animi
          hic neque necessitatibus sed non quibusdam veniam consectetur,
          excepturi reiciendis adipisci vel?
        </p>
      </div>
      <h2 className="titulo2">Algunos de Nuestros Productos</h2>
      <ItemList className="lista-home" max={4} />
    </div>
  );
}
