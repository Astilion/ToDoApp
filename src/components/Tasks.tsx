import Task from "./Task";
interface TasksProps {
  tasks: { id: string; TaskName: string }[];
}
const Tasks = ({ tasks }: TasksProps) => {
  const isEmpty = tasks.length === 0;
  return (
    <div className="bg-slate-300 p-4">
      <div className="mb-3 text-center">
        <h3 className="mb-1 text-center text-lg font-bold">List of tasks</h3>
        {isEmpty && (
          <p className="font-semibold text-red-500">No tasks on the list</p>
        )}
      </div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} name={task.TaskName} />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
