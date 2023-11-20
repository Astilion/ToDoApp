const NewTask = () => {
	return (
		<div>
			<input type='text' placeholder='Add task...' />
			<button>ADD</button>
			<label htmlFor='tasks'>Category:</label>
			<div>
				<input type='radio' id='home' name='tasks' />
				<label htmlFor='home'>Home</label>
				<input type='radio' id='sport' name='tasks' />
				<label htmlFor='sport'>Sport</label>
				<input type='radio' id='shopping' name='tasks' />
				<label htmlFor='shopping'>Shopping</label>
				<input type='radio' id='finances' name='tasks' />
				<label htmlFor='finances'>Finances</label>
				<input type='radio' id='work' name='tasks' />
				<label htmlFor='work'>Work</label>
			</div>
		</div>
	);
};
export default NewTask;
