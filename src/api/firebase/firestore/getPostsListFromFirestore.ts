import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getProductsFromStorage = async () => {
    const productsCollectionRef = collection(db, "posts");
    const data = await getDocs(productsCollectionRef);

    const arrayProducts = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));

    return arrayProducts;
}