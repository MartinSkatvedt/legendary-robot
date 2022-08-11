import { Box, Button, Checkbox, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import ComponentWrapper from "../../common/components/ComponentWrapper";
import useTaskData from "../api/useTaskData";
import TaskModal from "./TaskModal";

const Task: FC = () => {
  const { data: taskData, isLoading: taskIsLoading } = useTaskData();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!taskData || taskIsLoading) {
    return <Box>Loading...</Box>;
  }

  const TaskElements = taskData.map((item) => (
    <Box key={item.id}>
      <Checkbox>{item.data.taskName}</Checkbox>
    </Box>
  ));

  return (
    <ComponentWrapper title={"Oppgaver"}>
      {TaskElements}
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
