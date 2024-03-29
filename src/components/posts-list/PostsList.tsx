import { Button, Spinner } from "@nextui-org/react";
import { PostItem } from "./PostItem";
import { connect } from "react-redux";
import { IAppState, IPostItem } from "../../core/store/types";
import { getPostsListFromFirebase } from "../../api/firebase/async-reducer-actions/getPostsListFromFirebase";
import { useEffect } from "react";
import { filterPostsByCategoryAction, resetCurrentPostsListToInitAction } from "../../core/store";
import { motion } from "framer-motion";
import { containerAnim, itemAnim } from "./animation";
import { useTranslation } from "react-i18next";

interface IProps {
    initPostsList: Array<IPostItem>,
    currentPostsList: Array<IPostItem>,
    getPostsList: () => void,
    filterPostsByCategory: (payload: string) => void,
    resetCurrentPostsListToInit: () => void,
}

const PostsListView = ({
    initPostsList,
    currentPostsList,
    getPostsList,
    filterPostsByCategory,
    resetCurrentPostsListToInit,
}: IProps) => {
    const { t } = useTranslation();

    useEffect(() => {
        getPostsList();
    }, []);

    if (currentPostsList.length === 0) {
        return (
            <section className="container min-h-screen flex items-center justify-center">
                <Spinner size="lg" />
            </section>
        )
    } else {
        return (
            <section id="posts" className="container mt-32 md:mt-60 lg:mt-20 flex flex-col items-center gap-5">
                <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="font-bold text-2xl self-start">{t("tLatestPosts")} <span className="inline-block text-center text-base font-normal text-white bg-gray-300 dark:bg-gray-600 rounded-full w-6 h-6">{currentPostsList.length}</span></motion.h4>
                <motion.ul
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    variants={containerAnim}
                    initial="hidden"
                    animate="visible"
                >
                    {currentPostsList.reverse().map((post) => (
                        <motion.li key={post.id} variants={itemAnim}>
                            <PostItem postItem={post} filterPostsByCategory={filterPostsByCategory} />
                        </motion.li>
                    ))}
                </motion.ul>
                <Button onClick={resetCurrentPostsListToInit} className="mb-5 bg-white dark:bg-dark border-1 border-[#696A754D] dark:border-dark-light font-semibold dark:text-[#696A75]">{t("tViewAll")}</Button>
            </section>
        )
    }
}

const mapStateToProps = (state: IAppState) => ({
    initPostsList: state.initList,
    currentPostsList: state.currentList,
});

const mapDispatch = (dispatch: any) => ({
    getPostsList: () => dispatch(getPostsListFromFirebase()),
    filterPostsByCategory: (payload: string) => dispatch(filterPostsByCategoryAction(payload)),
    resetCurrentPostsListToInit: () => dispatch(resetCurrentPostsListToInitAction()),
})

export const PostsList = connect(mapStateToProps, mapDispatch)(PostsListView);