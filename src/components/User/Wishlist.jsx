import Loading from "components/Loading/Loading";
import Item from "components/Item/Item";
import { useWishlist } from "hooks/useWishlist";
import React from "react";

const Wishlist = ({ isUser }) => {
  const { loading, wishlist } = useWishlist();

  return (
    <div className="contenedor">
      {loading ? (
        <Loading />
      ) : (
        <ul className="lista-prod">
          {isUser.loggedIn &&
            wishlist.map(({ id, picture, title, price }) => (
              <Item
                key={id}
                id={id}
                img={picture}
                nombre={title}
                precio={price}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
