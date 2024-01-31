import { Dispatch } from "redux";
import { getInitPostListAction, setCurrentPostListAction } from "../../../core/store";
import { getProductsFromStorage } from "../firestore/getPostsListFromFirestore";
import { getPostImagesFromStorage } from "../storage/getPostImagesFromStorage";
import { IPostItem } from "../../../core/store/types";

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
        const compareDates = (a: IPostItem | any, b: IPostItem | any): number => {
            const dateA = a.publicationDate.split('.').reverse().join('');
            const dateB = b.publicationDate.split('.').reverse().join('');

            return dateA.localeCompare(dateB);
        };
        const sortedListByPublicationDate = resultList.sort(compareDates);
        dispatch(getInitPostListAction(sortedListByPublicationDate));
        dispatch(setCurrentPostListAction(sortedListByPublicationDate));
    }
}