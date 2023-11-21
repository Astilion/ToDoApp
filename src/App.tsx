import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";
function App() {
	return (
		<div className="w-full">
			<Header />
			<NewTask />
			<Tasks/>

		</div>
	);
}

export default App;
