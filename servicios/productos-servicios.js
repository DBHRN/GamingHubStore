import { serverurls } from "../server.js";

const listaProductos = () => fetch(server + "/producto").then(respuesta => respuesta.json());



export const productoServices = {
    listaProductos
};
