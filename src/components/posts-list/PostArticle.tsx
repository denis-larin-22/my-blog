import { Modal, ModalContent, ModalHeader, ModalBody, Button, Tooltip } from "@nextui-org/react";
import Avatar from "../common/Avatar";
import { useState } from "react";
import PostComments from "./PostComments";
import { IPostItem, IPostItemLangObj } from "../../core/store/types";
import { updateViewsPostInFirestore } from "../../api/firebase/firestore/updateViewsPostInFirestore";
import { motion } from "framer-motion";
import { _createAnimation } from "../../_utils/_createAnimation";
import { ParseTextRender } from "./ParseTextRender";
import { t } from "i18next";

interface IProps {
    postItem: IPostItem,
    isOpen: boolean,
    onOpenChange: () => void,
}

export const PostArticle = ({ postItem, isOpen, onOpenChange }: IProps) => {
    const { images, langs, reactions, publicationDate } = postItem;
    // images pathes
    const [image1, image2, image3] = images;
    // languages translates
    const languages = Object.keys(langs) as Array<"EN" | "UA" | "RU">;
    const [selectedLang, setSelectedLang] = useState<"EN" | "UA" | "RU" | undefined>(languages.find((lang) => lang === 'RU'));
    const [currentTranslation, setCurrentTranslation] = useState<IPostItemLangObj>(langs[selectedLang || 'EN']);

    // reactions states
    const [commentsArray, setCommentsArray] = useState(reactions.comments);
    const [viewsCount, setViewsCount] = useState(reactions.views);

    const onOpenChangeFuncHandler = () => {
        // Increment views count in the state
        setViewsCount(viewsCount + 1);
        // Increment views count and updates views-value in the Firestore
        updateViewsPostInFirestore(postItem.id);
        // open modal
        onOpenChange();
    }

    // Animations
    const [h2Initial, h2Animate, h2Transition] = _createAnimation({ y: '20px', opacity: 0, duration: 0.5, delay: 0.2 });
    const [authorInitial, authorAnimate, authorTransition] = _createAnimation({ y: '20px', opacity: 0, duration: 0.5, delay: 0.4 });
    const [imageInitial, imageAnimate, imageTransition] = _createAnimation({ y: '20px', opacity: 0, duration: 0.5, delay: 0.6 });

    return (
        <article>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChangeFuncHandler}
                size="5xl"
                backdrop="blur"
                scrollBehavior="inside"
            >
                <ModalContent className="relative dark:bg-dark dark:text-white-matte dark:border-1 dark:border-dark-light">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-gray-text text-sm00">
                                <motion.h2
                                    className="mb-3 text-xl sm:text-3xl font-semibold text-black dark:text-white-matte"
                                    initial={h2Initial}
                                    animate={h2Animate}
                                    transition={h2Transition}
                                >{currentTranslation.header}</motion.h2>
                                <motion.div
                                    className="flex flex-col sm:flex-row items-center justify-between"
                                    initial={authorInitial}
                                    animate={authorAnimate}
                                    transition={authorTransition}
                                >
                                    <div className="hidden sm:flex items-center self-start gap-x-3 dark:text-gray-text text-xs md:text-base">
                                        <Avatar size="small" />
                                        <div className="flex flex-col md:flex-row gap-1">
                                            <p className="font-semibold">Denis Larin</p>
                                            <p className="font-normal">{publicationDate}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 text-xs md:text-base">
                                        <p className="text-black-light dark:text-gray-text">{viewsCount}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" className="dark:fill-gray-text"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg>
                                        <p className="text-black-light dark:text-gray-text pl-3">{commentsArray.length}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" className="dark:fill-gray-text"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" /></svg>
                                        {languages.map((lang, index) => {
                                            return (
                                                <Tooltip key={index} content={t("tSelectPostLanguage")}>
                                                    <Button
                                                        size="sm"
                                                        variant="flat"
                                                        color={selectedLang === lang ? 'primary' : 'default'}
                                                        onClick={() => {
                                                            setCurrentTranslation(langs[lang]);
                                                            setSelectedLang(lang)
                                                        }}
                                                    >
                                                        {lang}
                                                    </Button>
                                                </Tooltip>
                                            )
                                        })}
                                    </div>
                                </motion.div>
                            </ModalHeader>
                            <ModalBody className="text-sm sm:text-xl leading-6 sm:leading-8 ">
                                <motion.img
                                    src={image1}
                                    alt="PostImage1"
                                    className="rounded-xl max-h-[450px] object-cover"
                                    initial={imageInitial}
                                    animate={imageAnimate}
                                    transition={imageTransition}
                                />
                                <ParseTextRender text={currentTranslation.text} imageSourse={[image2, image3]} />

                                <PostComments postId={postItem.id} commentsArray={commentsArray} setCommentsArray={setCommentsArray} />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </article>
    )
}
