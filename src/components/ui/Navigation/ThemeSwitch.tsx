interface ThemeSwitchProps {
  handleThemeSwitch: () => void;
}
const ThemeSwitch = ({ handleThemeSwitch }: ThemeSwitchProps) => {
  return (
    <button onClick={handleThemeSwitch}>
      <label className="relative ml-4 inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          value=""
          className="peer sr-only"
          defaultChecked
        />
        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px]   after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-600"></div>
        <span className="ms-3 text-sm font-medium "></span>
      </label>
    </button>
  );
};

export default ThemeSwitch;
