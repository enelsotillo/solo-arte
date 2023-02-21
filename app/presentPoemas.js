const postsList = document.getElementById("Poemas");
const postForm = document.getElementById("postFormPoamas");
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

  });
  
});

