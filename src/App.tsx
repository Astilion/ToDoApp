import Header from "./components/ui/Header";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import { db } from "./config/firebase.js";
import { getDocs, collection, addDoc } from "firebase/firestore";

interface tasks {
	id: string;
	TaskName: string;
}
function App() {



	const [tasks2, setTasks2] = useState<tasks[]>([]);
	const tasksCollectionRef = collection(db, "tasks");

	const getTaskList = async () => {
		try {
			const data = await getDocs(tasksCollectionRef);
			const filteredData = data.docs.map(doc => ({
				...doc.data(),
				id: doc.id,

			}));
			setTasks2(filteredData);
			console.log(filteredData);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getTaskList();
	}, []);

	const addTaskHandler = async (inputValue:string) => {
		try {
			const newTask = {
				TaskName: inputValue,
			};
	
			const docRef = await addDoc(tasksCollectionRef, newTask);
			setTasks2((prevTasks) => [
				...prevTasks,
				{ ...newTask, id: docRef.id },
			]);
		} catch (err) {
			console.error("Error adding task: ", err);
		}
	};
	return (
		<div className='flex justify-center items-center'>
			<div className='md:min-w-3xl w-full md:max-w-3xl '>
				<Header />
				<NewTask addTaskHandler={addTaskHandler} />
				<Tasks tasks={tasks2} />
			</div>
		</div>
	);
}

export default App;
