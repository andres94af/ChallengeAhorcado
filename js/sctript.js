let palabras = [
  "alura",
  "programacion",
  "challenge",
  "ahorcado",
  "javascript",
];
let imagen = document.getElementById("imagen");
imagen.src = "imagenes/00.jpg";
var estadoImg = 2;
let espacios = document.querySelector(".espacio");
let errado = document.querySelector(".errado");
let btnNuevo = document.getElementById("btn-nuevo");
btnNuevo.addEventListener("click", nuevoJuego);
let btnDesistir = document.getElementById("btn-invisible");
btnDesistir.addEventListener("click", desistir);
let btnAgregar = document.getElementById("btn-agregar");
btnAgregar.addEventListener("click", agregarPalabra);
let palabraSeleccionada = "";

//funcion que crea los espacios en blanco de la palabra aleatoria
function nuevoJuego() {
  btnDesistir.setAttribute("id", "btn-desistir")
  btnNuevo.setAttribute("id", "btn-invisible")
  btnAgregar.setAttribute("id", "btn-invisible")
  palabraSeleccionada =
    palabras[
      Math.round(Math.random() * (palabras.length - 1))
    ].toLocaleUpperCase();
    var letrasSeparadas = palabraSeleccionada.split("");
  imagen.src = "imagenes/01.jpg";

  for (i = 0; i < letrasSeparadas.length; i++) {
    var adivinada = document.createElement("span");
    adivinada.setAttribute("class", "espacio-letra-oculta");
    adivinada.textContent = letrasSeparadas[i].toLocaleUpperCase();
    espacios.appendChild(adivinada);
  }
}

//funcion para rendirse y recargar el juego
function desistir() {
  if (palabraSeleccionada != "") {
    alert(
      "Usted se Rindio. La palabra era: " +
        palabraSeleccionada.toLocaleUpperCase()
    );
    location.reload();
  } else {
    location.reload();
  }
}

//evento y verificacion al tocar letras
addEventListener("keyup", verificarLetra);
var letrasPresioadas = []

function verificarLetra() {
  var letra = event.key.toLocaleUpperCase();
  if(letrasPresioadas.includes(letra)){
  }else{
    var validar = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M",];
    if (validar.includes(letra)) {
    if (palabraSeleccionada.includes(letra)) {
      var palabra = document.querySelectorAll(".espacio-letra-oculta");
      for (i = 0; i < palabra.length; i++) {
        if (palabra[i].textContent == letra)
          palabra[i].setAttribute("class", "espacio-letra");
      }
      if (palabra.length == 1) {
        imagen.src = "imagenes/09.jpg";
        setTimeout(() => {
          alert("Ganaste!!! Jugas de nuevo?");
          location.reload();
        }, 1500);
      }
    } else {
      var errada = document.createElement("span");
      errada.setAttribute("class", "espacio-errado");
      errada.textContent = letra;
      errado.appendChild(errada);
      imagen.src = "imagenes/0" + estadoImg + ".jpg";
      estadoImg++;
      if (estadoImg == 8) {
        imagen.src = "imagenes/0" + estadoImg + ".jpg";
        setTimeout(() => {
          alert(
            "Perdiste 😢. La palabra era: " +
              palabraSeleccionada +
              ". Volves a Jugar??"
          );
          location.reload();
        }, 1000);
      }
    }
  }
  }
  letrasPresioadas.push(letra)
}

//funcion de agregar palabra y jugar
function agregarPalabra(){
  var nuevaPalabra = prompt("Ingresa Nueva palabra")
  btnDesistir.setAttribute("id", "btn-desistir")
  btnNuevo.setAttribute("id", "btn-invisible")
  btnAgregar.setAttribute("id", "btn-invisible")
  palabraSeleccionada = nuevaPalabra.toLocaleUpperCase();
  var letrasSeparadas = palabraSeleccionada.split("");
  imagen.src = "imagenes/01.jpg";
  
  for (i = 0; i < letrasSeparadas.length; i++) {
    var adivinada = document.createElement("span");
    adivinada.setAttribute("class", "espacio-letra-oculta");
    adivinada.textContent = letrasSeparadas[i].toLocaleUpperCase();
    espacios.appendChild(adivinada);
  }
}
