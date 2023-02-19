const postsList = document.getElementById("posts");
const postForm = document.getElementById("postForm");
import { enviarPost, loadPosts } from "./post.js";
import { uploadImage, uploadImageURL, deleteFotos } from "./storage.js";
import { deleteTask, onGetTasks, getTask, updatePost, auth } from "./firebase.js";

// firebase utiliza querySnapshot esto significa
// registro que existen esta el momento
let editStatus = false;
let id="";
window.addEventListener("DOMContentLoaded", async () => {
  //const posts = await loadPosts();
  onGetTasks((querySnapshot) =>{
  
  querySnapshot.forEach((post) => {
    const publication = post.data();
    console.log(post.data());
    postsList.innerHTML +=`
    <div class="gallery">
      <a target="_blank" href="${publication.imagen ? publication.imagen : ''}" alt="mi foto" style="width: 10rem">
      <img src="${publication.imagen ? publication.imagen : ''}" alt="mi foto" style="width: 100%" style="height: 70%" />
      </a>
      <div class="desc">${publication.content}</div>
    </div>
    `;
  });

      // eliminar registros imagenes 
      const btnsDelete = postsList.querySelectorAll(".btn-delete");
      btnsDelete.forEach((btn) => {
        //btn.addEventListener('click', (event) => {
        btn.addEventListener('click', ({target: {dataset}}) => {
          //console.log(event);
          alert("Eliminado....");
          deleteTask(dataset.id); //llamado al modulo del post 
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

