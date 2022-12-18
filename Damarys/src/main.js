
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import "./app/signUpForm.js";
import "./app/logout.js";
import "./app/signInForm.js";
onAuthStateChanged(auth, async (user) => {
    loginCheck(user);
   // if (user) {
   // loginCheck(user);
 // } else {
 // }
});

