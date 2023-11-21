const NewTask = () => {
	return (
		<div className='bg-slate-600 p-5 text-white'>
			<input
				className='w-full rounded-md mb-2 p-1 text-slate-950'
				type='text'
				placeholder='Add task...'
			/>

			<button className='block px-3 py-1 rounded-lg bg-sky-700 transition-colors hover:bg-sky-500 font-bold text-white'>
				Add Task
			</button>
			<label className='font-semibold p-1' htmlFor='tasks'>
				Category:
			</label>
			<div className='flex flex-wrap'>
				<div>
					<input type='radio' id='home' name='tasks' />
					<label className='p-2' htmlFor='home'>
						Home
					</label>
				</div>
				<div>
					<input type='radio' id='sport' name='tasks' />
					<label className='p-2' htmlFor='sport'>
						Sport
					</label>
				</div>
				<div>
					<input type='radio' id='shopping' name='tasks' />
					<label className='p-2' htmlFor='shopping'>
						Shopping
					</label>
				</div>
				<div>
					<input type='radio' id='finances' name='tasks' />
					<label className='p-2' htmlFor='finances'>
						Finances
					</label>
				</div>
				<div>
					<input type='radio' id='work' name='tasks' />
					<label className='p-2' htmlFor='work'>
						Work
					</label>
				</div>
			</div>
		</div>
	);
};
export default NewTask;
