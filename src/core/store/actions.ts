import { createAction, createPayloadAction } from "../../_utils/_createAction";

export const getInitPostListAction = createPayloadAction('GET_INIT_POST_LIST');

export const setCurrentPostListAction = createPayloadAction('SET_CURRENT_POST_LIST');

export const filterPostsByCategoryAction = createPayloadAction('SORT_POSTS_BY_CATEGORY');
export const resetCurrentPostsListToInitAction = createAction('RESET_CURRENT_POSTS_LIST_TO_INIT');
