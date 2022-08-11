import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC, useState } from "react";

type AddItemModalProps = {
  title: string;
  placeholder: string;
  isOpen: boolean;
  onClose: () => void;
  handleSubmit: (arg1: string) => void;
};

const AddItemModal: FC<AddItemModalProps> = (props: AddItemModalProps) => {
  const { isOpen, onClose, title, placeholder, handleSubmit } = props;
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder={placeholder} onChange={handleChange} />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={() => handleSubmit(inputValue)}
            >
              Send inn
            </Button>
            <Button onClick={onClose}>Lukk</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddItemModal;
