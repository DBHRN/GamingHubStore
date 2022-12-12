//Fetch API

const listaClientes = () => fetch("https://dbhrn.github.io/GamingHubStore/perfil").then((respuesta) => respuesta.json());


export const clientServices = {
    listaClientes,
}
