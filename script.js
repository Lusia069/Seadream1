function mostrarSeccion(nombre) {

  document.getElementById("divInicio").className = "oculto";
  document.getElementById("divRegistro").className = "oculto";
  document.getElementById("divCrearActividad").className = "oculto";
  document.getElementById("divListado").className = "oculto";
  document.getElementById("divModificarActividad").className = "oculto";
  document.getElementById("divAcercaDe").className = "oculto";

  if (nombre == "inicio") {
    document.getElementById("divInicio").className = "visible";
  }

  if (nombre == "registro") {
    document.getElementById("divRegistro").className = "visible";
  }

  if (nombre == "crear") {
    document.getElementById("divCrearActividad").className = "visible";
  }

  if (nombre == "listado") {
    document.getElementById("divListado").className = "visible";
  }

  if (nombre == "modificar") {
    document.getElementById("divModificarActividad").className = "visible";
  }

  if (nombre == "acercade") {
    document.getElementById("divAcercaDe").className = "visible";
  }
}

function inicio() {
  let nombre = document.getElementById("nombre_inicio").value;
  let contraseña = document.getElementById("contraseña_inicio").value;
  let inicio2 = {
    nombre: nombre,
    contraseña: contraseña
  };
}

function registro() {
  let nombre = document.getElementById("Nombre_Registro").value;
  let correo = document.getElementById("Correo").value;
  let nombre2 = document.getElementById("Nombre_usuario").value;
  let apellidos = document.getElementById("Apellidos_usuario").value;
  let contraseña = document.getElementById("Contraseña_usuario").value;
  let contraseña2 = document.getElementById("Contraseña_verificada").value;
  let provincia = document.getElementById("Provincia_registro").value;
  if (contraseña != contraseña2) {
    alert("Las contraseñas no son iguales");
  }
  else {
    let registro2 = {
      nombre: nombre,
      correo: correo,
      nombre2: nombre2,
      apellidos: apellidos,
      contraseña: contraseña,
      contraseña2: contraseña2,
      provincia: provincia

    };
  }
}


let actividades = [];

function guardarActividad() {
  let nombre = document.getElementById("Nombre_actividad").value;
  let provincia = document.getElementById("Provincia_crear").value;
  let direccion = document.getElementById("Direccion_crear").value;
  let fecha = document.getElementById("Fecha_crear").value;
  let horario = document.getElementById("Horario_crear").value;

  let actividad = {
    nombre: nombre,
    provincia: provincia,
    direccion: direccion,
    fecha: fecha,
    horario: horario
  };
  actividades.push(actividad);

}

function modificarActividad() {
  let nombre = document.getElementById("Nombre_actividadmodificar").value;
  let provincia = document.getElementById("Provinciamodificar").value;
  let direccion = document.getElementById("Direccionmodificar").value;
  let fecha = document.getElementById("Fechamodificar").value;
  let horario = document.getElementById("Horariomodificar").value;

  let modificada = {
    nombre: nombre,
    provincia: provincia,
    direccion: direccion,
    fecha: fecha,
    horario: horario
  };


}