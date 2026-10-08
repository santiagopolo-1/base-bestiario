// Listas de imágenes
const listaCamisetas = [
 /assets/camiseta1.jpeg,
  /assets/img/camiseta2.jpeg,
  /assets/img/camiseta3.jpeg,
];
const listaPantalones = [
 /assets/img/pantalon1.jpeg,
  /assets/img/pantalon2.jpeg,
  /assets/img/pantalon3.jpeg,
];
const listaZapatos = [
  "./assets/img/zapato1.jpeg",
  "./assets/img/zapato2.jpeg",
  "./assets/img/zapato3.jpeg",
];
const listaPeliculas = [
  /assets/img/pelicula1.jpeg,
  /assets/img/pelicula2.jpeg,
  /assets/img/pelicula3.jpeg,
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const camiseta = document.getElementById("camiseta");
const pantalón = document.getElementById("pantalón");
const zapatos = document.getElementById("zapatos");
const película = document.getElementById("película");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let troncoAleatorio = 0;
let patasAleatorio = 0;
let zapatosAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * max);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  listaCamisetas = numeroAleatorio(0, listaCamisetas.length);
  listaPantalones = numeroAleatorio(0, listaPantalones.length);
  listaZapatos = numeroAleatorio(0, listaZapatos.length);
  listaPeliculas = numeroAleatorio(0, listaPeliculas.length);

  // Asignamos la nueva fuente (source) a cada imagen
  cabeza.src = `${listaCamisetas[camisetaAleatorio]}`; //ruta + listaCabezas[cabezaAleatorio];
  pantalón.src = `${listaPantalones[pantalónAleatorio]}`;
  zapatos.src = `${listaZapatos[zapatosAleatorio]}`;
  película.src = `${listaPelículas[películaAleatorio]}`;

  console.log(camisetaAleatorio, troncoAleatorio, patasAleatorio, zapatosAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();
