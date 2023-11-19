function App() {
	return (
		<>
			<div>
				<h1>ToDo List</h1>
			</div>
			<div>
			<input type='text' placeholder='Add task...' />
				<button>ADD</button>
				<label htmlFor="tasks">Category:</label>
				<select name="tasks" id="tasks">
					<option value="home">Home</option>
					<option value="sport">Sport</option>
					<option value="relax">Relax</option>
					<option value="finances">Finances</option>
					<option value="shopping">Shopping</option>
				</select>
			</div>
			<div>
				<h3>List of tasks</h3>
				<p>No tasks on the list</p>
				<ul>
					<li>
						test
						<div>
							<button>Accept</button>
							<button>Edit</button>
							<button>Delete</button>
						</div>
					</li>
					<li>
						test2
						<div>
							<button>Accept</button>
							<button>Edit</button>
							<button>Delete</button>
						</div>
					</li>
					<li>
						test3
						<div>
							<button>Accept</button>
							<button>Edit</button>
							<button>Delete</button>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}

export default App;
