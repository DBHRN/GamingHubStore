//GET
import { serverurls } from "../server.js";
const listaProductos = () =>
  fetch(router + "/producto")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

const listarUnProduto = (id) => {
  return fetch(router + `/${id}`).then((resposta) => {
    return resposta.json();
  });
};

//POST
const creaProdutos = (name, imageUrl, price, description, tipo) => {
  return fetch(router + `/producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
      description,
      tipo,
      id: uuid.v4(),
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error("No se pudo crear el producto");
  });
};

// PUT/PATCH
const alteraProduto = async (id, imageUrl, name, price, description) => {
  return fetch(router + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
      description,
    }),
  })
    .then((resposta) => {
      return resposta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteProducto = async (id) => {
  return await fetch(router + `/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const productoServices = {
  listaProductos,
  listarUnProduto,
  creaProdutos,
  alteraProduto,
  deleteProducto,
};
