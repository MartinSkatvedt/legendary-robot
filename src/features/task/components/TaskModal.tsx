import { FC } from "react";
import AddItemModal from "../../common/components/AddItemModal";
import useAddTask from "../api/useAddTask";

type TaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TaskModal: FC<TaskModalProps> = (props: TaskModalProps) => {
  const { isOpen, onClose } = props;

  const addTaskMutation = useAddTask();

  const handleSubmit = (inputValue: string) => {
    addTaskMutation.mutate({ taskName: inputValue });
    onClose();
  };
  return (
    <AddItemModal
      isOpen={isOpen}
      onClose={onClose}
      title="Legg til oppgave"
      placeholder="Oppgave"
      handleSubmit={handleSubmit}
    />
  );
};

export default TaskModal;
