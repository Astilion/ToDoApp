import Header from "./components/ui/Header";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";
import SideNav from "./components/ui/Navigation/SideNav";
import AuthForm from './components/auth/AuthForm'
import { useEffect, useState } from "react";
import { db } from "./config/firebase.js";
import { getDocs, collection, addDoc } from "firebase/firestore";
import Modal from "./components/Modal";

interface tasks {
  id: string;
  TaskName: string;
}
function App() {
  const [theme, setTheme] = useState("dark");
  const [tasks2, setTasks2] = useState<tasks[]>([]);
  const tasksCollectionRef = collection(db, "tasks");
  const [isModalOpen, setIsModalOpen] = useState(true);


  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log("Theme:", theme);
    console.log("Document Class List:", document.documentElement.classList);
    if (theme === "dark") {
      document.documentElement.classList.toggle("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      console.log(newTheme); // Log the updated theme
      return newTheme;
    });
  };

  const getTaskList = async () => {
    try {
      const data = await getDocs(tasksCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTasks2(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getTaskList();
  }, []);

  const addTaskHandler = async (inputValue: string) => {
    try {
      const newTask = {
        TaskName: inputValue,
      };

      const docRef = await addDoc(tasksCollectionRef, newTask);
      setTasks2((prevTasks) => [...prevTasks, { ...newTask, id: docRef.id }]);
    } catch (err) {
      console.error("Error adding task: ", err);
    }
  };


  return (
    <>
    {isModalOpen && (
        <Modal onClose={closeModal}>
          <AuthForm />
        </Modal>
      )}

    <div className="flex h-screen-small justify-between bg-slate-200 dark:bg-gray-800 md:h-screen">
      <SideNav handleThemeSwitch={handleThemeSwitch} />
      <div className="md:min-w-3xl relative w-full  md:mx-auto md:mt-10 md:max-w-3xl">
        <Header />
        <NewTask addTaskHandler={addTaskHandler} />
        <Tasks tasks={tasks2} />
      </div>

    </div>
    </>
  );
}

export default App;
