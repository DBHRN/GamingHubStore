const listaProductos = () => fetch("https://gaminghubstore.onrender.com/producto").then(respuesta => respuesta.json());



export const productoServices = {
    listaProductos
};
