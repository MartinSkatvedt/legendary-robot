import { getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useQuery } from "@tanstack/react-query";
import { collection } from "firebase/firestore";
import { SHOPPING_LIST_COLLECTION_NAME } from "./useAddShoppingItem";

const useShoppingListData = () => {
  return useQuery(["shoppingListQuery"], async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, SHOPPING_LIST_COLLECTION_NAME)
      );
      return querySnapshot.docs.map((item) => {
        return { id: item.id, data: item.data() };
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  });
};

export default useShoppingListData;
