import React from "react";

const CartDetail = ({ count, title, price, thumbnail }) => {
  return (
    <React.Fragment>
      <th scope="row">{count}</th>
      <td>
        <img src={thumbnail} alt={title} />
      </td>
      <td>{title}</td>
      <td>${price}</td>
      <td>${price * count}</td>
    </React.Fragment>
  );
};

export default CartDetail;
