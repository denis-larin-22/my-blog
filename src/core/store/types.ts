// Post item types
export interface IPostItemCommentValues {
    name: string,
    comment: string
}

export interface IPostItemReactionsObj {
    comments: Array<IPostItemCommentValues>,
    views: number
}

export interface IPostItemLangObj {
    header: string,
    text: string,
}

export type ImagesArray = [string, string, string];

export interface IPostItem {
    id: string,
    images: ImagesArray,
    langs: {
        EN: IPostItemLangObj,
        UA: IPostItemLangObj,
        RU: IPostItemLangObj,
    },
    reactions: IPostItemReactionsObj,
    publicationDate: string,
    categories: string[]
}

// App state (reducer init object)
export interface IAppState {
    initList: Array<IPostItem>,
    currentList: Array<IPostItem>,
    selectedPost: IPostItem | null
}
// Reducer action object
export interface IAppAction {
    type: string,
    payload: any
}