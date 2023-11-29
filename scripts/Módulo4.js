///practica 1

const datoEntrada = document.getElementById("datoEntrada");
const guardarLocalBtn = document.getElementById("guardarLocal");
const guardarSesionBtn = document.getElementById("guardarSesion");
const datosLocalStorage = document.getElementById("datosLocalStorage");
const datosSessionStorage = document.getElementById("datosSessionStorage");

// Agregar evento de clic para guardar en localStorage
guardarLocalBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const dato = datoEntrada.value;
  localStorage.setItem("datoLocalStorage", dato);
  mostrarDatosAlmacenados();
});

// Agregar evento de clic para guardar en sessionStorage
guardarSesionBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const dato = datoEntrada.value;
  sessionStorage.setItem("datoSessionStorage", dato);
  mostrarDatosAlmacenados();
});

// Función para mostrar datos almacenados
function mostrarDatosAlmacenados() {
  const datoLocal = localStorage.getItem("datoLocalStorage");
  const datoSesion = sessionStorage.getItem("datoSessionStorage");

  datosLocalStorage.textContent = datoLocal
    ? datoLocal
    : "No hay datos almacenados en localStorage.";
  datosSessionStorage.textContent = datoSesion
    ? datoSesion
    : "No hay datos almacenados en sessionStorage.";
}

// Mostrar datos almacenados al cargar la página
mostrarDatosAlmacenados();

///----------------------------------------------------

///practica 2
const nombreForm = document.getElementById("nombreForm");
const nombreInput = document.getElementById("nombreInput");
const tablaNombres = document
  .getElementById("tablaNombres")
  .getElementsByTagName("tbody")[0];

nombreForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const nuevoNombre = nombreInput.value.trim();

  if (nuevoNombre !== "") {
    await agregarNombreAJSONServer(nuevoNombre);
    actualizarTabla();
    nombreInput.value = "";
  }
});

async function agregarNombreAJSONServer(nombre) {
  try {
    await axios.post("http://localhost:3000/nombres", { nombre });
  } catch (error) {
    console.error("Error al agregar nombre:", error);
  }
}

async function obtenerNombresDeJSONServer() {
  try {
    const response = await axios.get("http://localhost:3000/nombres");
    return response.data;
  } catch (error) {
    console.error("Error al obtener nombres:", error);
    return [];
  }
}

async function actualizarTabla() {
  const nombres = await obtenerNombresDeJSONServer();
  tablaNombres.innerHTML = "";

  nombres.forEach((nombre) => {
    const fila = tablaNombres.insertRow();
    const celda = fila.insertCell(0);
    celda.textContent = nombre.nombre;
  });
}

actualizarTabla();
