interface IProps {
    text: string,
    imageSourse: string[]
}

export const ParseTextRender = ({ text, imageSourse }: IProps) => {
    const textToParse = text.split('||');
    const [image1, image2] = imageSourse;

    return (
        <>
            {/*Tags:
                -titles ||<title>
                -indents ||<indent>
                -images ||<image2> ||<image3>  
                -quotes ||<quote>
                -links  ||<link>

                !!! IMPORTENT, Put a space after ||<tag> Example: "||<title> Some text"
            */}
            {
                textToParse.map((fragment: string, index: number) => {
                    const fragmentValues = fragment.split(' ');
                    const indicator = fragmentValues[0];
                    const content = fragmentValues.slice(1).join(' ');

                    switch (indicator) {
                        case '<title>':
                            return <h5 key={index} className="text-lg sm:text-2xl font-semibold leading-5 sm:leading-7 p-2 pl-0 sm:p-8">{content}</h5>
                        case '<quote>':
                            return <p key={index} className="italic text-center p-4 sm:p-8 bg-[#F6F6F7] dark:bg-dark-light rounded-xl border-l-4 border-gray-text">{content}</p>
                        case '<link>':
                            return <a key={index} href={content} target="blank" className="text-blue text-xs sm:text-lg leading-6 sm:leading-8">{content.substring(0, 40) + '...'}</a>
                        case '<image2>':
                            return <img key={index} src={image1} alt="PostImage1" className="rounded-xl max-h-[450px] object-cover" />
                        case '<image3>':
                            return <img key={index} src={image2} alt="PostImage2" className="rounded-xl max-h-[450px] object-cover" />
                        default:
                            return <p key={index} className="text-sm sm:text-xl leading-6 sm:leading-8">{content}</p>
                    }
                })
            }
        </>
    )
}