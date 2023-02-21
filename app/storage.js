import { storage } from "./firebase.js";
import {
  getDownloadURL,
  ref,
  uploadBytes, deleteObject
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
//import { async } from "../firebase/util";

export const uploadImage = async (file) => {
  const storageRef = ref(storage, "fots/" + file.name); // subir el archivo a la Base de Datos
  return await uploadBytes(storageRef, file); //subilo
};
// url de la imagen
export const uploadImageURL = async (fileRef) => {
  return await getDownloadURL(fileRef);
}
//liminar foto
export const deleteFotos = async () => {
  return await deleteObject(uploadImage);
}
//enviar a firebase los poemarios
export const uploadPoemas = async (file) => {
  const storageRef = ref(storage, "poemas/" + file.name); // subir el archivo a la Base de Datos
  return await uploadBytes(storageRef, file); //subilo
}
// url de la poemas
export const uploadPoemasURL = async (fileRef) => {
  return await getDownloadURL(fileRef);
}

//enviar a firebase los videos
export const uploadVideos = async (file) => {
  const storageRef = ref(storage, "videos/" + file.name); // subir el archivo a la Base de Datos
  return await uploadBytes(storageRef, file); //subilo
}
// url de la videos
export const uploadVideosURL = async (fileRef) => {
  return await getDownloadURL(fileRef);
}