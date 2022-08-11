import { Box, Button, Checkbox, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import ComponentWrapper from "../../common/components/ComponentWrapper";
import CommonSpinner from "../../common/components/CommonSpinner";
import useTaskData from "../api/useTaskData";
import TaskModal from "./TaskModal";

const Task: FC = () => {
  const { data: taskData, isLoading: taskIsLoading } = useTaskData();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ComponentWrapper title={"Oppgaver"}>
      {!taskData || taskIsLoading ? (
        <CommonSpinner />
      ) : (
        taskData.map((item) => (
          <Box key={item.id}>
            <Checkbox size="lg" my="5px">
              {item.data.taskName}
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
        Legg til oppgave
      </Button>
      <TaskModal isOpen={isOpen} onClose={onClose} />
    </ComponentWrapper>
  );
};

export default Task;
