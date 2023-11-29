document
  .getElementById("cambiarColorBtn")
  .addEventListener("click", function () {
    document.body.classList.toggle("color-verde");
    document.body.classList.toggle("dark-mode");
  });

document.getElementById("miLista").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Elemento clicado:", event.target.textContent);
  }
});

document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const datoEntradaValue = document.getElementById("datoEntrada").value;

    if (!datoEntradaValue.trim()) {
      alert("Por favor, ingrese un dato antes de enviar el formulario.");
    } else {
      console.log({ datoIngresado: datoEntradaValue });
      alert("Formulario correctamente diligenciado.");
    }
  });
