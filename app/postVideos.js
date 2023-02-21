
//import { async } from "./firebase-util.js";
import { addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
import { db } from "./firebase.js";
//enviar registros a la base de datos firetore database
export const enviarVideos = async (post) =>  {                                 
  return await addDoc(collection(db, 'postsVideos'), post);
 }
 
 //Optener una consulta asincrona con la base de datos
 // en pagina del front o pagina de inicio
 export const loadVideos = async () => {
     const querySnapshot = await getDocs(collection(db, 'postsVideos'));
     const posts = querySnapshot.docs.map(doc => doc.data())
     return posts;
 
 }

