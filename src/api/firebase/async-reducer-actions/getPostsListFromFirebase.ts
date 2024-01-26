import { Dispatch } from "redux";
import { getInitPostListAction, setCurrentPostListAction } from "../../../core/store";
import { getProductsFromStorage } from "../firestore/getPostsListFromFirestore";
import { getPostImagesFromStorage } from "../storage/getPostImagesFromStorage";

type GetPostsListAction = {
    type: string;
    payload: any;
}

export const getPostsListFromFirebase = () => {
    return async (dispatch: Dispatch<GetPostsListAction>) => {
        const postsItemsList = await getProductsFromStorage();

        const listWithImages = postsItemsList.map(async (post) => {
            const urlImageList = await getPostImagesFromStorage(post.id);
            return {
                ...post,
                images: urlImageList
            }
        });

        const resultList = await Promise.all(listWithImages);
        dispatch(getInitPostListAction(resultList));
        dispatch(setCurrentPostListAction(resultList));
    }
}