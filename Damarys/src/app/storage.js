import { storage } from "./firebase.js";
import {
  getDownloadURL,
  ref,
  uploadBytes, deleteObject
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
//import { async } from "../firebase/util";

export const uploadImage = async (file) => {
  const storageRef = ref(storage, "fots/" + file.name); // subir el archivo al Backen
  return await uploadBytes(storageRef, file);
  console.log("objeto imagen"+uploadImage);
};

export const uploadImageURL = async (fileRef) => {
  return await getDownloadURL(fileRef);
}
//liminar foto
export const deleteFotos = async () => {
  return await deleteObject(uploadImage);
}
