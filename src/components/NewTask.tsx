import TaskCategory from "./ui/TaskCategory";
import { useRef, useState } from "react";

interface NewTaskProps {
	addTaskHandler: (inputValue: string) => void;
}
const NewTask = ({ addTaskHandler }: NewTaskProps) => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [error, setError] = useState(false);
	const inputClasses = ["w-full sm:w-10/12 rounded-md mb-2 p-1 text-slate-950"];
	if (error) {
		inputClasses.push("bg-red-400 border-2 border-red-700");
	}

	const handleAddTask = () => {
		const inputValue = inputRef.current?.value || "";

		if (inputValue.trim() !== "") {
			addTaskHandler(inputValue);
			setError(false);
		} else {
			setError(true);
		}
	};
	return (
		<div className='bg-slate-600 p-5 text-white'>
			<input
				ref={inputRef}
				className={inputClasses.join(" ")}
				type='text'
				placeholder='Add task...'
			/>

			<button
				onClick={handleAddTask}
				className=' sm:ml-2 px-3 py-1 rounded-lg bg-sky-700 transition-colors hover:bg-sky-500 font-bold text-white'>
				Add Task
			</button>
			{error && (
				<p className='font-semibold text-red-400 text-center'>
					Add task field must not be empty!
				</p>
			)}
			{!error && ""}
			<label className='block font-semibold p-1' htmlFor='tasks'>
				Category:
			</label>
			<div className='flex flex-wrap'>
				<TaskCategory />
			</div>
		</div>
	);
};
export default NewTask;
