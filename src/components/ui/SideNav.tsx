import NavListItem from "./NavListItem";
import { IconLayoutSidebar } from "@tabler/icons-react";
import { useState } from "react";

interface SideNavProps {
  handleThemeSwitch: () => void;
}
const SideNav = ({ handleThemeSwitch }: SideNavProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
  };
  return (
    <nav className=" fixed z-20 min-h-full w-full bg-slate-100 dark:bg-gray-700 dark:text-white md:flex md:w-auto md:flex-col">
      <div className="flex justify-between md:py-3 md:pl-4">
        <div className="mb-1 ">
          <span>img </span>
          <span>Profile Name</span>
        </div>

        <div className="">
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

          <button className="mr-4" onClick={toggleNav}>
            <IconLayoutSidebar color="gray" />
          </button>
        </div>
      </div>
      <div className="mb-2 h-px w-full bg-slate-300 dark:bg-gray-600"></div>
      <ul className="">
        <NavListItem>Calendar</NavListItem>
        <NavListItem>Today</NavListItem>
      </ul>
    </nav>
  );
};

export default SideNav;
