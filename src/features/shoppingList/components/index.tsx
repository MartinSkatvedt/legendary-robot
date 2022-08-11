import { FC } from "react";
import { Box, Button, Checkbox, useDisclosure } from "@chakra-ui/react";
import ComponentWrapper from "../../common/components/ComponentWrapper";
import useShoppingListData from "../api/useShoppingListData";
import ShoppingListModal from "./ShoppingListModal";
import CommonSpinner from "../../common/components/CommonSpinner";

const ShoppingList: FC = () => {
  const { data: shoppingListData, isLoading: shoppingListIsLoading } =
    useShoppingListData();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ComponentWrapper title={"Handleliste"}>
      {!shoppingListData || shoppingListIsLoading ? (
        <CommonSpinner />
      ) : (
        shoppingListData.map((item) => (
          <Box key={item.id}>
            <Checkbox size="lg" my="5px">
              {item.data.itemName}
            </Checkbox>
          </Box>
        ))
      )}

      <Button
        position="absolute"
        bottom="0"
        right="0"
        mr="10px"
        mb="10px"
        colorScheme="teal"
        onClick={onOpen}
      >
        Legg til i handleliste
      </Button>
      <ShoppingListModal isOpen={isOpen} onClose={onClose} />
    </ComponentWrapper>
  );
};

export default ShoppingList;
