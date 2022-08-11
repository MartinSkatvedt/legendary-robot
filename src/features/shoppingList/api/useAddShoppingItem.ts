import { useMutation, useQueryClient } from "@tanstack/react-query";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export const SHOPPING_LIST_COLLECTION_NAME = "shopping-list-db";

const useAddShoppingItem = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (vars: { itemName: string }) => {
      const { itemName } = vars;
      try {
        const docRef = await addDoc(
          collection(db, SHOPPING_LIST_COLLECTION_NAME),
          {
            itemName,
            purchased: false,
          }
        );
        return docRef.id;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    {
      onSuccess: () => queryClient.refetchQueries(["shoppingListQuery"]),
    }
  );
};

export default useAddShoppingItem;
