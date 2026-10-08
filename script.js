// Listas de imágenes
const listaCabezas = [
  "../base-bestiario/assets/img/cabeza1.jpg",
  "../base-bestiario/assets/img/cabeza2.jpg",
  "../base-bestiario/assets/img/cabeza3.png",
];
const listaTroncos = [
 "../base-bestiario/assets/img/tronco1.jpg",
  "../base-bestiario/assets/img/tronco2.jpg",
  "../base-bestiario/assets/img/tronco3.jpg",
];
const listaPatas = [
  "../base-bestiario/assets/img/patas1.jpg",
  "../base-bestiario/assets/img/patas2.jpg",
  "../base-bestiario/assets/img/patas3.png",
];
const listaZapatos = [
  "../base-bestiario/assets/img/zapatos1.png"
  "../base-bestiario/assets/img/zapatos2.webp"
  "../base-bestiario/assets/img/zapatos3.webp"
]

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const cabeza = document.getElementById("cabeza");
const tronco = document.getElementById("tronco");
const patas = document.getElementById("patas");
const zapatos = document.getElementById("zapatos");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let troncoAleatorio = 0;
let patasAleatorio = 0;
let zapatosAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  cabezaAleatorio = numeroAleatorio(0, listaCabezas.length);
  troncoAleatorio = numeroAleatorio(0, listaTroncos.length);
  patasAleatorio = numeroAleatorio(0, listaPatas.length);
  zapatosAleatorio = numeroAleatorio(0, listaZapatos.length);

  // Asignamos la nueva fuente (source) a cada imagen
  cabeza.src = `${listaCabezas[cabezaAleatorio]}`; //ruta + listaCabezas[cabezaAleatorio];
  tronco.src = `${listaTroncos[troncoAleatorio]}`;
  patas.src = `${listaPatas[patasAleatorio]}`;
  zapatos.src = `${listaPatas[zapatosAleatorio]}`;

  console.log(cabezaAleatorio, troncoAleatorio, patasAleatorio, zapatosAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();
