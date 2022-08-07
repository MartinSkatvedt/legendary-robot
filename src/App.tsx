import { Box, Heading } from "@chakra-ui/react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const readData = async () => {
  const querySnapshot = await getDocs(collection(db, "shopping-list-db"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};

function App() {
  readData();

  return (
    <Box w="100%" textAlign="center">
      <Heading>React + Chakra UI</Heading>
    </Box>
  );
}

export default App;
