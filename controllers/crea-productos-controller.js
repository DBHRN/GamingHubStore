import { productoServices } from "../servicios/producto-servicios.js";

const form = document.querySelector("[data-form]");
//agregar una imagen a una variable
const showImageUrl = document.querySelector("[data-url-image]");
const inputImageUrl = document.querySelector("[data-url]");


inputImageUrl.addEventListener("input", (evento) => {
  console.log(evento.target.value);
  showImageUrl.removeAttribute("src");
  showImageUrl.setAttribute("src", evento.target.value);
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("[data-nome]").value;
  const url = document.querySelector("[data-url]").value;
  const preco = document.querySelector("[data-preco]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
  const tipo = document.querySelector("[data-select]").value;

  productoServices
    .creaProdutos(nome, url, preco, descripcion, tipo)
    .then((respuesta) => {
      window.location.href = "../screens/admin_productos.html";
      console.log(respuesta);
    })
    .catch((err) => {
      console.log(err);
    });
});
