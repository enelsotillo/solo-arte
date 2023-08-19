import { signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js";

let timeoutID;

export function resetTimer() {
  clearTimeout(timeoutID);
  timeoutID = setTimeout(logout, 3000); // Cerrar sesión después de 1 minuto de inactividad
}

function logout() {
  // Aquí va el código para cerrar la sesión
  window.location.href = "index.html";
  alert("Sesion Cerrada por inactividad debe logiarse");
  window.location.onload();
}

// Monitorear eventos de actividad del usuario
window.addEventListener('mousemove', resetTimer);
window.addEventListener('mousedown', resetTimer);
window.addEventListener('keypress', resetTimer);
window.addEventListener('touchmove', resetTimer);
window.addEventListener('onload', resetTimer);
resetTimer();
