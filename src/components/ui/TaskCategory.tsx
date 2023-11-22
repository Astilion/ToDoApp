const taskCategories = [
	{ id: "home", label: "Home" },
	{ id: "sport", label: "Sport" },
	{ id: "shopping", label: "Shopping" },
	{ id: "finances", label: "Finances" },
	{ id: "work", label: "Work" },
];

const TaskCategory = () => {
	return (
		<>
			{taskCategories.map(category => (
				<div key={category.id}>
					<input type='radio' id={category.id} name='tasks' />
					<label className='p-2' htmlFor={category.id}>
						{category.label}
					</label>
				</div>
			))}
		</>
	);
};

export default TaskCategory;
