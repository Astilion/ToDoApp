import TaskButtons from "./TaskButtons";
import EditTask from "./EditTask";
import { useState } from "react";
import { db } from "../config/firebase";
import { doc, deleteDoc } from "firebase/firestore";
interface TaskProps {
  id: string;
  name: string;
}
const Task = ({ id, name: initialName }: TaskProps) => {
  const [name, setName] = useState(initialName || "");
  const [isDeleted, setIsDeleted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const handleCheckClick = () => {
    setIsCompleted(!isCompleted);
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleDeleteClick = async () => {
    try {
      await deleteDoc(doc(db, "tasks", id));
      setIsDeleted(true);
    } catch (err) {
      console.error("Error deleting task: ", err);
    }
  };

  const handleEditSave = (editedName: string) => {
    setName(editedName);
    setIsEditing(false);
  };
  const handleEditClose = () => {
    setIsEditing(false);
  };

  return (
    <>
      {!isDeleted && (
        <li
          className={`mb-2 flex justify-between rounded-sm bg-slate-400 pl-2 transition-colors ${
            isCompleted ? "bg-gray-500 text-gray-700" : "bg-slate-400"
          }`}
          id={id}
        >
          <span className={`self-center ${isCompleted ? "line-through" : ""}`}>
            {name || "No Name"} {/* Display "No Name" if name is falsy */}
          </span>

          <TaskButtons
            onCheckClick={handleCheckClick}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        </li>
      )}
      {isEditing && (
        <EditTask
          TaskName={name}
          taskId={id}
          onClose={handleEditClose}
          onSave={handleEditSave}
        />
      )}
    </>
  );
};

export default Task;
