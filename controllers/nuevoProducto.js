import { formatPrice } from "../formatterPrices.js";
const nuevoProduto = (name, price, imageUrl, id) => {
    const card = document.createElement("div");
    const contenido = `
          <div class="produto">
              <a href="producto.html?id=${id}">
              <img class="product-image" src="${imageUrl}" alt="img"></img>
              <h1 class="product-name"> ${name} </h1>
              <p class="preco">${formatPrice(price)}</p>
              </a>
          </div>   
      `;
    card.innerHTML = contenido;
    card.dataset.id = id;
  
    return card;
  };
  export { nuevoProduto};