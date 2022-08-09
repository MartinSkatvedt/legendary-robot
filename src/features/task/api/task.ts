import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export const TASK_COLLECTION_NAME = "task-db";

export const addTask = async (taskName: string) => {
  try {
    const docRef = await addDoc(collection(db, TASK_COLLECTION_NAME), {
      taskName,
    });
    return docRef.id;
  } catch (error) {
    console.log(error);
    return null;
  }
};
