const NewTask = () => {
	return (
		<div>
			<input type='text' placeholder='Add task...' />
			<button>ADD</button>
			<label htmlFor='tasks'>Category:</label>
			<select name='tasks' id='tasks'>
				<option value='home'>Home</option>
				<option value='sport'>Sport</option>
				<option value='relax'>Relax</option>
				<option value='finances'>Finances</option>
				<option value='shopping'>Shopping</option>
			</select>
		</div>
	);
};
export default NewTask;
