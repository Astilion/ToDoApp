import { useState } from "react";
import { handleEnterKey } from "../utils/handleEnterKey";
import Modal from "./Modal";
import { db } from "../config/firebase";
import { doc, updateDoc } from "firebase/firestore";

interface EditTaskProps {
	taskId: string
	TaskName: string;
	onClose: () => void;
	onSave: (editedName: string) => void;
}

const EditTask = ({ taskId,TaskName, onClose, onSave }: EditTaskProps) => {
	const [editedName, setEditedName] = useState(TaskName);

	const handleSave = async () => {
		const taskDocRef = doc(db, "tasks", taskId);
		await updateDoc(taskDocRef, { TaskName: editedName });
		onSave(editedName);
		onClose();
	};
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedName(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		handleEnterKey(e, handleSave);
	};

	return (
		<Modal onClose={onClose}>
			<h2 className='font-bold mb-2 text-center'>Edit Task</h2>
			<div className='bg-slate-800 h-[0.25px] rounded-md mb-2'></div>
			<label htmlFor='editedName'>Task Name:</label>
			<input
				className='p-1 my-2 rounded-md w-3/4'
				type='text'
				id='editedName'
				value={editedName}
				onChange={handleNameChange}
				onKeyDown={handleKeyDown}
			/>
			<div className='flex justify-end p-2'>
				<button
					className='px-3 py-2 bg-sky-600 text-white transition-colors hover:bg-slate-400 rounded-md mx-2'
					onClick={onClose}>
					Cancel
				</button>
				<button
					className='px-3 py-2 mx-2 bg-sky-600 text-white transition-colors hover:bg-sky-500 rounded-md'
					onClick={handleSave}>
					Save
				</button>
			</div>
		</Modal>
	);
};

export default EditTask;
