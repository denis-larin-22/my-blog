import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../firebase";

//Returns array of images from folder in Firebase Storage
export const getPostImagesFromStorage = async (folderName: string) => {
    const storageRef = ref(storage, `/${folderName}`);
    const result = await listAll(storageRef);

    const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
    const images = await Promise.all(urlPromises);
    return images;
};