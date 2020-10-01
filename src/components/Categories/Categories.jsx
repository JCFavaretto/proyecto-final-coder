import { useCategory } from "hooks/useCategory";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const { categories } = useCategory();

  return (
    <div className="categories contenedor">
      {Array.isArray(categories) &&
        categories.map((aux) => {
          const categoryID = aux.id;
          return (
            <NavLink
              to={`/products/categories/${categoryID}`}
              activeClassName="activeLink"
              className="categoria"
              key={aux.id}
            >
              {aux.name}
            </NavLink>
          );
        })}
    </div>
  );
};

export default Categories;
