import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { signIn } from "./features/common/api/auth";
import ShoppingList from "./features/shoppingList/components";
import Task from "./features/task/components";
import Plant from "./features/plant/components";

function App() {
  const handleLogin = () => {
    signIn().then((user) => console.log(user));
  };

  return (
    <Box w="100%" textAlign="center">
      <Heading>legendary-robot</Heading>
      <Button onClick={() => handleLogin()}>SIGN IN</Button>

      <Flex justifyContent="space-between" mx="2%">
        <ShoppingList />
        <Task />
        <Plant />
      </Flex>
    </Box>
  );
}

export default App;
