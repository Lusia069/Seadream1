
/* Autores: Ismael Arroyo Arroyo, Lucía Almudena López Villar, Francisco Jesús Ortega Alcántara
   Equipo: Equipo Alfa
   Título del proyecto: Seadream
   GitHub: https://github.com/Lusia069/SSAATT-2526-FE-Equipoalfa.git
   Asignatura: Servicios y aplicaciones telemáticas
   Titulación: Grado en Ingeniería de Tecnologías de Telecomunicación
   Curso: 2025-2026
*/

function mostrarSeccion(nombre) {

  actualizarMenuActivo(nombre);

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

let autenticado = false;

function inicio(event) {
  event.preventDefault();
  let nombre = document.getElementById("nombre_inicio").value;
  let contraseña = document.getElementById("contraseña_inicio").value;
  let inicio2 = {
    nombre: nombre,
    contraseña: contraseña
  };

  if (nombre === "admin" && contraseña === "1234") {
    autenticado = true;
    alert("Autenticación satisfactoria");
    mostrarSeccion('acercade');
    gestionarMenuAdmin(autenticado);
  } else if (nombre === "usuario" && contraseña === "1234") {
    autenticado = true;
    alert("Autenticación satisfactoria");
    mostrarSeccion('acercade');
    gestionarMenuUsuario(autenticado);
  } else {
    mostrarError("Usuario o clave incorrectos");
  }

}

function registro(event) {
  event.preventDefault();
  const formulario = event.target;
  const datos = new FormData(formulario);
  const pass = datos.get("password");
  const passCheck = datos.get("password-check");

  if (pass != passCheck) {
    mostrarError("Las contraseñas no son iguales");
    return;
  } else {
    const registro = Object.fromEntries(datos.entries());
    alert("Registro exitoso");
    mostrarSeccion('inicio');

  };
}


let actividades = [];

function guardarActividad(event) {
  event.preventDefault()
  const formulario = event.target;
  const datos = new FormData(formulario);
  const actividad = Object.fromEntries(datos.entries());

  actividades.push(actividad);

  alert("¡Actividad creada con éxito!");

  formulario.reset();
  actualizarLista();

}

function modificarActividad(event) {
  event.preventDefault()
  const formulario = event.target;
  const datos = new FormData(formulario);
  const actividad_modificada = Object.fromEntries(datos.entries());

  actividades.push(actividad_modificada);
  alert("¡Actividad modificada con éxito!");

  formulario.reset();
  mostrarSeccion('listado');
  actualizarLista();

}

function gestionarMenuAdmin(autenticado) {
  const itemsRestringidos = ["menuCrear", "menuListado"];
  const itemsNoRestringidos = ["menuInicio", "menuRegistro"];

  itemsRestringidos.forEach(id => {
    const elemento = document.getElementById(id);
    if (autenticado) {
      elemento.classList.remove("oculto");
      elemento.classList.add("visible");
    }else{
      elemento.classList.add("oculto");
      elemento.classList.remove("visible");
    }
  });

  itemsNoRestringidos.forEach(id => {
    const elemento = document.getElementById(id);
    if (autenticado) {
      elemento.classList.add("oculto");
      elemento.classList.remove("visible");
    }else{
      elemento.classList.remove("oculto");
      elemento.classList.add("visible");
    }
  });

}

function gestionarMenuUsuario(autenticado) {

  const itemsNoRestringidos = ["menuInicio", "menuRegistro"];
  const elemento = document.getElementById('menuListado');
  const botononesRestringidos = ["botonBorrar", "botonModificar"];

  if (autenticado) {
    elemento.classList.remove("oculto");
    elemento.classList.add("visible");
  }else{
    elemento.classList.add("oculto");
    elemento.classList.remove("visible");
  }

  itemsNoRestringidos.forEach(id => {
    const elemento = document.getElementById(id);
    if (autenticado) {
      elemento.classList.add("oculto");
      elemento.classList.remove("visible");
    }else{
      elemento.classList.remove("oculto");
      elemento.classList.add("visible");
    }
  });

  botononesRestringidos.forEach(id => {
    const elemento = document.getElementById(id);
    if (autenticado) {
      elemento.classList.add("oculto");
      elemento.classList.remove("visible");
    }else{
      elemento.classList.remove("oculto");
      elemento.classList.add("visible");
    }
  });

}

function actualizarMenuActivo(seccion) {
  const enlaces = document.querySelectorAll('nav ul li a');

  enlaces.forEach(enlace => {
    enlace.classList.remove('menu-activo');

    if (enlace.getAttribute('onclick').includes(seccion)) {
      enlace.classList.add('menu-activo');
    }
  });
}

function mostrarError(mensaje) {
  const error = document.getElementById("mensajeError");
  error.textContent = mensaje;
  error.classList.remove("oculto");
  error.classList.add("visible");

  setTimeout(() => {
    error.classList.add("oculto");
    error.classList.remove("visible");
  }, 5000);
}