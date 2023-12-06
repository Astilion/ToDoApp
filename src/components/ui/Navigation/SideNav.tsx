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
    <nav className=" fixed z-20 min-h-full w-full bg-slate-100 dark:bg-gray-700 dark:text-white md:flex md:w-auto md:flex-col">
      <div className="flex justify-between md:py-3 md:pl-4">
        <UserProfile />
        <div className="">
          <ThemeSwitch handleThemeSwitch={handleThemeSwitch} />
          <button className="mr-4" onClick={toggleNav}>
            <IconLayoutSidebar color="gray" />
          </button>
        </div>
      </div>
      <div className="mb-2 h-px w-full bg-slate-300 dark:bg-gray-600"></div>
      <NavList />
    </nav>
  );
};

export default SideNav;
