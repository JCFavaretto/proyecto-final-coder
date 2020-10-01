import Categories from "components/Categories/Categories";
import ItemList from "components/ItemList/ItemList";
import React from "react";

const Products = () => {
  return (
    <div className="home contenedor">
      <h3 className="titulo">Lista de Productos</h3>
      <Categories />

      <ItemList />
    </div>
  );
};

export default Products;
