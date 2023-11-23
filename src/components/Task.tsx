import TaskButtons from "./TaskButtons";
interface TaskProps  {
	id: string, 
	category: string,
	name: string
}
const Task = ({id, name} : TaskProps) => {
	return (
		<li className='flex justify-between pl-2 bg-slate-400 mb-2 rounded-sm' id={id} >
			{name}
			<TaskButtons />
		</li>
	);
};

export default Task;
