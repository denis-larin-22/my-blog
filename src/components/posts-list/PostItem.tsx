import { useDisclosure, Card, Image } from "@nextui-org/react";
import Avatar from "../common/Avatar";
import './index.css';
import { PostArticle } from "./PostArticle";
import { IPostItem } from "../../core/store/types";

interface IProps {
    postItem: IPostItem,
    filterPostsByCategory: (value: string) => void,
}

export const PostItem = ({ postItem, filterPostsByCategory }: IProps) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { images: [image1], langs: { RU: { header } }, categories, publicationDate } = postItem;

    return (
        <>
            <Card onClick={onOpen} isPressable className="w-full p-4 rounded-xl border-1 dark:bg-dark border-[#E8E8EA] dark:border-dark-light flex flex-col gap-5 hover:scale-105 duration-250">
                <img
                    alt="Card poster"
                    src={image1}
                    className="h-52 w-full object-cover dark:brightness-75 rounded-xl"
                />
                <ul className="">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className="max-w-fit py-1 px-3 text-xs md:text-sm rounded-md bg-[#4B6BFB0D] hover:bg-blue text-blue hover:text-white duration-200 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                filterPostsByCategory(category);
                            }}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
                <p className="text-lg md:text-2xl font-semibold text-left">
                    {header}
                </p>
                <div className="flex items-center gap-x-3 text-gray-text text-xs md:text-base">
                    <Avatar size="small" />
                    <p className="font-semibold">Denis Larin</p>
                    <p className="">{publicationDate}</p>
                </div>

            </Card>

            <PostArticle
                postItem={postItem}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />
        </>
    )
}