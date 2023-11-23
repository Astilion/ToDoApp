import Task from "./Task";
interface TasksProps {
	tasks: { id: string; category: string; name: string }[];
}
const Tasks = ({ tasks }: TasksProps) => {
	const isEmpty = tasks.length === 0;
	return (
		<div className='bg-slate-300 p-4'>
			<div className='text-center mb-3'>
				<h3 className='font-bold text-lg text-center mb-1'>List of tasks</h3>
				{isEmpty && (
					<p className='text-red-500 font-semibold'>No tasks on the list</p>
				)}
			</div>
			<ul>
				{tasks.map(task => (
					<Task
						key={task.id}
						id={task.id}
						category={task.category}
						name={task.name}
					/>
				))}
			</ul>
		</div>
	);
};

export default Tasks;
