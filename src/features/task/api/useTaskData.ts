import { getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useQuery } from "@tanstack/react-query";
import { collection } from "firebase/firestore";
import { TASK_COLLECTION_NAME } from "./useAddTask";

const useTaskData = () => {
  return useQuery(["taskQuery"], async () => {
    try {
      const querySnapshot = await getDocs(collection(db, TASK_COLLECTION_NAME));
      return querySnapshot.docs.map((item) => {
        return { id: item.id, data: item.data() };
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  });
};

export default useTaskData;
