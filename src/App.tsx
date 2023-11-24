import Header from "./components/ui/Header";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
	const [tasks, setTasks] = useState([
		{ id: "t1", category: "home", name: "Cleaning" },
		{ id: "t2", category: "sport", name: "Go to Gym" },
		{ id: "t3", category: "finances", name: "Pay rent" },
	]);

	const addTaskHandler = (inputValue: string) => {
		const newTask = {
			id: `t${tasks.length + 1}`,
			category: "home",
			name: inputValue,
		};
		setTasks(prevTasks => [...prevTasks, newTask]);
	};
	return (
		<div className='flex justify-center items-center'>
			<div className='md:min-w-3xl w-full md:max-w-3xl '>
				<Header />
				<NewTask addTaskHandler={addTaskHandler} />
				<Tasks tasks={tasks} />
			</div>
		</div>
	);
}

export default App;
