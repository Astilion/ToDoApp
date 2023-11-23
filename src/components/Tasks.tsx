import Task from "./Task";

const DUMMY_TASKS = [
	{id: 't1', category: 'home', name: 'Cleaning'},
	{id: 't2', category: 'sport', name: 'Go to Gym'},
	{id: 't3', category: 'finances', name: 'Pay rent'},
]
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
				{DUMMY_TASKS.map((task) => (
					<Task key={task.id}id={task.id} category={task.category} name={task.name}/>
				))}
			</ul>
		</div>
	);
};

export default Tasks;
