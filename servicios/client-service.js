//Fetch API

import { serverurls } from "../server.js";
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());


export const clientServices = {
    listaClientes,
}
