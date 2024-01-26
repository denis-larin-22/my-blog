interface IProps {
    text: string,
    imageSourse: string[]
}

export const ParseTextRender = ({ text, imageSourse }: IProps) => {
    const textToParse = text.split('||');
    const [image1, image2] = imageSourse;

    return (
        <>
            {/* 
                                    Добавление коментариев
                                    Обновление количества просмотров
                                    Работа с текстом

                                    Нужно выделять:
                                        -заголовки ||<title>
                                        -абзацы ||<indent>
                                        -картинки ||<image1> ||<image2>
                                        -цитаты ||<quote>
                                        -ссылки  ||<link>


                                        !!! ВАЖНО  ||<title> Какой-то текст --- Ставить пробел после <indicator> 
                                        -возможно iframes
                                */}
            {
                textToParse.map((fragment: string, index: number) => {
                    const fragmentValues = fragment.split(' ');
                    const indicator = fragmentValues[0];
                    const content = fragmentValues.slice(1).join(' ');

                    switch (indicator) {
                        case '<title>':
                            return <h5 key={index} className="text-lg sm:text-2xl font-semibold leading-4 sm:leading-7 pt-4 sm:pt-8 pb-4">{content}</h5>
                        case '<quote>':
                            return <p key={index} className="italic text-center p-4 sm:p-8 bg-[#F6F6F7] dark:bg-dark-light rounded-xl border-l-4 border-gray-text">{content}</p>
                        case '<link>':
                            return <a key={index} href={content} target="blank" className="text-blue text-xs sm:text-lg leading-6 sm:leading-8">{content}</a>
                        case '<image1>':
                            return <img src={image1} alt="PostImage1" className="rounded-xl" />
                        case '<image2>':
                            return <img src={image2} alt="PostImage2" className="rounded-xl" />
                        default:
                            return <p key={index} className="pt-4 text-sm sm:text-xl leading-6 sm:leading-8">{content}</p>
                    }
                })
            }
        </>
    )
}