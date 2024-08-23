//aqui voy a agregar toda la logica del CRUD
import { Contacto } from "./classContactos.js"; //los pasos son: 1) type = module en html que voy a usar, 2) Export en donde está el archivo que quiero usar y 3) import arriba de todo el codigo en el archivo en donde lo voy a usar

//1- declaro las variables
/*console.log("desde admin.js");
const contacto = new Contacto(
  "Gramajo",
  "Maria",
  "maria@mail.com",
  "Salta 21",
  381254584,
  "maria.git",
  "foto"
);
Con esto yo creaba un contacto, ahora lo hacemos de otra forma
console.log(contacto);*/

const modalContacto = new bootstrap.Modal(
  document.getElementById("modalAdminContacto")
);
//modalContacto.show(); prueba para saber si funciona la ventana modal. Se han sacado del modal los atributo bs-data-toggle y target
//console.log(modalContacto); se agregó aqui el bootstrap.modal para que funcione la ventana modal
const btnNuevo = document.getElementById("btnNuevo");
const formularioContacto = document.getElementById("formContacto");

//traigo los input del formulario
const apellido = document.getElementById("apellido");
const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const domicilio = document.getElementById("domicilio");
const telefono = document.getElementById("telefono");
const git = document.getElementById("github");
const foto = document.getElementById("foto");

const listaContactos = []; //esto es la creacion del array, luego tengo que sumar el contacto al array con push

//2- aqui van las funciones
const mostrarModal = () => {
  modalContacto.show();
};

const crearContacto = (e) => {
  e.preventDefault();
  console.log("desde la funcion crearContacto");
  //debo validad los datos del formulario
  //crear el objeto
  const nuevoContacto = new Contacto(
    apellido.value,
    nombre.value,
    mail.value,
    domicilio.value,
    telefono.value,
    git.value,
    foto.value
  );
  console.log(nuevoContacto); //con esto veo el nuevo contacto
  //quiero guardar el objeto en mi lista de contactos o array con push... ya hemos creado el array
listaContactos.push(nuevoContacto);
console.log(listaContactos);

};


//guardar los datos en localStorage

//3- aqui voy a agregar toda la logica del CRUD
btnNuevo.addEventListener("click", mostrarModal);
formularioContacto.addEventListener("submit", crearContacto);
