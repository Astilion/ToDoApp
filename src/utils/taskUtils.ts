import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

interface Task {
  id: string;
  TaskName: string;
}
export const useTaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const tasksCollectionRef = collection(db, "tasks");

  const getTaskList = async () => {
    try {
      const data = await getDocs(tasksCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Task[];
      setTasks(filteredData);
    } catch (err) {
      console.log(err);
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
      setTasks((prevTasks) => [...prevTasks, { ...newTask, id: docRef.id }]);
    } catch (err) {
      console.log("Error adding task: ", err);
    }
  };

  return { tasks, addTaskHandler };
};
