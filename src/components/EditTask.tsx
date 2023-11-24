import { useState } from "react";
import Modal from "./Modal";

interface EditTaskProps {
	taskName: string;
	onClose: () => void;
	onSave: (editedName: string) => void;
}

const EditTask = ({ taskName, onClose, onSave }: EditTaskProps) => {
	const [editedName, setEditedName] = useState(taskName);

	const handleSave = () => {
		onSave(editedName);
		onClose();
	};
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedName(e.target.value);
	};

	return (
			<Modal onClose={onClose}>
				<h2>Edit Task</h2>
				<label htmlFor='editedName'>Task Name:</label>
				<input
					type='text'
					id='editedName'
					value={editedName}
					onChange={handleNameChange}
				/>
				<button onClick={handleSave}>Save</button>
				<button onClick={onClose}>Cancel</button>
			</Modal>

	);
};

export default EditTask;
