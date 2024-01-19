import { useDisclosure, Card, Image } from "@nextui-org/react";
import Avatar from "../common/Avatar";
import './index.css';
import { PostArticle } from "./PostArticle";

export const PostItem = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Card onPress={onOpen} isPressable className="max-w-[392px] p-4 rounded-xl border-1 dark:bg-dark border-[#E8E8EA] dark:border-dark-light flex flex-col gap-5">
                <Image
                    alt="Card poster"
                    src={process.env.PUBLIC_URL + 'assets/card.png'}
                    isZoomed
                    className="dark:brightness-75"
                />
                <ul className="max-w-fit py-1 px-3 text-xs md:text-base rounded-md bg-[#4B6BFB0D] hover:bg-blue text-blue hover:text-white duration-200 cursor-pointer">
                    <li className="">sport</li>
                </ul>
                <p className="text-lg md:text-2xl font-semibold text-left">
                    The Impact of Technology on the Workplace: How Technology is Changing
                </p>
                <div className="flex items-center gap-x-3 text-gray-text text-xs md:text-base">
                    <Avatar size="small" />
                    <p className="font-semibold">Denis Larin</p>
                    <p className="">January 15, 2024</p>
                </div>

            </Card>

            <PostArticle isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    )
}