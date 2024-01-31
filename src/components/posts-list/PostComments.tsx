import { Button } from "@nextui-org/react";
import { useState } from "react";
import { IPostItemCommentValues } from "../../core/store/types";
import { updateCommentsPostInFirestore } from "../../api";
import { useTranslation } from "react-i18next";

interface IProps {
    postId: string,
    commentsArray: Array<IPostItemCommentValues>,
    setCommentsArray: (list: Array<IPostItemCommentValues>,) => void,
}

const PostComments = ({ postId, commentsArray, setCommentsArray }: IProps) => {
    const { t } = useTranslation();

    const [commentsList, setCommetsList] = useState(commentsArray);
    const initInputsValues: IPostItemCommentValues = {
        name: '',
        comment: ''
    }

    const [inputsValues, setInputsValues] = useState(initInputsValues);
    const commentSendBtnHandler = () => {
        const comment = inputsValues;
        commentsList.push(comment);
        // List for render
        setCommetsList(commentsList);
        // List for Article
        setCommentsArray(commentsList);
        // Update list in Firestore
        updateCommentsPostInFirestore(postId, inputsValues);
        // Reset inputs fields
        setInputsValues(initInputsValues);
    }

    return (
        <div className="flex flex-col gap-2 pt-2 text-sm sm:text-base leading-6 sm:leading-8  border-t-1 border-gray-300">
            <p className="text-black-light dark:text-white-matte font-semibold">{t("tLeaveComment")}</p>
            <input
                type="text"
                className="bg-gray-200 dark:bg-dark-light rounded-lg p-2 focus:outline-gray-text"
                placeholder={t("tName")}
                value={inputsValues.name}
                onChange={(e) => setInputsValues({ ...inputsValues, name: e.target.value })}
            />
            <textarea
                value={inputsValues.comment}
                onChange={(e) => setInputsValues({ ...inputsValues, comment: e.target.value })}
                cols={30} rows={2}
                className="bg-gray-200 dark:bg-dark-light rounded-lg p-2 focus:outline-gray-text"
                placeholder={t("tComment")}
            ></textarea>
            {
                inputsValues.name.length !== 0 &&
                    inputsValues.comment.length !== 0 ?
                    <Button onClick={commentSendBtnHandler} className="max-w-14" color="primary">Send</Button>
                    :
                    null
            }
            <ul className="flex flex-col gap-y-2 pl-2">
                {
                    commentsList.map((item, index) => (
                        <li key={index} className="flex items-center gap-x-2">
                            {item.name && <p className="flex items-center justify-center bg-gray-text w-10 h-10 rounded-full text-white-matte">{item.name[0].toUpperCase()}</p>}
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