
const listaCamisetas = [
  "./assets/img/camiseta1.jpeg",
  "./assets/img/camiseta2.jpeg",
  "./assets/img/camiseta3.jpeg",
  "./assets/img/camiseta4.jpeg",
  "./assets/img/camiseta5.jpeg",
  "./assets/img/camiseta6.jpeg"
  
];

const listaPantalones = [
  "./assets/img/pantalon1.jpeg",
  "./assets/img/pantalon2.jpeg",
  "./assets/img/pantalon3.jpeg",
  "./assets/img/pantalon4.jpeg",
  "./assets/img/pantalon5.jpeg",
  "./assets/img/pantalon6.jpeg"
];

const listaZapatos = [
  "./assets/img/zapato1.jpeg",
  "./assets/img/zapato2.jpeg",
  "./assets/img/zapato3.jpeg",
  "./assets/img/zapato4.jpeg",
  "./assets/img/zapato5.jpeg",
  "./assets/img/zapato6.jpeg",
];

const listaPeliculas = [
  "./assets/img/pelicula1.jpeg",
  "./assets/img/pelicula2.jpeg",
  "./assets/img/pelicula3.jpeg",
  "./assets/img/pelicula4.jpg",
  "./assets/img/pelicula5.jpeg",
  "./assets/img/pelicula6.jpg"
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
  let camisetaAleatorio;
  let pantalonAleatorio;
  let zapatosAleatorio;
  let peliculaAleatorio;

  if (Math.random() < 0.3) {
    camisetaAleatorio = 1;
    pantalonAleatorio = 0;
    zapatosAleatorio = 4;
    peliculaAleatorio = 3;
  } else {
    camisetaAleatorio = numeroAleatorio(listaCamisetas.length);
    pantalonAleatorio = numeroAleatorio(listaPantalones.length);
    zapatosAleatorio = numeroAleatorio(listaZapatos.length);
    peliculaAleatorio = numeroAleatorio(listaPeliculas.length);
  }

  camiseta.src = listaCamisetas[camisetaAleatorio];
  pantalon.src = listaPantalones[pantalonAleatorio];
  zapatos.src = listaZapatos[zapatosAleatorio];
  pelicula.src = listaPeliculas[peliculaAleatorio];

  if (
    camisetaAleatorio === 1 &&
    pantalonAleatorio === 0 &&
    zapatosAleatorio === 4 &&
    peliculaAleatorio === 3
  ) {
    window.location.href = "./bjork.html";
  }
}

boton.addEventListener("click", generarBestia);
generarBestia();
