console.log("Bienvenido")
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import {auth} from './firebase.js'
import { showMessage } from './showMessage.js'

const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;
    //console.log(email, +" " + password);
    try {
        const userRegister = await signInWithEmailAndPassword(auth, email, password);
        console.log(userRegister);
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide();
        showMessage('Welcome: ' + userRegister.user.email);
    } catch (error) {
        if(error.code === "auth/wrong-password"){
            showMessage("Contraseña no existe", "error")

        }else if(error.code === "auth/user-not-found"){
            showMessage("No existe el Usuario ", "error") 
            
        }else{
            showMessage(error.message, "error")
        }
    }
});