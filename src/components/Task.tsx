import TaskButtons from "./TaskButtons";
import EditTask from "./EditTask";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { doc, deleteDoc, updateDoc, getDoc } from "firebase/firestore";
interface TaskProps {
  id: string;
  name: string;
}
const Task = ({ id, name: initialName }: TaskProps) => {
  const [name, setName] = useState(initialName || "");
  const [isDeleted, setIsDeleted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  
  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const taskDoc = await getDoc(doc(db, "tasks", id));
        if (taskDoc.exists()) {
          const taskData = taskDoc.data();
          setIsCompleted(taskData.isCompleted || false);
        }
      } catch (err) {
        console.error("Error fetching task data: ", err);
      }
    };

    fetchTaskData();
  }, [id]);
  const handleCheckClick = async () => {
    try {
      await updateDoc(doc(db, "tasks", id), {
        isCompleted: !isCompleted,
      });
      setIsCompleted(!isCompleted);
    } catch (err) {
      console.error("Error updating task: ", err);
    }
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
          className={`relative mb-2 flex flex-nowrap justify-between rounded-sm bg-slate-400 pl-2 transition-colors ${
            isCompleted ? "bg-gray-500 text-gray-700" : "bg-slate-400"
          }`}
          id={id}
        >
          <span className={`self-center ${isCompleted ? "line-through" : ""}`}>
            {name || "No Name"}
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
