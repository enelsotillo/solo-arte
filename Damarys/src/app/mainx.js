//import { async } from "./firebase/util";
// capturo la informacion del formulario
const postsList = document.getElementById("posts");
const postForm = document.getElementById("postForm");
import { enviarPost, loadPosts } from "./post.js";
import { uploadImage, uploadImageURL, deleteFotos } from "./storage.js";
import { deleteTask, onGetTasks, auth } from "./firebase.js";

let editStatus = false;
let id="";
window.addEventListener("DOMContentLoaded", async () => {
  const posts = await loadPosts();
  posts.forEach(post => {
    console.log(post.id);
    postsList.innerHTML +=`
    <div class="card card-body mb-2 border-primary"> 
      <img src="${post.imagen ? post.imagen : ''}" alt="mi foto" style="width: 5rem"/>
      <h5>${post.content}</h5>
      <div>
      <button class="btn-delete btn btn-primary" data-id="${post.id}">Delete</button>
      <button class="btn-edit btn btn-primary" data-id="${""}">Edit</button>
      </div>
    </div>
    `;
  });
  
  // eliminar registros
  const btnsDelete = postsList.querySelectorAll(".btn-delete");
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log("Eliminado...");
      //alert("Eliminado....");
      //deleteTask(dataset.id);
      //deleteFotos(result);
    });
  });
  
});

// evento prevent para evitar el reinicio de la pagina optener la
// informacion event submit por defecto o predeterminado
postForm.addEventListener("submit", async (e) => {
  e.preventDefault();
   const inputFile = document.getElementById('form-imagen')
   let post = {
     content: postForm["form-content"].value,
   }
  if(inputFile.files[0]){
     const result = await uploadImage(inputFile.files[0]);
     const url = await uploadImageURL(result.ref);
     post.imagen = url;
  }
   enviarPost(post);
   postForm.reset();
   alert("Publicación fue enviada con exito");
   
   
});
