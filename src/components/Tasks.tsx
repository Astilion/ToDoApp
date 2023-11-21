import Task from "./Task";
const Tasks = () => {
	return (
		<div className='bg-slate-300 p-4'>
			<div className='text-center mb-3'>
				<h3 className='font-bold text-lg text-center mb-1'>List of tasks</h3>
				<p className='text-red-500 font-semibold'>
					No tasks on the list
				</p>
			</div>
			<ul>
				<Task />
				<Task />
				<Task />
			</ul>
		</div>
	);
};

export default Tasks;
