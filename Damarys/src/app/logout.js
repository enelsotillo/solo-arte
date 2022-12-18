import { signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js";

const logout = document.querySelector("#logOut");
logout.addEventListener("click", async() =>{
   await signOut(auth);
   console.log("user singned out")
})