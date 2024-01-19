import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import Avatar from "../common/Avatar";
import { useState } from "react";
import PostComments, { ICommentValues } from "./PostComments";

interface IProps {
    isOpen: boolean,
    onOpenChange: () => void
}

interface IReactionsObj {
    comments: Array<ICommentValues>,
    views: number
}

interface ILangObj {
    header: string,
    text: string,
}

type ImagesArray = [string, string];
interface IArticle {
    images: ImagesArray,
    langs: {
        EN: ILangObj,
        UA: ILangObj,
        RU: ILangObj,
    },
    reactions: IReactionsObj
}

export const PostArticle = ({ isOpen, onOpenChange }: IProps) => {
    const article: IArticle = {
        images: [process.env.PUBLIC_URL + 'assets/img1.png', process.env.PUBLIC_URL + 'assets/img2.png'],
        langs: {
            EN: {
                header: 'The Impact of Technology on the Workplace: How Technology is Changing',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus enim delectus et alias, ducimus corrupti obcaecati odit atque sapiente vel asperiores! Expedita, incidunt! Possimus rerum fugiat incidunt architecto, nemo laborum! Officia suscipit enim quas commodi eligendi optio dolor rem. Distinctio autem omnis, exercitationem perferendis sint voluptatem delectus nemo quibusdam nihil praesentium quam cum. Temporibus doloremque dolor ipsum laboriosam ad dolorem!'
            },
            UA: {
                header: 'Вплив технологій на робоче місце: як технології змінюються',
                text: 'Вочевидь, зараз не всі пригадають цю серпневу дату – вісімнадцяте святкування Дня Незалежності України. Відлік десятилітньої історії Вишиванкового фестивалю розпочався саме тоді, коли сімдесят дев’ять людей, убраних у виши́ванки, утворили вздовж Потьомкінських сходів так званий «живий ланцюг». Амбітні плани організаторів повністю виправдалися: він сягнув-таки берега моря. Простягаючись білою ниткою від п’єдесталу пам’ятника Рішельє, ланцюг із року в рік ставав усе довшим, а разом із цим зростало й усвідомлення Одеси як українського міста. Зростало настільки, що в 2014 році, незважаючи на невпинну зливу, для участі в акції «Вишиванковий ланцюг» вишикувалася півторатисячна черга, утворивши нескінченне живе море виши́ванок.'
            },
            RU: {
                header: 'Влияние технологий на рабочее место: как технологии меняются',
                text: 'Наши тексты на русском написаны преподавателями этого языка и разделены на разные уровни сложности и темы. Выберите тот, который лучше всего соответствует вашим потребностям или вкусам. Тексты сопровождаются аудиофайлами, чтобы вы могли слышать правильное произношение слов и предложений. При желании вы также можете скачать наши тексты на русском в формате PDF.'
            }
        },
        reactions: {
            comments: [{ name: 'Denis', comment: 'Hello world!' }],
            views: 1
        }
    }
    const { images: [image1, image2], langs, reactions } = article;
    // languages translates
    const languages = Object.keys(article.langs) as Array<keyof typeof article.langs>;
    const [selectedLang, setSelectedLang] = useState(languages[0]);
    const [currentTranslation, setCurrentTranslation] = useState<ILangObj>(article.langs[selectedLang]);
    // reactions states
    const [commentsArray, setCommentsArray] = useState(reactions.comments);
    const [viewsCount, setViewsCount] = useState(reactions.views);

    const onOpenChangeFuncHandler = () => {
        //increment views count
        setViewsCount(viewsCount + 1);
        // open modal
        onOpenChange();
    }

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
                                <h2 className="mb-3 text-xl sm:text-3xl font-semibold text-black dark:text-white-matte">{currentTranslation.header}</h2>
                                <div className="flex flex-col sm:flex-row items-center justify-between">
                                    <div className="hidden sm:flex items-center self-start gap-x-3 dark:text-gray-text text-xs md:text-base">
                                        <Avatar size="small" />
                                        <div className="flex flex-col md:flex-row gap-1">
                                            <p className="font-semibold">Denis Larin</p>
                                            <p className="">January 15, 2024</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 text-xs md:text-base">
                                        <p className="text-black-light dark:text-gray-text">{viewsCount}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" className="dark:fill-gray-text"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg>
                                        <p className="text-black-light dark:text-gray-text pl-3">{commentsArray.length}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" className="dark:fill-gray-text"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" /></svg>
                                        {languages.map((lang, index) => {
                                            return (
                                                <Button
                                                    key={lang + index}
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
                                            )
                                        })}

                                    </div>
                                </div>
                            </ModalHeader>
                            <ModalBody className="text-sm sm:text-xl leading-6 sm:leading-8 ">
                                <img src={image1} alt="PostImage1" className="rounded-xl" />
                                <p>
                                    {currentTranslation.text}
                                </p>
                                <h5 className="text-lg sm:text-2xl font-semibold leading-4 sm:leading-7 pt-4 sm:pt-8 pb-4">Research Your Destination</h5>

                                <img src={image2} alt="PostImage2" className="rounded-xl" />
                                <h6 className="italic text-center p-4 sm:p-8 bg-[#F6F6F7] dark:bg-dark-light rounded-xl border-l-4 border-gray-text">“ Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. ”</h6>
                                {/* 
                                    Нужно выделять:
                                        -заголовки
                                        -абзацы
                                        -картинки
                                        -цитаты
                                */}

                                <PostComments commentsArray={commentsArray} setCommentsArray={setCommentsArray} />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </article>
    )
}