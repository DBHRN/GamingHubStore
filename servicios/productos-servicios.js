const listaProductos = () => fetch(" router").then(respuesta => respuesta.json());



export const productoServices = {
    listaProductos
};
