//aqui voy a agregar toda la logica del CRUD
import { Contacto } from "./classContactos.js"; //los pasos son: 1) type = module en html que voy a usar, 2) Export en donde está el archivo que quiero usar y 3) import arriba de todo el codigo en el archivo en donde lo voy a usar

//1- declaro las variables
console.log("desde admin.js");
const contacto = new Contacto(
  "Gramajo",
  "Maria",
  "maria@mail.com",
  "Salta 21",
  381254584,
  "maria.git",
  "foto"
);
console.log(contacto);

const modalContacto = new bootstrap.Modal(
  document.getElementById("modalAdminContacto")
);
//modalContacto.show(); prueba para saber si funciona la ventana modal. Se han sacado del modal los atributo bs-data-toggle y target
//console.log(modalContacto); se agregó aqui el bootstrap.modal para que funcione la ventana modal
const btnNuevo = document.getElementById("btnNuevo");

//2- aqui van las funciones
const mostrarModal = () => {
  modalContacto.show();
};

//3- aqui voy a agregar toda la logica del CRUD
btnNuevo.addEventListener("click", mostrarModal);
