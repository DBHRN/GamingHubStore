import { productoServices } from "../servicios/producto-servicios.js";
import { buscar } from "./buscador-controller.js";
import { formatPrice } from "../formatterPrices.js";

const nuevoProduto = (name, price, imageUrl, id) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="produto">
            <a href="screens/producto.html?id=${id}">
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

const videojuegos = document.querySelector("[data-product-games]");
const consolas = document.querySelector("[data-product-consoles]");
const otros = document.querySelector("[data-product-others]");

const searchBox = document.querySelector("[data-search]");

searchBox.addEventListener("keyup", (evento) => {
  buscar(evento);
});

const banner = document.querySelector("[data-banner]");
const renderBanner = async () => {
  try {
    banner.parentElement.style.backgroundImage = `url(assets/banner_index.png) `;
  } catch (error) {
    console.log(error);
  }
};

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    console.log(listaProductos);
    listaProductos.forEach((elemento) => {
      if (elemento.tipo === "Videojuego" && videojuegos.childElementCount < 5) {
        console.log(videojuegos)
      videojuegos.appendChild(
        nuevoProduto(
          elemento.name,
          elemento.price,
          elemento.imageUrl,
          elemento.id
        )
      )};
      if (elemento.tipo === "Consola" && consolas.childElementCount < 5) {
        consolas.appendChild(
          nuevoProduto(
            elemento.name,
            elemento.price,
            elemento.imageUrl,
            elemento.id
          )
        )}
    
      if (elemento.tipo === "Otro" && otros.childElementCount < 5) {
        otros.appendChild(
          nuevoProduto(
            elemento.name,
            elemento.price,
            elemento.imageUrl,
            elemento.id
          )
        )}
      });
  } catch (erro) {
    console.log(erro);
  }
};

render();
renderBanner();

