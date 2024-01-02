import NavList from "./NavList";
import UserProfile from "./UserProfile";
import { IconLayoutSidebar } from "@tabler/icons-react";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

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
    <>
      <button className="fixed z-20 m-4" onClick={toggleNav}>
        <IconLayoutSidebar color="gray" />
      </button>

      <nav
        className={`fixed left-0 z-20 min-h-full w-full bg-slate-100 transition-transform dark:bg-gray-700 dark:text-white md:relative md:left-0 md:flex md:w-auto md:flex-col ${
          isNavOpen ? "transform-none" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between gap-1 py-3 md:pl-4">
          <UserProfile />
          <div className="flex gap-1 items-center ml-4">
            <ThemeSwitch handleThemeSwitch={handleThemeSwitch} />

            <button className="mr-4" onClick={toggleNav}>
              <IconLayoutSidebar color="gray" />
            </button>
          </div>
        </div>
        <div className="mb-2 h-px w-full bg-slate-300 dark:bg-gray-600"></div>
        <NavList />
      </nav>
    </>
  );
};

export default SideNav;
