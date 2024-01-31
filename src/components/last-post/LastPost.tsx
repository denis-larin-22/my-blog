import { Card, useDisclosure } from "@nextui-org/react";
import Avatar from "../common/Avatar";
import { PostArticle } from "../posts-list/PostArticle";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { IAppState, IPostItem } from "../../core/store/types";
import { filterPostsByCategoryAction } from "../../core/store";
import { _createAnimation } from "../../_utils/_createAnimation";

interface IProps {
    lastPublishedPost: IPostItem | null,
    filterPostsByCategory: (payload: string) => void,
}

const LastPostView = ({ lastPublishedPost, filterPostsByCategory }: IProps) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    if (lastPublishedPost === null) {
        return null;
    } else {
        const { langs: { RU: { header } }, images: [image1], categories, publicationDate } = lastPublishedPost;
        // Animation
        const [imgInit, imgAnimate, imgTransition] = _createAnimation({ y: '20%', opacity: 0, duration: 1.2, delay: 0.5 });
        const [blockInit, blockAnimate, blockTransition] = _createAnimation({ opacity: 0, duration: 1, delay: 1.4 });
        const [listInit, listAnimate, listTransition] = _createAnimation({ y: '20px', opacity: 0, duration: 0.5, delay: 1.5 });
        const [h1Init, h1Animate, h1Transition] = _createAnimation({ y: '20px', opacity: 0, duration: 0.5, delay: 1.8 });
        const [authorInit, authorAnimate, authorTransition] = _createAnimation({ y: '20px', opacity: 0, duration: 0.5, delay: 2.1 });

        return (
            <main className="relative container mt-12">
                <motion.img
                    src={image1}
                    alt="Poster"
                    className="rounded-xl shadow-item group-hover:scale-105 max-h-[80vh] w-screen object-cover"
                    initial={imgInit}
                    animate={imgAnimate}
                    transition={imgTransition}
                />

                <motion.div
                    initial={blockInit}
                    animate={blockAnimate}
                    transition={blockTransition}
                >
                    <Card
                        isPressable
                        onClick={onOpen}
                        className="absolute -bottom-28 md:-bottom-52 lg:-bottom-10 left-0 md:left-20 z-0 max-w-[598px] p-5 md:p-10 mx-9 bg-white dark:bg-dark dark:border-1 dark:border-dark-light rounded-xl shadow-item flex flex-col gap-y-5 hover:scale-105 duration-250"
                    >
                        <motion.ul
                            initial={listInit}
                            animate={listAnimate}
                            transition={listTransition}
                        >
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    className="max-w-fit py-1 px-3 text-xs md:text-sm rounded-md bg-blue hover:bg-[#4B6BFB0D] text-white hover:text-blue duration-200 cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        filterPostsByCategory(category);
                                    }}
                                >
                                    {category}
                                </li>
                            ))}
                        </motion.ul>

                        <motion.h1
                            className="text-2xl md:text-4xl text-left font-semibold"
                            initial={h1Init}
                            animate={h1Animate}
                            transition={h1Transition}
                        >
                            {header}
                        </motion.h1>

                        <motion.div
                            className="flex flex-col md:flex-row items-center gap-2 mx-auto md:mx-0 text-gray-text text-xs md:text-base"
                            initial={authorInit}
                            animate={authorAnimate}
                            transition={authorTransition}
                        >
                            <Avatar size="small" />
                            <div className="flex flex-col md:flex-row gap-1">
                                <p className="font-semibold">Denis Larin</p>
                                <p className="">{publicationDate}</p>
                            </div>
                        </motion.div>
                    </Card>
                </motion.div>

                <PostArticle
                    postItem={lastPublishedPost}
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                />
            </main>
        )
    }

}

const mapStateToProps = (state: IAppState) => ({
    lastPublishedPost: state.initList.length === 0 ? null : state.initList[state.initList.length - 1],
})

const mapDispatchToProps = (dispatch: any) => ({
    filterPostsByCategory: (payload: string) => dispatch(filterPostsByCategoryAction(payload)),
})

export const LastPost = connect(mapStateToProps, mapDispatchToProps)(LastPostView);