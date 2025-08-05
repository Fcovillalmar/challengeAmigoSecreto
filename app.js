// Array para guardar los nombres ingresados
const nombresAmigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombreIngresado = input.value.trim();

  if (nombreIngresado === "") {
    alert("Por favor ingresa un nombre válido.");
    return;
  }

  nombresAmigos.push(nombreIngresado);

  const lista = document.getElementById("listaAmigos");
  const li = document.createElement("li");
  li.textContent = nombreIngresado;
  lista.appendChild(li);

  input.value = "";
  input.focus();
}

function sortearAmigo() {
  if (nombresAmigos.length === 0) {
    alert("Debes ingresar al menos un nombre.");
    return;
  }

  // Elegir un nombre al azar
  const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
  const nombreElegido = nombresAmigos[indiceAleatorio];

  // Mostrar el resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; 
  
  // Limpiar resultado anterior
  const li = document.createElement("li");
  li.textContent = `El amigo secreto es: ${nombreElegido}`;
  resultado.appendChild(li);
}
