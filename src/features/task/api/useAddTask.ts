import { useMutation, useQueryClient } from "@tanstack/react-query";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export const TASK_COLLECTION_NAME = "task-db";

const useAddTask = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (vars: { taskName: string }) => {
      const { taskName } = vars;
      try {
        const docRef = await addDoc(collection(db, TASK_COLLECTION_NAME), {
          taskName,
        });
        return docRef.id;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    {
      onSuccess: () => queryClient.refetchQueries(["taskQuery"]),
    }
  );
};

export default useAddTask;
