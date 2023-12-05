import TaskCategory from "./ui/TaskCategory";
import { useRef, useState } from "react";
import { handleEnterKey } from "../utils/handleEnterKey";

interface NewTaskProps {
  addTaskHandler: (inputValue: string) => void;
}
const NewTask = ({ addTaskHandler }: NewTaskProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState(false);
  const inputClasses = ["w-full sm:w-10/12 rounded-md mb-2 p-1 text-slate-950"];
  if (error) {
    inputClasses.push("bg-red-400 border-2 border-red-700");
  }

  const handleAddTask = () => {
    const inputValue = inputRef.current?.value || "";

    if (inputValue.trim() !== "") {
      addTaskHandler(inputValue);
      setError(false);
    } else {
      setError(true);
    }
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    handleEnterKey(e, handleAddTask);
  };
  return (
    <div className="bg-slate-600 p-5 text-white">
      <input
        ref={inputRef}
        className={inputClasses.join(" ")}
        type="text"
        placeholder="Add task..."
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={handleAddTask}
        className=" rounded-lg bg-sky-700 px-3 py-1 font-bold text-white transition-colors hover:bg-sky-500 sm:ml-2"
      >
        Add Task
      </button>
      {error && (
        <p className="text-center font-semibold text-red-400">
          Add task field must not be empty!
        </p>
      )}
      {!error && ""}
      <label className="block p-1 font-semibold" htmlFor="tasks">
        Category:
      </label>
      <div className="flex flex-wrap">
        <TaskCategory />
      </div>
    </div>
  );
};
export default NewTask;
