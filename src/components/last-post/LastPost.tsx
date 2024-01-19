import { Card, useDisclosure } from "@nextui-org/react";
import Avatar from "../common/Avatar";
import { PostArticle } from "../posts-list/PostArticle";
import { motion } from "framer-motion";

export const LastPost = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const initial = { opacity: 0, y: '25%' };
    const animate = { opacity: 1, y: 0 };
    const setDelay = (delayNumber: number) => ({ delay: delayNumber })

    return (
        <main className="relative container mt-12">
            <motion.img
                src={process.env.PUBLIC_URL + 'assets/Main.png'}
                alt="Poster"
                className="rounded-xl shadow-item group-hover:scale-105 min-h-[500px] md:min-h-fit object-cover"
                initial={initial}
                animate={animate}
                transition={setDelay(0.5)}
            />

            <motion.div>
                <Card
                    isPressable
                    onPress={onOpen}
                    className="absolute -bottom-28 md:-bottom-52 lg:-bottom-10 left-0 md:left-20 z-0 max-w-[598px] p-5 md:p-10 mx-9 bg-white dark:bg-dark dark:border-1 dark:border-dark-light rounded-xl shadow-item flex flex-col gap-y-5"
                >
                    <ul className="max-w-fit py-1 px-3 rounded-md bg-blue text-white text-xs md:text-base">
                        <li className="">sport</li>
                    </ul>

                    <h1 className="text-2xl md:text-4xl text-left font-semibold">The Impact of Technology on the Workplace: How Technology is Changing</h1>

                    <div className="flex flex-col md:flex-row items-center gap-2 mx-auto md:mx-0 text-gray-text text-xs md:text-base">
                        <Avatar size="small" />
                        <div className="flex flex-col md:flex-row gap-1">
                            <p className="font-semibold">Denis Larin</p>
                            <p className="">January 15, 2024</p>
                        </div>
                    </div>
                </Card>
            </motion.div>

            <PostArticle isOpen={isOpen} onOpenChange={onOpenChange} />
        </main>
    )
} 