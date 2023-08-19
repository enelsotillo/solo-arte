const postsList = document.getElementById("videos");
const postForm = document.getElementById("postForm");
import { enviarVideos, loadVideos } from "./postVideos.js";
import { uploadVideos, uploadVideosURL, deleteFotos } from "./storage.js";
import { deleteTask, onGetTasksVideos, getTask, updatePost, auth, deleteTaskVideos } from "./firebase.js";

// firebase utiliza querySnapshot esto significa
// registro que existen esta el momento
let editStatus = false;
let id = "";
window.addEventListener("DOMContentLoaded", async () => {
  //const posts = await loadPosts();
  onGetTasksVideos((querySnapshot) => {

    querySnapshot.forEach((post) => {
      const publication = post.data();
      console.log(publication);
      postsList.innerHTML += `
          <div class="videos2">
              <video controls>
                  <source src="${publication.imagen ? publication.imagen : ""} style = "type: video/mp4" style = "width:100%" style= "height:200%">
                  <source src="${publication.imagen ? publication.imagen : ""} style = "type: video/ogg" style = "width:100%" style= "height:200%">
              </video>
              <div class="titulo-video">
              <h5 >${publication.content}</h5>
              </div>
              <br>
          </div>    
    `;
    });
  });
});