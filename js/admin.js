//aqui voy a agregar toda la logica del CRUD
import { Contacto } from "./classContactos.js"; //los pasos son: 1) type = module en html que voy a usar, 2) Export en donde está el archivo que quiero usar y 3) import arriba de todo el codigo en el archivo en donde lo voy a usar

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
