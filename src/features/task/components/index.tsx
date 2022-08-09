import { Box, Heading } from "@chakra-ui/react";
import { FC } from "react";
import ComponentWrapper from "../../common/components/ComponentWrapper";
import useTaskData from "../api/useTaskData";

const Task: FC = () => {
  const { data: taskData, isLoading: taskIsLoading } = useTaskData();

  if (!taskData || taskIsLoading) {
    return <Box>Loading...</Box>;
  }

  const TaskElements = taskData.map((item) => (
    <Box key={item.id}>{item.data.taskName}</Box>
  ));

  return (
    <ComponentWrapper>
      <Heading as="h3">Oppgaver</Heading>
      {TaskElements}
    </ComponentWrapper>
  );
};

export default Task;
