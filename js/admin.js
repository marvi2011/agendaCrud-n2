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

//vamos a verificar si hay datos en el localstorage, si hay los traigo y sino que sea un array vacio
const listaContactos =
  JSON.parse(localStorage.getItem("listaContactosKey")) || []; //esto es la creacion del array, luego tengo que sumar el contacto al array con push

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
  limpiarFormulario();
  //guardar los datos en localStorage
  guardarEnLocalstorage();
  //ahora debo dibujar la fila al final de la tabla
  dibujarFila(nuevoContacto)
};

const limpiarFormulario = () => {
  formularioContacto.reset();
};

const guardarEnLocalstorage = () =>
  localStorage.setItem("listaContactosKey", JSON.stringify(listaContactos)); //si tengo propiedades privadas tengo que hacer algo en donde tengo los get y set por que puede acceder a las propiedades privadas

const cargaInicial = () => {
  //preguntar si hay datoy en el array
  if (listaContactos.length !== 0) {
    //dibujar una tabla en la fila
    listaContactos.map((contacto) => dibujarFila(contacto));
  }
};

const dibujarFila = (contacto) => {
  const tabla = document.querySelector("tbody");
  tabla.innerHTML += `<tr>
<td>${contacto.id}</td>
<td>${contacto.apellido}</td>
<td>${contacto.nombre}</td>
<td>${contacto.mail}</td>
<td>
  <button class="btn btn-success">Ver</button>
  <button class="btn btn-warning">Editar</button>
  <button class="btn btn-danger">Borrar</button>
</td>
</tr>`;
};
//3- aqui voy a agregar toda la logica del CRUD
btnNuevo.addEventListener("click", mostrarModal);
formularioContacto.addEventListener("submit", crearContacto);

cargaInicial();
