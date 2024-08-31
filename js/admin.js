//aqui voy a agregar toda la logica del CRUD
import { Contacto } from "./classContactos.js"; //los pasos son: 1) type = module en html que voy a usar, 2) Export en donde está el archivo que quiero usar y 3) import arriba de todo el codigo en el archivo en donde lo voy a usar
import { validarCantidadCaracteres, validarMail } from "./helpers.js";

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
const tabla = document.querySelector("tbody");
//2- aqui van las funciones
const mostrarModal = () => {
  modalContacto.show();
};

const crearContacto = (e) => {
  e.preventDefault();
  console.log("desde la funcion crearContacto");

  //debo validad los datos del formulario´
  if (validarCantidadCaracteres(apellido, 3, 50) && validarCantidadCaracteres(nombre, 3, 50) && validarMail(mail)) {
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
    dibujarFila(nuevoContacto);
  } else {
    console.log("Hay errores en la carga del formulario");
  }
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
  tabla.innerHTML += `<tr>
<td>${contacto.id}</td>
<td>${contacto.apellido}</td>
<td>${contacto.nombre}</td>
<td>${contacto.mail}</td>
<td>
  <button class="btn btn-success" onclick="verDetalle('${contacto.id}')">Ver</button>
  <button class="btn btn-warning">Editar</button>
  <button class="btn btn-danger" onclick="borrarContacto('${contacto.id}')">Borrar</button>
</td>
</tr>`;
};
window.borrarContacto = (id) => {
  console.log(id);
  //este metodo se usa para que funcione el onclick del boton borrar.
  Swal.fire({
    title: "¿Estás seguro que quieres borrar este contacto?.",
    text: "No puedes revertir el proceso luego de borrar.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    //then es un tiempo de espera
    console.log(result); // es para ver que tiene result, que ya viene en el codigo
    if (result.isConfirmed) {
      //aqui agrego mi logica
      //1- buscar la posicion del elemento que quiero borrar con findIndex
      const posicionContactoBuscado = listaContactos.findIndex(
        (contacto) => contacto.id === id
      );
      console.log(posicionContactoBuscado);
      //2- borrar un contacto del array con splice
      listaContactos.splice(posicionContactoBuscado, 1);
      //3- actualizar el localstorage por que queda con menos posiciones
      guardarEnLocalstorage();
      //4- actualizar la tabla
      // console.log(tabla.children[posicionContactoBuscado])
      tabla.removeChild(tabla.children[posicionContactoBuscado]);

      Swal.fire({
        title: "Contacto eliminado",
        text: "El contacto fue eliminado correctamente",
        icon: "success",
      });
    }
  });
  console.log("desde borrarContacto");
};
window.verDetalle = (id) => {
  console.log(window);
  console.log(window.location);
  window.location.href = "/pages/detalleContacto.html?id=" + id;
};
//3- aqui voy a agregar toda la logica del CRUD
btnNuevo.addEventListener("click", mostrarModal);
formularioContacto.addEventListener("submit", crearContacto);

cargaInicial();
