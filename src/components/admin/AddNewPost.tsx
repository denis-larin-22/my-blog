import { ChangeEvent, useState } from "react";
import { Button } from "@nextui-org/react";
import { _generateRandomId } from "../../_utils/_generateRandomId";
import { _getDate } from "../../_utils/_getDate";
import { INewPostItem, addNewPostToFirestore } from "../../api/firebase/firestore/addNewPostToFirestore";
import { uploadImagesToStorage } from "../../api/firebase/storage/uploadImagesToStorage";
import { logout } from "./logout";

interface IProps {
    toggleAdminState: (state: boolean) => void;
}

export const AddNewPost = ({ toggleAdminState }: IProps) => {
    // Language post variant
    const newPostLangValues = {
        header: '',
        text: ''
    }
    // Inputs fields of languages
    const [inputValueEn, setInputValueEn] = useState(newPostLangValues);
    const [inputValueUa, setInputValueUa] = useState(newPostLangValues);
    const [inputValueRu, setInputValueRu] = useState(newPostLangValues);
    // Inputs fields of categories
    const [inputValueCategories, setInputValueCategories] = useState('');
    // Inputs fields of images
    const [images, setImages] = useState<Array<File | null>>([null, null, null]);

    // Send handler new post with images to firebase (post data) and storage (post images)
    const sendHandler = async () => {
        const newPost: INewPostItem = {
            langs: {
                EN: inputValueEn,
                UA: inputValueUa,
                RU: inputValueRu
            },
            reactions: {
                comments: [],
                views: 0
            },
            publicationDate: _getDate(),
            categories: inputValueCategories.split(' '),
        }

        const newPostId = _generateRandomId();
        // Send images to storage
        if (images.find((image) => image === null)) {
            console.log('alert');

            alert("Please select all images");
            return;
        }
        uploadImagesToStorage(images, newPostId);
        // Send post data object to firestore
        addNewPostToFirestore(newPostId, newPost);
        // Reset inputs fields
        setInputValueEn(newPostLangValues);
        setInputValueUa(newPostLangValues);
        setInputValueRu(newPostLangValues);
        setInputValueCategories('');
        setImages([null, null, null]);
    }
    // Images inputs handler (must have 3 images)
    const handleImagesInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        if (e.target.files && e.target.files[0]) {
            const newImages = [...images];
            newImages[index] = e.target.files[0];
            setImages(newImages);
        }
    };

    return <div className="container min-h-screen p-5 flex flex-col gap-6 bg-slate-200">
        <Button onClick={() => logout(toggleAdminState)}>Log Out</Button>
        <form action="" className="flex flex-col gap-2">
            <p className="font-bold">EN</p>
            <label htmlFor="headerEN">Header:</label>
            <input
                id="headerEN" type="text" className="border-2 border-dark p-2"
                value={inputValueEn.header}
                onChange={(e) => setInputValueEn({ ...inputValueEn, header: e.target.value })}
            />

            <label htmlFor="textEN">Text:</label>
            <textarea
                id="textEN" className="border-2 border-dark p-2"
                value={inputValueEn.text}
                onChange={(e) => setInputValueEn({ ...inputValueEn, text: e.target.value })}
            />
        </form>
        <form action="" className="flex flex-col gap-2">
            <p className="font-bold">UA</p>
            <label htmlFor="headerUA">Заголовок:</label>
            <input
                id="headerUA" type="text" className="border-2 border-dark p-2"
                value={inputValueUa.header}
                onChange={(e) => setInputValueUa({ ...inputValueUa, header: e.target.value })}
            />

            <label htmlFor="textUA">Текст:</label>
            <textarea
                id="textUA" className="border-2 border-dark p-2"
                value={inputValueUa.text} onChange={(e) => setInputValueUa({ ...inputValueUa, text: e.target.value })}
            />
        </form>
        <form action="" className="flex flex-col gap-2">
            <p className="font-bold">RU</p>
            <label htmlFor="headerRU">Заголовок:</label>
            <input
                id="headerRU" type="text" className="border-2 border-dark p-2"
                value={inputValueRu.header}
                onChange={(e) => setInputValueRu({ ...inputValueRu, header: e.target.value })}
            />

            <label htmlFor="textRU">Текст:</label>
            <textarea
                id="textRU" className="border-2 border-dark p-2"
                value={inputValueRu.text} onChange={(e) => setInputValueRu({ ...inputValueRu, text: e.target.value })}
            />
        </form>
        <label htmlFor="categories">Categories:</label>
        <input
            id="categories" type="text" className="border-2 border-dark p-2"
            value={inputValueCategories}
            onChange={(e) => setInputValueCategories(e.target.value)}
        />
        {/* Added 3 images */}
        Images
        <input
            type="file"
            name=""
            id=""
            onChange={(e) => handleImagesInputChange(e, 0)}
        />
        <input
            type="file"
            name=""
            id=""
            onChange={(e) => handleImagesInputChange(e, 1)}
        />
        <input
            type="file"
            name=""
            id=""
            onChange={(e) => handleImagesInputChange(e, 2)}
        />
        <Button
            onClick={sendHandler}
        >
            Send
        </Button>
    </div >
}