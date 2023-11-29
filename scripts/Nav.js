document.addEventListener("DOMContentLoaded", function () {
  const btnHome = document.getElementById("nav_home");
  const btnOurs = document.getElementById("nav_ours");
  const btnContact = document.getElementById("nav_contact");
  const contMain = document.getElementById("cont_Main");

  btnHome.addEventListener("click", () => {
    contMain.innerHTML = "<h1>Hola, soy la sección de Inicio</h1>";
  });

  btnOurs.addEventListener("click", () => {
    contMain.innerHTML = "<h1>Hola, soy la sección Quiénes somos</h1>";
  });

  btnContact.addEventListener("click", () => {
    contMain.innerHTML = "<h1>Hola, soy la sección Contacto</h1>";
  });

  // Puedes modularizar aún más según tus necesidades.
});
