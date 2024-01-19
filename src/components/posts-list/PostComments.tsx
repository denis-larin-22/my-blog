import { Button } from "@nextui-org/react";
import { useState } from "react";

export interface ICommentValues {
    name: string,
    comment: string
}

const PostComments = ({ commentsArray, setCommentsArray }: { commentsArray: Array<ICommentValues>, setCommentsArray: React.Dispatch<React.SetStateAction<typeof commentsArray>> }) => {
    const [commentsList, setCommetsList] = useState(commentsArray);
    const initInputsValues: ICommentValues = {
        name: '',
        comment: ''
    }
    const [inputsValues, setInputsValues] = useState(initInputsValues);
    const commentSendHandler = () => {
        const comment = inputsValues;
        commentsList.push(comment);
        setCommetsList(commentsList);
        setCommentsArray(commentsList);

        setInputsValues(initInputsValues);
    }

    return (
        <div className="flex flex-col gap-2 p-6 pt-2 text-sm sm:text-xl leading-6 sm:leading-8  border-t-1 border-gray-300">
            <p className="text-black-light dark:text-white-matte font-semibold">Leave  a comment:</p>
            <input
                type="text"
                className="bg-gray-200 dark:bg-dark-light rounded-lg p-2 focus:outline-gray-text"
                placeholder="Name"
                value={inputsValues.name}
                onChange={(e) => setInputsValues({ ...inputsValues, name: e.target.value })}
            />
            <textarea
                value={inputsValues.comment}
                onChange={(e) => setInputsValues({ ...inputsValues, comment: e.target.value })}
                cols={30} rows={2}
                className="bg-gray-200 dark:bg-dark-light rounded-lg p-2 focus:outline-gray-text"
                placeholder="Comment"
            ></textarea>
            {
                inputsValues.name.length !== 0 &&
                    inputsValues.comment.length !== 0 ?
                    <Button onClick={commentSendHandler} className="max-w-14" color="primary">Send</Button>
                    :
                    null
            }
            <ul className="flex flex-col gap-y-2">
                {
                    commentsList.map((item, index) => (
                        <li key={index} className="flex items-center gap-x-2">
                            <p className="flex items-center justify-center bg-gray-text w-10 h-10 rounded-full text-white-matte ">D</p>
                            <div className="flex flex-col">
                                <p className="text-gray-text font-semibold">{item.name}</p>
                                <p className="">{item.comment}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PostComments;