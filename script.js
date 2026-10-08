
const listaCamisetas = [
  "./assets/img/camiseta1.jpeg",
  "./assets/img/camiseta2.jpeg",
  "./assets/img/camiseta3.jpeg"
];

const listaPantalones = [
  "./assets/img/pantalon1.jpeg",
  "./assets/img/pantalon2.jpeg",
  "./assets/img/pantalon3.jpeg"
];

const listaZapatos = [
  "./assets/img/zapato1.jpeg",
  "./assets/img/zapato2.jpeg",
  "./assets/img/zapato3.jpeg"
];

const listaPeliculas = [
  "./assets/img/pelicula1.jpeg",
  "./assets/img/pelicula2.jpeg",
  "./assets/img/pelicula3.jpeg"
];

const camiseta = document.getElementById("camiseta");
const pantalon = document.getElementById("pantalon");
const zapatos = document.getElementById("zapato");
const pelicula = document.getElementById("pelicula");
const boton = document.getElementById("boton");

function numeroAleatorio(max) {
  return Math.floor(Math.random() * max);
}

function generarBestia() {
  const camisetaAleatorio = numeroAleatorio(listaCamisetas.length);
  const pantalonAleatorio = numeroAleatorio(listaPantalones.length);
  const zapatosAleatorio = numeroAleatorio(listaZapatos.length);
  const peliculaAleatorio = numeroAleatorio(listaPeliculas.length);

  camiseta.src = listaCamisetas[camisetaAleatorio];
  pantalon.src = listaPantalones[pantalonAleatorio];
  zapatos.src = listaZapatos[zapatosAleatorio];
  pelicula.src = listaPeliculas[peliculaAleatorio];
}

boton.addEventListener("click", generarBestia);

generarBestia();
