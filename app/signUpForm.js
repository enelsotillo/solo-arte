import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {auth} from './firebase.js'
import { showMessage } from './showMessage.js'
const signUpFrom = document.querySelector("#signUp-form");
    signUpFrom.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const email = signUpFrom['signUpForm-email'].value
        const password = signUpFrom['signUpForm-pass'].value
        console.log(email, password);
        
        try{
            const createUser = await createUserWithEmailAndPassword(auth, email, password);
            console.log(createUser);
            //clase de formulario sign Up
           const signupModal = document.querySelector('#signupModal');
           const modal = bootstrap.Modal.getInstance(signupModal);
           modal.hide()
           showMessage("Bienvenido: " + createUser.user.email)

        } catch(error){
            //error.code arroga errores uniformes o llamados estandar 

            console.log(error.message);
            console.log(error.code);
            if(error.code ==='auth/email-already-in-use'){
                showMessage('correo en uso','error');
            }
            else if(error.code ==='auth/invalid-email'){
                showMessage("correo invalido", "error");
            }else if(error.code ==='auth/weak-password'){
                showMessage('la Contraseña debe ser mayor a 6 digitos', 'error');
            } else if(error.code){
                showMessage(error.message, 'error');
            }
        }
    });