//Proporciona los datos de un producto particular a travez de su id

export const getProducto = async (id) => {
  const apiURL = `https://api.mercadolibre.com/items/${id}`;

  return fetch(apiURL)
    .then((res) => res.json())

    .then((data) => {
      const {
        id,
        title,
        price,
        available_quantity,
        secure_thumbnail,
        pictures,
      } = data;
      const { secure_url } = pictures[0];

      const producto = {
        id,
        title,
        price,
        available_quantity,
        secure_thumbnail,
        secure_url,
      };
      return producto;
    });

  /*
  const data = await fetch(apiURL);
  const producto = await data.json();
  const producto = ;



  return producto;
  */
};
