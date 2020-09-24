export const getProductos = async (max) => {
  const apiURL = `https://api.mercadolibre.com/sites/MLA/search?category=1144&&limit=${max}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((res) => res.results)
    .then((response) => {
      const data = response;
      if (Array.isArray(data)) {
        const productos = data.map((element) => {
          const { id, title, price, thumbnail } = element;
          return {
            id,
            title,
            price,
            thumbnail,
          };
        });
        return productos;
      }
    });
};
