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

  document.getElementById("TituloModificar").style.display = "none";
  document.getElementById("div5").style.display = "none";


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

  if (nombre == "modificar"){
    document.getElementById("TituloModificar").style.display = "block";
    document.getElementById("div5").style.display = "flex";
  }
}
function registro(){
  let nombre = document.getElementById("Nombre_Registro").value;
  let correo = document.getElementById("Correo").value;
  let nombre2 = document.getElementById("Nombre_usuario").value;
  let apellidos = document.getElementById("Apellidos_usuario").value;
  let contraseña = document.getElementById("Contraseña_usuario").value;
  let contraseña2 = document.getElementById("Contraseña_verificada").value;
  let provincia = document.getElementById("Provincia").value;

  let registro2 = {
    nombre: nombre,
    correo: correo,
    nombre2: nombre2,
    apellidos: apellidos,
    contraseña: contraseña,
    contraseña2: contraseña2,
    provincia: provincia
  }
}


let actividades=[];

function guardarActividad(){
    let nombre = document.getElementById("Nombre_actividad").value;
    let provincia = document.getElementById("Provincia").value;
    let direccion = document.getElementById("Direccion").value;
    let fecha = document.getElementById("Fecha").value;
    let horario = document.getElementById("Horario").value;

    let actividad = {
        nombre: nombre,
        provincia: provincia,
        direccion: direccion,
        fecha: fecha,
        horario: horario
    };
actividades.push(actividad);
  
    }

function modificarActividad(){ 
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
       horario: horario,
      };
      
      
    }