function buscar(evento) {
const search = evento.target.value.toLowerCase();
  const productos = document.querySelectorAll(".produto");
  productos.forEach((producto) => {
    const name = producto.querySelector(".product-name").textContent;
    if (name.toLowerCase().includes(search)) {
      producto.parentElement.style.display = "flex";
      producto.style.display = "block";
    } else {
      producto.parentElement.style.display = "none";
    }
  });
}
export { buscar };