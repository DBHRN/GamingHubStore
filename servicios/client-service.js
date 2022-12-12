//Fetch API

const listaClientes = () => fetch("https://gaminghubstore.onrender.com/perfil").then((respuesta) => respuesta.json());


export const clientServices = {
    listaClientes,
}
