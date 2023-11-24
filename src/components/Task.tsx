import TaskButtons from "./TaskButtons";
import { useState } from "react";
interface TaskProps {
	id: string;
	category: string;
	name: string;
}
const Task = ({ id, name }: TaskProps) => {
	const [isDeleted, setIsDeleted] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);
	const handleCheckClick = () => {
		setIsCompleted(!isCompleted);
	};
	const handleEditClick = () => {
		console.log("clicked");
	};
	const handleDeleteClick = () => {
		setIsDeleted(!isDeleted);
		console.log("deleted");
	};
	return (
		<>
			{!isDeleted && (
				<li
					className={`flex justify-between pl-2 bg-slate-400 mb-2 rounded-sm transition-colors ${
						isCompleted ? "bg-gray-600 text-gray-200" : "bg-slate-400"
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
		</>
	);
};

export default Task;
