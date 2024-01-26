import { getInitPostListAction, setCurrentPostListAction, filterPostsByCategoryAction, resetCurrentPostsListToInitAction } from "./actions";
import { IAppState, IAppAction } from "./types";

const initState: IAppState = {
    initList: [],
    currentList: [],
    selectedPost: null
};

export const reducer = (state: IAppState = initState, action: IAppAction) => {
    switch (action.type) {

        case getInitPostListAction.TYPE:
            return {
                ...state,
                initList: action.payload
            }

        case setCurrentPostListAction.TYPE:
            return {
                ...state,
                currentList: action.payload,
            }

        case filterPostsByCategoryAction.TYPE:
            return {
                ...state,
                currentList: state.currentList.filter((post) => post.categories.includes(action.payload)),
            }

        case resetCurrentPostsListToInitAction.TYPE:
            return {
                ...state,
                currentList: state.initList
            }

        default:
            return state;
    }
}