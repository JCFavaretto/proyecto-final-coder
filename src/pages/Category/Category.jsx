import Categories from "components/Categories/Categories";
import ItemCategoryList from "components/ItemCategoryList/ItemCategoryList";
import React from "react";

const Category = () => {
  return (
    <div className="home contenedor">
      <h3 className="titulo divisor">Lista de Productos</h3>
      <Categories />

      <ItemCategoryList />
    </div>
  );
};

export default Category;
