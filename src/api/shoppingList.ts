import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const SHOPPING_LIST_COLLECTION_NAME = "shopping-list-db";

export const addShoppingListItem = async (itemName: string) => {
  try {
    const docRef = await addDoc(collection(db, SHOPPING_LIST_COLLECTION_NAME), {
      itemName,
      purchased: false
    });
    return docRef.id;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const readShoppingListData = async () => {
  try {
    const querySnapshot = await getDocs(
      collection(db, SHOPPING_LIST_COLLECTION_NAME)
    );
    return querySnapshot;
  } catch (error) {
    console.log(error);
    return null;
  }
};
