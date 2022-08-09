import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import { useQuery } from "@tanstack/react-query";
import { PLANT_COLLECTION_NAME } from "./plant";

const usePlantData = () => {
  return useQuery(["plantQuery"], async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, PLANT_COLLECTION_NAME)
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

export default usePlantData;
