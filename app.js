// Paso 1: Creamos el array para almacenar los nombres de los amigos
let amigos =[]; 

function agregarAmigo() {
  // Capturamos el campo de entrada
  let inputNombre = document.getElementById("amigo");
  let nombre = inputNombre.value.trim(); // Eliminamos espacios adiccionales

  //valiamos que el campo no este vacio
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return; // Detenemos la funcion si el nombre esta vacio
  }


// Agregamos el nombre al array de amigos
amigos.push(nombre);

// Limpiamos el campo de entrada 
inputNombre.value = "";

//Actualizamos la lista en la pagina
mostrarListaAmigos();

}

// Funcion para mostrar la lista de amigos en la pagina
function mostrarListaAmigos() {
  // Obtenemos el elemento de la lista en el HTML
  let lista = document.getElementById("listaAmigos");

  // Limpiamos la lista existente para evitar duplicados
  lista.innerHTML = "";

  // Recorremos el array amigos y creamos un <li> para cada nombre
  for (let i = 0; i < amigos.length; i++){
    let li = document.createElement("li"); //creamos un elemento <li>
    li.textContent = amigos[i]; //asignamos el nombre del amigo
    lista.appendChild(li); //Agregamos el <li> adentro de la lista
  }


}

// Funcion para sortear un amigo al azar
function sortearAmigo() {
  console.log("La funcion sortearAmigo() se ejecuto"); // depuracion de codigo
  // validamos que haya al menos un amigo en la lista
  if (amigos.length === 0) {
    alert("Debe agregar al menos un amigo antes de sortear.");
    return; // Detenemos la funcion si no hay nombres
  }

  // Generamos un indice aleatorio dentro del array amigos 
  let indiceAleatorio = Math.floor(Math.random()* amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  console.log("indice aleatorio:", indiceAleatorio); // Depuracion
  console.log("Amigo sorteado:", amigoSorteado); // depuracion

  // Mostramos el resultado en la pagina
  let resultado = document.getElementById("resultado");
  if (!resultado) {
    alert("Error: No se encontro el elemento donde mostrar el resultado.");
    return;
  }
  resultado.innerHTML = `<li>🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong> 🎊</li>`;
}