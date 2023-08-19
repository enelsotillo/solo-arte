
const postsList = document.getElementById("videos");
const postForm = document.getElementById("postForm");
import { enviarVideos, loadVideos } from "./postVideos.js";
import { uploadVideos, uploadVideosURL, deleteFotos } from "./storage.js";
<<<<<<< HEAD
import { deleteTaskVideos, onGetTasksVideos, getTask, updatePost, auth } from "./firebase.js";
=======
import { deleteTask, onGetTasksVideos, getTask, updatePost, auth, deleteTaskVideos } from "./firebase.js";
>>>>>>> 9a384b5ef04ad3baf530b9ba2b08bfd9ab3decb8

// firebase utiliza querySnapshot esto significa
// registro que existen esta el momento
let editStatus = false;
let id="";
window.addEventListener("DOMContentLoaded", async () => {
  //const posts = await loadPosts();
  onGetTasksVideos((querySnapshot) =>{
  
  querySnapshot.forEach((post) => {
    const publication = post.data();
    console.log(publication);
    postsList.innerHTML +=`
    <div class="card card-body mb-2 border-primary">
      <div class="grid-item">
          <video controls>
              <source src="${publication.imagen ? publication.imagen : "" } style = "type: video/mp4" style = "width:60" style= "height:30">
              <source src="${publication.imagen ? publication.imagen : "" } style = "type: video/ogg" style = "width:60" style= "height:30">
          </video>
            <h5>${publication.content}</h5>
            <div>
            <button class="btn-delete btn btn-primary" data-id="${post.id}" data-imagen="${publication.imagen}">Delete</button>
            <button class="btn-edit btn btn-primary" data-id="${post.id}" data-imagen="${publication.nombre}">Edit</button>
            </div>
          </div>
      </div>     
    `;
  });

      // eliminar registros imagenes 
      const btnsDelete = postsList.querySelectorAll(".btn-delete");
      btnsDelete.forEach((btn) => {
        //btn.addEventListener('click', (event) => {
        btn.addEventListener('click', ({target: {dataset}}) => {
          console.log(dataset);
          alert("Eliminado....");
          deleteTaskVideos(dataset.id); //llamado al modulo del post 
          //deleteFotos(dataset.imagen); //llamado al modulo starage
        });
      });
      //actualizar datos o Update
      const btnsEdit = postsList.querySelectorAll('.btn-edit');
       btnsEdit.forEach(btn => {
        btn.addEventListener('click', async (e) =>{
          console.log(e);
          const doc = await getTask(e.target.dataset.id);
          let nombreImagen="";
          const publicateDoc = doc.data();
           nombreImagen = publicateDoc.imagen;
           nombreImagen = "updateImg.jpg";
           //console.log(publicateDoc);
          //relleno el formulario con la consulta a la base de datos
            postForm['form-content'].value = publicateDoc.content;
            postForm['form-imagen'].value = publicateDoc.imagen;
            editStatus = true;
        })
       })
  });
  
});

// evento prevent para evitar el reinicio de la pagina optener la
// informacion event submit por defecto o predeterminado
postForm.addEventListener("submit", async (e) => {
  //console.log(nombreFotos);
  e.preventDefault();
   const inputFile = document.getElementById('form-videos')
   let post = {
     content: postForm["form-content"].value,
     
   }
  if(inputFile.files[0]){
     const result = await uploadVideos(inputFile.files[0]);
     const url = await uploadVideosURL(result.ref);
     const nombre = result.ref ;
     //console.log(nombrer.name);
     //console.log(url);
     post.imagen = url;
     post.nombre = nombre.name;
  }
    if(!editStatus){
      enviarVideos(post);
      //console.log(post);
      alert("Publicación fue enviada con exito");
    }else{
      //updatePost(post.value, result.value)
      editStatus = false;
     // console.log("Actualizando Publicación");
    }
    postForm.reset();
}); 
