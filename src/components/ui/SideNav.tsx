const SideNav = () => {
	return (
		<nav className='hidden w-72 md:flex md:flex-col md:pl-4 md:py-4 bg-slate-100 min-h-full'>
			<div className='flex justify-between'>
				<div className='mb-2 '>
					<span>img </span>
					<span>Profile Name</span>
				</div>

				<div>
					<button>
						<label className='relative inline-flex items-center me-5 cursor-pointer'>
							<input
								type='checkbox'
								value=''
								className='sr-only peer'
								defaultChecked
							/>
							<div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4   peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
							<span className='ms-3 text-sm font-medium '></span>
						</label>
					</button>
				</div>
			</div>
			<ul className=''>
				<li>Calendar</li>
				<li>Today</li>
			</ul>
		</nav>
	);
};

export default SideNav;
