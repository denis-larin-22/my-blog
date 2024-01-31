import { storage } from "../firebase";
import {
    ref as storageRef,
    uploadBytes,
} from "firebase/storage";

export const uploadImagesToStorage = (imagesArray: (File | null)[], idPost: string) => {
    imagesArray.forEach((image, index) => {
        const imageRef = storageRef(storage, `${idPost}/image${index + 1}`);
        if (image === null) return;

        uploadBytes(imageRef, image);
    })
}