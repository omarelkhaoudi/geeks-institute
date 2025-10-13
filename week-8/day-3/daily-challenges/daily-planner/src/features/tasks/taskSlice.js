import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksByDay: {}, // Exemple : { "2025-10-13": [{id, text, completed}] }
  selectedDay: new Date().toISOString().split("T")[0],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },
    addTask: (state, action) => {
      const { day, task } = action.payload;
      if (!state.tasksByDay[day]) {
        state.tasksByDay[day] = [];
      }
      state.tasksByDay[day].push(task);
    },
    editTask: (state, action) => {
      const { day, id, updatedText } = action.payload;
      const tasks = state.tasksByDay[day];
      const task = tasks.find((t) => t.id === id);
      if (task) task.text = updatedText;
    },
    deleteTask: (state, action) => {
      const { day, id } = action.payload;
      state.tasksByDay[day] = state.tasksByDay[day].filter(
        (task) => task.id !== id
      );
    },
  },
});

export const { addTask, editTask, deleteTask, setSelectedDay } =
  taskSlice.actions;
export default taskSlice.reducer;
