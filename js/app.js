const btn_abrir = document.querySelector(".btn_abrir");
const btn_cerrar = document.querySelector(".btn_cerrar");
const btn_adoptar = document.querySelector(".btn_adoptar");
const btn_adoptame = document.querySelector(".btn_adoptame");
const btn_regresar = document.querySelector(".btn_regresar");

const mascota_information = document.querySelector(".mascota_information");

btn_abrir.addEventListener("click", () => {
  mascota_information.classList.add("visibility");
});
btn_cerrar.addEventListener("click", () => {
  mascota_information.classList.remove("visibility");
});
btn_adoptar.onclick = function () {
  location.replace("./perfil.html");
};
btn_adoptame.onclick = function () {
  location.replace("./formulario.html");
};
btn_regresar.onclick = function () {
  location.replace("./index.html");
};
