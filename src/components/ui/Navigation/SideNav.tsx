import NavList from "./NavList";
import UserProfile from "./UserProfile";
import { IconLayoutSidebar } from "@tabler/icons-react";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

interface SideNavProps {
  handleThemeSwitch: () => void;
}
const SideNav = ({ handleThemeSwitch }: SideNavProps) => {
  const initialNavClasses =
    "fixed z-20 min-h-full w-full left-0 bg-slate-100 dark:bg-gray-700 dark:text-white md:flex md:w-auto md:flex-col md:left-0 md:relative";
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navClasses, setNavClasses] = useState(initialNavClasses);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);

    const updatedNavClasses = isNavOpen
      ? "fixed z-20 min-h-full w-full left-0 bg-slate-100 dark:bg-gray-700 dark:text-white md:flex md:w-auto md:flex-col md:left-0 md:relative"
      : "fixed z-20 min-h-full w-full -left-full bg-slate-100 dark:bg-gray-700 dark:text-white md:flex md:w-auto md:flex-col md:relative";
    setNavClasses(updatedNavClasses);

    console.log(isNavOpen);
  };
  return (
    <>
      {isNavOpen && (
        <button className="fixed z-20 m-4" onClick={toggleNav}>
          <IconLayoutSidebar color={window.innerWidth <= 768 ? "white" : "gray"} />
        </button>
      )}

      <nav className={navClasses}>
        <div className="flex justify-between py-3 md:pl-4">
          <UserProfile />
          <div className="">
            <ThemeSwitch handleThemeSwitch={handleThemeSwitch} />
            {!isNavOpen && (
              <button className="mr-4" onClick={toggleNav}>
                <IconLayoutSidebar color="gray" />
              </button>
            )}
          </div>
        </div>
        <div className="mb-2 h-px w-full bg-slate-300 dark:bg-gray-600"></div>
        <NavList />
      </nav>
    </>
  );
};

export default SideNav;
