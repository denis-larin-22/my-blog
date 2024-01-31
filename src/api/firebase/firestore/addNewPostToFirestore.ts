import { doc, setDoc } from "firebase/firestore";
import { IPostItemLangObj, IPostItemReactionsObj } from "../../../core/store/types"
import { db } from "../firebase";

export interface INewPostItem {
    langs: {
        EN: IPostItemLangObj,
        UA: IPostItemLangObj,
        RU: IPostItemLangObj,
    },
    reactions: IPostItemReactionsObj,
    publicationDate: string,
    categories: string[]
}

export const addNewPostToFirestore = async (id: string, newPost: INewPostItem) => {
    try {
        const result = await setDoc(doc(db, "posts", id), newPost);
        console.log("Post successfully added to Firestore", result);
    } catch (error: any) {
        console.error("Error adding post to Firestore:", error.message);
        throw error;
    }
}