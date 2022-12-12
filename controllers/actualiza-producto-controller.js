import { productoServices } from "../servicios/producto-servicios.js";

const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const showImageUrl = document.querySelector("[data-url-image]");
const inputImageUrl = document.querySelector("[data-url]");
const inputNombre = document.querySelector("[data-nombre]");
const inputPrecio = document.querySelector("[data-precio]");
const inputDescripcion = document.querySelector("[data-descripcion]");

productoServices.listarUnProduto(id).then((datos) => {
  showImageUrl.setAttribute("src", datos.imageUrl);
  inputImageUrl.value = datos.imageUrl;
  inputNombre.value = datos.name;
  inputPrecio.value = datos.price;
  inputDescripcion.value = datos.description;
});

const formulario = document.querySelector("[data-form]");

inputImageUrl.addEventListener("input", (evento) => {
  showImageUrl.setAttribute("src", evento.target.value);
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  productoServices
    .alteraProduto(
      id,
      inputImageUrl.value,
      inputNombre.value,
      inputPrecio.value,
      inputDescripcion.value
    )
    .then(() => {
      window.location.href = "../screens/admin_productos.html";
    });
});
