import { FC } from "react";
import { Box, Heading } from "@chakra-ui/react";
import ComponentWrapper from "../../common/components/ComponentWrapper";
import useShoppingListData from "../api/useShoppingListData";

const ShoppingList: FC = () => {
  const { data: shoppingListData, isLoading: shoppingListIsLoading } =
    useShoppingListData();

  if (!shoppingListData || shoppingListIsLoading) {
    return <Box>Loading...</Box>;
  }

  const ShoppingListElements = shoppingListData.map((item) => (
    <Box key={item.id}>{item.data.itemName}</Box>
  ));

  return (
    <ComponentWrapper>
      <Heading as="h3">Handleliste</Heading>
      {ShoppingListElements}
    </ComponentWrapper>
  );
};

export default ShoppingList;
