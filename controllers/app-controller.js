import {validar} from "./validaciones-controller.js";
const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");
const selections = document.querySelectorAll("select");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        console.log("Dios no te amaaaaaa")
        validar(input.target);
    });
});

textareas.forEach((textarea) => {
    textarea.addEventListener("blur", (textarea) => {
        console.log("Dios no te amaaaaaa")
        validar(textarea.target);
    });
});

selections.forEach((select) => {
    select.addEventListener("blur", (select) => {
        console.log("Dios no te amaaaaaa")
        validar(select.target);
    });
});