import { useState, useEffect } from "react";
interface ThemeHook {
  theme: string;
  handleThemeSwitch: () => void;
}
export const useTheme = (): ThemeHook => {
  const [theme, setTheme] = useState("dark");

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "" : "dark"));
  };

  useEffect(() => {
    console.log("Document Class List:", document.documentElement.classList);
    if (theme === "dark") {
      document.documentElement.classList.toggle("dark");
    }
  }, [theme]);

  return { theme, handleThemeSwitch };
};
