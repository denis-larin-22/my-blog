import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from "firebase/storage";

const key: string = process.env.REACT_APP_FIREBASE_KEY || '';

const firebaseConfig = {
    apiKey: key,
    authDomain: "my-blog-9be6d.firebaseapp.com",
    projectId: "my-blog-9be6d",
    storageBucket: "my-blog-9be6d.appspot.com",
    messagingSenderId: "922209287656",
    appId: "1:922209287656:web:cc822d6c6c88ca93fc785d",
    measurementId: "G-ZW8N99LR0N"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage();