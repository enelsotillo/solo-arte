const postsList = document.getElementById("publicacionDePoemas11");
const postForm = document.getElementById("postFormPoamas");
import { enviarPost, loadPosts } from "./post.js";
import { uploadImage, uploadImageURL, deleteFotos } from "./storage.js";
import { deleteTask, onGetTasksPoemas, getTask, updatePost, auth } from "./firebase.js";

// firebase utiliza querySnapshot esto significa
// registro que existen esta el momento
let editStatus = false;
let id="";
window.addEventListener("DOMContentLoaded", async () => {
  //const posts = await loadPosts();
  onGetTasksPoemas((querySnapshot) =>{
  
  querySnapshot.forEach((post) => {
    const publication = post.data();
    console.log(post.data());
    postsList.innerHTML +=`
    <div class="gallery">
      <a target="_blank" href="${publication.imagen ? publication.imagen : ''}" alt="mi foto" style="width: 10rem"> Descarga PDF
      <object type="application/pdf" data="${publication.imagen ? publication.imagen : ''}" style="width: 100%" style="height: 70%" /></object>
      </a>
      <div class="desc">${publication.content}</div>
      <br>
      <br>
      <br>
      <a target="_blank" href="${publication.imagen ? publication.imagen : ''}" alt="mi foto" style="width: 10rem"> Leer más</a>
    </div>
    `;
  });

  });
  
});

