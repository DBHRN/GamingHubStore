const listaProductos = () => fetch("https://dbhrn.github.io/GamingHubStore/producto").then(respuesta => respuesta.json());



export const productoServices = {
    listaProductos
};
