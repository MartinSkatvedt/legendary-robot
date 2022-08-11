import { FC } from "react";
import AddItemModal from "../../common/components/AddItemModal";
import useAddShoppingItem from "../api/useAddShoppingItem";

type ShoppingListModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ShoppingListModal: FC<ShoppingListModalProps> = (
  props: ShoppingListModalProps
) => {
  const { isOpen, onClose } = props;
  const addShoppingItemMutation = useAddShoppingItem();

  const handleSubmit = (inputValue: string) => {
    addShoppingItemMutation.mutate({ itemName: inputValue });
    onClose();
  };
  return (
    <AddItemModal
      isOpen={isOpen}
      onClose={onClose}
      title="Legg til i handleliste"
      placeholder="Vare"
      handleSubmit={handleSubmit}
    />
  );
};

export default ShoppingListModal;
