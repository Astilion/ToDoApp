interface SideNavProps {
  handleThemeSwitch: () => void;
}
const SideNav = ({ handleThemeSwitch }: SideNavProps) => {
  return (
    <nav className="hidden min-h-full w-72 bg-slate-100 dark:bg-gray-700 dark:text-white md:flex md:flex-col md:py-4 md:pl-4">
      <div className="flex justify-between">
        <div className="mb-2 ">
          <span>img </span>
          <span>Profile Name</span>
        </div>

        <div>
          <button onClick={handleThemeSwitch}>
            <label className="relative me-5 inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                value=""
                className="peer sr-only"
                defaultChecked
              />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px]   after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-yellow-400 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700"></div>
              <span className="ms-3 text-sm font-medium "></span>
            </label>
          </button>
        </div>
      </div>
      <ul className="">
        <li>Calendar</li>
        <li>Today</li>
      </ul>
    </nav>
  );
};

export default SideNav;
