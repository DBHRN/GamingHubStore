import { productoServices } from "../servicios/producto-servicios.js";
import { buscar } from "./buscador-controller.js";
import { nuevoProduto } from "./nuevoProducto.js";

const productos = document.querySelector("[data-product]");

const searchBox = document.querySelector("[data-search]");

searchBox.addEventListener("keyup", (evento) => {
  buscar(evento);
});

const banner = document.querySelector("[data-banner]");
const renderBanner = async () => {
  try {
    banner.parentElement.style.backgroundImage = `url(../assets/banner_index.png)`;
  } catch (error) {
    console.log(error);
  }
};


const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
      productos.appendChild(
        nuevoProduto(
          elemento.name,
          elemento.price,
          elemento.imageUrl,
          elemento.id
        )
      );
    });
  } catch (erro) {
    console.log(erro);
  }
};

render();
renderBanner();