import { signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js";


const logout = document.querySelector("#logOut"); // Cerrar sesion con un click
logout.addEventListener("click", async() =>{
   await signOut(auth);
   console.log("user singned out")
})
