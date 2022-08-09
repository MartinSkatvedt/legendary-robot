import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export const PLANT_COLLECTION_NAME = "plant-db";

export const addPlant = async (plantName: string) => {
  try {
    const docRef = await addDoc(collection(db, PLANT_COLLECTION_NAME), {
      plantName,
    });
    return docRef.id;
  } catch (error) {
    console.log(error);
    return null;
  }
};
