// Paso 1: Creamos el array para almacenar los nombres de los amigos
let amigos = [];

// Agregar amigos a la lista
function agregarAmigo() {
  let inputNombre = document.getElementById("amigo");
  let nombre = inputNombre.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  inputNombre.value = "";
  mostrarListaAmigos();
}

// Mostrar la lista de amigos en pantalla
function mostrarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Sortear un amigo al azar
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Debe agregar al menos un amigo antes de sortear.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong> 🎊</li>`;

  // Mostrar el botón de reinicio después de sortear
  mostrarBotonReiniciar();
}

// Mostrar el botón de reinicio (solo uno)
function mostrarBotonReiniciar() {
  let contenedorBotones = document.getElementById("botones");
  
  // Si no existe un botón de reinicio, lo creamos
  if (!document.getElementById("botonReiniciar")) {
    let botonReiniciar = document.createElement("button");
    botonReiniciar.textContent = "🔄 Reiniciar sorteo";
    botonReiniciar.id = "botonReiniciar";
    botonReiniciar.onclick = reiniciarSorteo;
    botonReiniciar.style.marginTop = "10px";
    botonReiniciar.style.backgroundColor = "#f44336";
    botonReiniciar.style.color = "#fff";
    botonReiniciar.style.padding = "10px";
    botonReiniciar.style.border = "none";
    botonReiniciar.style.borderRadius = "5px";
    botonReiniciar.style.cursor = "pointer";
    
    contenedorBotones.appendChild(botonReiniciar);
  }
}

// Reiniciar el sorteo y limpiar todo
function reiniciarSorteo() {
  amigos = []; // Vaciamos el array
  document.getElementById("listaAmigos").innerHTML = ""; // Limpiamos la lista de nombres
  document.getElementById("resultado").innerHTML = ""; // Borramos el resultado
  
  // Eliminar el botón de reinicio
  let botonReiniciar = document.getElementById("botonReiniciar");
  if (botonReiniciar) {
    botonReiniciar.remove();
  }
}
