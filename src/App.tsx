import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { signIn } from "./features/common/api/auth";
import ShoppingList from "./features/shoppingList/components";
import Task from "./features/task/components";
import Plant from "./features/plant/components";
import useUser from "./features/common/api/useUser";

function App() {
  const user = useUser();

  if (!user) {
    return (
      <Flex
        w="100%"
        textAlign="center"
        background="teal"
        h="100vh"
        color="white"
        justifyContent="center"
        alignItems="center"
      >
        <Button onClick={() => signIn()} colorScheme="teal" w="40%" h="15%">
          Logg inn
        </Button>
      </Flex>
    );
  }

  return (
    <Flex
      justifyContent="space-between"
      w="100%"
      background="teal"
      h="100vh"
      color="white"
      p="1%"
    >
      <ShoppingList />
      <Task />
      <Plant />
    </Flex>
  );
}

export default App;
