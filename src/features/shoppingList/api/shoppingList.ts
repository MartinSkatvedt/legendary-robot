import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export const SHOPPING_LIST_COLLECTION_NAME = "shopping-list-db";

export const addShoppingListItem = async (itemName: string) => {
  try {
    const docRef = await addDoc(collection(db, SHOPPING_LIST_COLLECTION_NAME), {
      itemName,
      purchased: false,
    });
    return docRef.id;
  } catch (error) {
    console.log(error);
    return null;
  }
};
