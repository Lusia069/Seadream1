function mostrarSeccion(nombre) {

  document.getElementById("TituloInicio").style.display = "none";
  document.getElementById("div1").style.display = "none";

  document.getElementById("TituloRegistro").style.display = "none";
  document.getElementById("div2").style.display = "none";

  document.getElementById("TituloAcercade").style.display = "none";
  document.getElementById("div3").style.display = "none";

  document.getElementById("TituloCrearActividad").style.display = "none";
  document.getElementById("Crear").style.display = "none";

  document.getElementById("TituloListado").style.display = "none";
  document.getElementById("div4").style.display = "none";

  if (nombre == "inicio") {
    document.getElementById("TituloInicio").style.display = "block";
    document.getElementById("div1").style.display = "flex";
  }

  if (nombre == "registro") {
    document.getElementById("TituloRegistro").style.display = "block";
    document.getElementById("div2").style.display = "flex";
  }

  if (nombre == "acercade") {
    document.getElementById("TituloAcercade").style.display = "block";
    document.getElementById("div3").style.display = "flex";
  }

  if (nombre == "crear") {
    document.getElementById("TituloCrearActividad").style.display = "block";
    document.getElementById("Crear").style.display = "block";
  }

  if (nombre == "listado") {
    document.getElementById("TituloListado").style.display = "block";
    document.getElementById("div4").style.display = "flex";
  }
}










/*
let actividades = [];

function guardarActividad() {
  const nombre = document.getElementById("Nombre_actividad").value;
  const provincia = document.getElementById("Provincia").value;
  const direccion = document.getElementById("Dirección").value;
  const fecha = document.getElementById("Fecha").value;
  const horario = document.getElementById("Horario").value;

  const actividad = {
    nombre: nombre,
    provincia: provincia,
    direccion: direccion,
    fecha: fecha,
    horario: horario
  };

  actividades.push(actividad);

  console.log(actividades);

  mostrarActividades();
}

function mostrarActividades() {
  const lista = document.getElementById("listaActividades");
  lista.innerHTML = "";

  actividades.forEach((act, index) => {
    const li = document.createElement("li");
    li.textContent = `${act.nombre} - ${act.provincia} - ${act.fecha} - ${act.horario}`;
    lista.appendChild(li);
  });
}
*/