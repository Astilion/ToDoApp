import Header from "./components/ui/Header";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";

function App() {
	return (
		<div className="w-full ">
			<Header />
			<NewTask />
			<Tasks/>

		</div>
	);
}

export default App;
