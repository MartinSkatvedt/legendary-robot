import { Box, Button, Heading } from "@chakra-ui/react";
import { signIn } from "./api/auth";
import { readShoppingListData } from "./api/shoppingList";

function App() {

  const handleLogin = () => {
    signIn().then((user) => console.log(user));
  }

  return (
    <Box w="100%" textAlign="center">
      <Heading>React + Chakra UI</Heading>
      <Button onClick={() => handleLogin()}>SIGN IN</Button>
      <Button onClick={() => 
  readShoppingListData().then((data) => data?.forEach((item) => console.log(item.id, item.data())))}>READ DATA</Button>
    </Box>
  );
}

export default App;
