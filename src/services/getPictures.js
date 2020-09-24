export const getPictures = async (id) => {
  const data = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const producto = await data.json();
  const aux = await producto.pictures;

  return aux[0];
};
