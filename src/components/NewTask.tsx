import TaskCategory from "./ui/TaskCategory";

const NewTask = () => {
	return (
		<div className='bg-slate-600 p-5 text-white'>
			<input
				className='w-full rounded-md mb-2 p-1 text-slate-950'
				type='text'
				placeholder='Add task...'
			/>

			<button className='block px-3 py-1 rounded-lg bg-sky-700 transition-colors hover:bg-sky-500 font-bold text-white'>
				Add Task
			</button>
			<label className='font-semibold p-1' htmlFor='tasks'>
				Category:
			</label>
			<div className='flex flex-wrap'>
			<TaskCategory/>
			</div>
		</div>
	);
};
export default NewTask;
