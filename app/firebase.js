
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, collection,
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  doc,
  getDoc,
  updateDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCH27mEZWNGF7zoJgJTEZL3ANUXhKm2yZo",
  authDomain: "solo-arte-app-78091.firebaseapp.com",
  projectId: "solo-arte-app-78091",
  storageBucket: "solo-arte-app-78091.appspot.com",
  messagingSenderId: "987371367152",
  appId: "1:987371367152:web:873e689a43e8cc8efa3035"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// conexion a la base de datos
export const db = getFirestore(app);
//conexion a stora
export const storage = getStorage(app);
//autenticación para tener autorización
export const auth = getAuth(app);
//eliminar
export const deleteTask = (id) => deleteDoc(doc(db, "posts", id));
//editar
export const getTask = (id) => getDoc(doc(db, "posts", id));
//snapshot para actualizar en tiempo real los registros
export const onGetTasks = (callback) =>{
  onSnapshot(collection(db, "posts"), callback);
}
export const getTasks = () => getDocs(collection(db, 'posts')) ;
//actualizar
export const updatePost = (id, newPost) => {updateDoc(doc(db, 'posts', id), newPost)};


//consultar poemas
export const onGetTasksPoemas = (callback) =>{
  onSnapshot(collection(db, "postsPoemas"), callback);
}
<<<<<<< HEAD
//eliminar poema
export const deleteTaskPoema = (id) => deleteDoc(doc(db, "postsPoemas", id));
=======

>>>>>>> 9a384b5ef04ad3baf530b9ba2b08bfd9ab3decb8

//consultar videos
export const onGetTasksVideos = (callback) =>{
  onSnapshot(collection(db, "postsVideos"), callback);
}
export const deleteTaskVideos = (id) => deleteDoc(doc(db, "postsVideos", id));
//editar