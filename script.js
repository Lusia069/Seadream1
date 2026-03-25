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