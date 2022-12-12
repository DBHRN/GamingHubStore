import { clientServices } from "../servicios/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    
    const email = document.querySelector("[data-email]").value;
    const password = document.getElementById("password");
    const aviso = document.getElementById("aviso");
    try {
        const perfil = await clientServices.listaClientes();
        for (let i = 0; i < perfil.length; i++) {
            if (perfil[i].email == email && perfil[i].password == password.value) {
                window.location.href = "../screens/admin_productos.html";
            } else {
                aviso.parentElement.classList.add("error-container--invalid");
            }
        }} catch (error) {
            alert("Error al cargar los datos");
    }
};
    


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    obtenerInformacion();
});

