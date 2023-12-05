import Button from "./ui/Button";
import { IconCheck, IconX, IconEdit } from "@tabler/icons-react";

interface TaskButtonsProps {
  onCheckClick?: () => void;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

const TaskButtons = ({
  onCheckClick,
  onEditClick,
  onDeleteClick,
}: TaskButtonsProps) => {
  return (
    <div className="m-0 inline-block p-0">
      <Button onClick={onCheckClick}>
        <IconCheck color="green" />
      </Button>
      <Button onClick={onEditClick}>
        <IconEdit />
      </Button>
      <Button onClick={onDeleteClick}>
        <IconX color="red" />
      </Button>
    </div>
  );
};

export default TaskButtons;
