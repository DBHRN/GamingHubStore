import { serverurls } from "../server.js";

const listaProductos = () => fetch(router + "/producto").then(respuesta => respuesta.json());



export const productoServices = {
    listaProductos
};
