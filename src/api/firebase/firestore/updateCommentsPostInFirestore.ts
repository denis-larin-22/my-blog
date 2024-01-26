import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebase";
import { IPostItemCommentValues } from "../../../core/store/types";

export const updateCommentsPostInFirestore = async (id: string, newCommentObj: IPostItemCommentValues) => {
    const docRef = doc(db, "posts", id);
    const docSnap = (await getDoc(docRef));

    if (docSnap.exists()) {
        const docData = docSnap.data();
        const { reactions } = docData;
        const newCommentsArray = [...reactions.comments, newCommentObj];
        const updatedCommentsData = {
            ...docData,
            reactions: {
                ...reactions,
                comments: newCommentsArray
            }
        }
        await updateDoc(docRef, updatedCommentsData);
        return newCommentsArray;
    } else {
        console.log("No such document!");
        return;
    }
}