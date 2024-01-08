import { useTheme } from "./utils/themeUtils.ts";
import { useTaskList } from "./utils/taskUtils.ts";
import Header from "./components/ui/Header";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";
import SideNav from "./components/ui/Navigation/SideNav";
// import AuthForm from "./components/auth/AuthForm";
// import { useState } from "react";
// import Modal from "./components/Modal";

function App() {
  const { handleThemeSwitch } = useTheme();
  const { tasks, addTaskHandler } = useTaskList();
  // const [isModalOpen, setIsModalOpen] = useState(true);

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      {/* {isModalOpen && (
        <Modal onClose={closeModal}>
          <AuthForm />
        </Modal>
      )} */}

      <div className="flex h-screen-small justify-between bg-slate-200 dark:bg-gray-800 md:h-screen">
        <SideNav handleThemeSwitch={handleThemeSwitch} />
        <div className="md:min-w-3xl relative w-full  md:mx-auto md:mt-10 md:max-w-3xl">
          <Header />
          <NewTask addTaskHandler={addTaskHandler} />
          <Tasks tasks={tasks} />
        </div>
      </div>
    </>
  );
}

export default App;
