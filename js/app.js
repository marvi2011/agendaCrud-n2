//1- extraer el parametro de la url
console.log(window.location.search);
const parametroId = new URLSearchParams(window.location.search).get("id");
console.log(parametroId);

//2- buscar el id del parametro en localstorage
const listaContactos =
  JSON.parse(localStorage.getItem("listaContactosKey")) || [];

//3- dibujar el objeto encontrado en la card
const contactoBuscado = listaContactos.find(
  (contacto) => contacto.id === parametroId
);
console.log(contactoBuscado);

const seccionPrincipal = document.querySelector("#contenedorCard");
seccionPrincipal.innerHTML = `<div class="card mb-3">
<div class="row g-0">
  <div class="col-md-4">
    <img src=${contactoBuscado.foto} class="img-fluid rounded-start" alt=${contactoBuscado.apellido}>
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${contactoBuscado.apellido} ${contactoBuscado.nombre}</h5>
      <ul>
        <li>Mail: ${contactoBuscado.mail}</li>
        <li>Domicilio: ${contactoBuscado.domicilio}</li>
        <li>Teléfono: ${contactoBuscado.telefono}</li>
        <li>GitHub: ${contactoBuscado.git}</li>
      </ul>
    </div>
  </div>
</div>
</div>`;
