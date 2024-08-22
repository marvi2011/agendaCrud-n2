//aqui voy a crear las clases
export class Contacto {
  //antes de export se coloca en el archivo html que voy a usar, en el script type=module, luego en el archivo que voy a usar el archivo que tiene export se coloca import arriba de todo el codigo
 //si uso export default se puede exportar una sola cosa... y en donde va import se sacan las llavecitas
  #id;
  #apellido;
  #nombre;
  #mail;
  #domicilio;
  #telefono;
  #git;
  #foto;
  constructor(apellido, nombre, mail, domicilio, telefono, git, foto) {
    this.#id = crypto.randomUUID(); //genera un identificador unico 
    this.#apellido = apellido;
    this.#nombre = nombre;
    this.#mail = mail;
    this.#domicilio = domicilio;
    this.#telefono = telefono;
    this.#git = git;
    this.#foto = foto;
  }
  //ahora van los getter y setter
  get id() {
    return this.#id;
  }
  set id(value) {
    this.#id = value;
  }
  get apellido() {
    return this.#apellido;
  }
  set apellido(value) {
    this.#apellido = value;
  }
  get mail() {
    return this.#mail;
  }
  set mail(value) {
    this.mail = value;
  }
  get telefono() {
    return this.#telefono;
  }
  set telefono(value) {
    this.#telefono = value;
  }
  get git() {
    return this.#git;
  }
  set git(value) {
    this.#git = value;
  }
  get domicilio() {
    return this.#domicilio;
  }
  set domicilio(value) {
    this.#domicilio = value;
  }
}
