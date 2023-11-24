import TaskButtons from "./TaskButtons";
import EditTask from "./EditTask";
import { useState } from "react";
interface TaskProps {
	id: string;
	category: string;
	name: string;
}
const Task = ({ id, name: initialName }: TaskProps) => {
	const [name, setName] = useState(initialName);
	const [isDeleted, setIsDeleted] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const handleCheckClick = () => {
		setIsCompleted(!isCompleted);
	};
	const handleEditClick = () => {
		setIsEditing(true);
	};
	const handleDeleteClick = () => {
		setIsDeleted(!isDeleted);
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
					className={`flex justify-between pl-2 bg-slate-400 mb-2 rounded-sm transition-colors ${
						isCompleted ? "bg-gray-500 text-gray-200" : "bg-slate-400"
					}`}
					id={id}>
					<span className={`self-center ${isCompleted ? "line-through" : ""}`}>
						{name}
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
					taskName={name}
					onClose={handleEditClose}
					onSave={handleEditSave}
				/>
			)}
		</>
	);
};

export default Task;
