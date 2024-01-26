import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebase";

export const updateViewsPostInFirestore = async (idPost: string) => {
    const docRef = doc(db, "posts", idPost);
    const docSnap = (await getDoc(docRef));

    if (docSnap.exists()) {
        const docData = docSnap.data();
        const { reactions } = docData;

        const updatedCommentsData = {
            ...docData,
            reactions: {
                ...reactions,
                views: reactions.views + 1
            }
        }
        await updateDoc(docRef, updatedCommentsData);
    } else {
        console.log("No such document!");
        return;
    }
}