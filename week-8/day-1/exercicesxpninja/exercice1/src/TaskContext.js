import { createContext, useReducer, useContext } from "react";
import { v4 as uuidv4 } from "uuid"; // pour générer des IDs uniques

// 1️⃣ Crée le contexte
const TaskContext = createContext();

// 2️⃣ Définir le reducer
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: uuidv4(), text: action.payload, completed: false },
      ];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

// 3️⃣ Crée le provider
export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

// 4️⃣ Custom hook pour utiliser le contexte
export function useTasks() {
  return useContext(TaskContext);
}
