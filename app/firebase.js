
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
  apiKey: "AIzaSyAbK54rNz06CzJmnlZ2dDBFPQLHMMgb3OY",
  authDomain: "app-solo-arte.firebaseapp.com",
  projectId: "app-solo-arte",
  storageBucket: "app-solo-arte.appspot.com",
  messagingSenderId: "291660379377",
  appId: "1:291660379377:web:303e7a217779956c3e2550"
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
//consultar videos
export const onGetTasksVideos = (callback) =>{
  onSnapshot(collection(db, "postsVideos"), callback);
}