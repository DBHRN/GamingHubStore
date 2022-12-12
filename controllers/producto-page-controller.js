import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";
import { nuevoProduto } from "./nuevoProducto.js";

const showProduto = (name, price, imageUrl, id,description) => {
  const card = document.createElement("div");
  const contenido = `
  <div class="producto-info-section">
  <section class="imagen-producto-container_div" data-imagen-producto>
      <div class="imagen-producto-container" >
          <img class="imagen-producto" src="${imageUrl}" alt="imagen-producto" />
      </div>
  </section>
  <section class="producto-info" data-product-consoles>
      <div class="producto-nombre-container">
          <h1 class="producto-nombre">${name}</h1>
      </div>
      <div class="precio_descripcion_container" >
          <h1 class="producto-precio">${formatPrice(price)}</h1>
          <article>
              <p class="producto-descripción">${description}</p>
          </article>
      </div>
  </section>
</section>
</div>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const producto_section = document.querySelector("[data-producto-info]");
const recommended = document.querySelector("[data-product-recommended]");
const getURL = new URL(window.location);
const id = getURL.searchParams.get("id");
const banner = document.querySelector("[data-banner]");

const renderBanner = (elemento,id) => {
    console.log(elemento.tipo)

    if (elemento.tipo == "Videojuego") {
        banner.parentElement.style.backgroundImage = "url(../assets/banner_videojuegos.png)";
    }
    if (elemento.tipo == "Consola") {
        banner.parentElement.style.backgroundImage = "url(../assets/banner_consolas.png)";
    }
    if (elemento.tipo == "Otro") {
        banner.parentElement.style.backgroundImage = "url(../assets/banner_otros.png)";
    }
};

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
        if (elemento.id == id) {
            producto_section.appendChild(
                showProduto(
                elemento.name,
                elemento.price,
                elemento.imageUrl,
                elemento.id,
                elemento.description,
                )
            );
            try {
                renderBanner(elemento,elemento.id);
            } catch (error) {
                console.log(error);
            }
        }
        if (elemento.id != id && recommended.childElementCount < 6) {
            recommended.appendChild(
                nuevoProduto(
                elemento.name,
                elemento.price,
                elemento.imageUrl,
                elemento.id
                )
            );
        }
    });
  } catch (erro) {
    console.log(erro);
  }
};

render();