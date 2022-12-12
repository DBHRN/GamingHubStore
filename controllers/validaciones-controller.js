export function validar(input) {
  const tipodeInput = input.dataset.tipo;
  if (validadores[tipodeInput]) {
    validadores[tipodeInput](input);
}
  if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").textContent = "";
  }else{
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").textContent = mostrarError(tipodeInput, input);
    }
};
const tiposdeErrores = [
"valueMissing",
"typeMismatch",
"patternMismatch",
"customError",
];
const mensajesdeError = {
nombre: {
valueMissing: "El campo nombre no puede estar vacío",
customError: "El mensaje debe tener máximo 20 caracteres"
},
email: {
valueMissing: "El campo email no puede estar vacío",
typeMismatch: "El email no es válido",
},
password: {
valueMissing: "El campo password no puede estar vacío",
},
mensaje: {
valueMissing: "El campo teléfono no puede estar vacío",
customError: "El mensaje debe tener mínimo 40 caracteres y máximo 120"
},
url: {
valueMissing: "El campo URL no puede estar vacío"
},
precio: {
valueMissing: "El campo precio no puede estar vacío",
patternMismatch: "El precio debe tener solo números, entre 1 y 7 dígitos"
},
descripcion: {
valueMissing: "El campo descripción no puede estar vacío",
customError: "La descripción debe tener entre 3 y 200 caracteres"
},
buscar: {
},
};
function mostrarError(tipodeInput, input) {
  let mensaje = "";
  tiposdeErrores.forEach((error) => {
      if (input.validity[error]) {
          mensaje = mensajesdeError[tipodeInput][error];
      }
  });
  return mensaje;
}
const validadores = {
  nombre: (input) => validartextoNombre(input),
  mensaje: (input) => validartextoMensaje(input),
  descripcion: (input) => validartextoDescripcion(input),
};
function validartextoMensaje(input) {
  const patron = /^.{40,120}$/;
  if (patron.test(input.value)) {
      input.setCustomValidity("");
  } else {
      input.setCustomValidity("El mensaje debe tener entre 40 y 120 caracteres");
  }
}
function validartextoDescripcion(input) {
  const patron = /^.{3,200}$/;
  if (patron.test(input.value)) {
      input.setCustomValidity("");
  } else {
      input.setCustomValidity("La descripción debe tener entre 3 y 150 caracteres");
  }
}
function validartextoNombre(input) {
  
  if (input.value.length <= 20) {
      input.setCustomValidity("");
  } else {
      input.setCustomValidity("La descripción debe tener máximo 20 caracteres");
  }
}

