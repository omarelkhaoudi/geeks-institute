import { ADD_TASK, DELETE_TASK, SET_SELECTED_DAY } from "./types";

const initialState = {
  selectedDay: new Date().toISOString().slice(0, 10),
  tasksByDay: {},
};

export default function plannerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      const { day, task } = action.payload;
      const tasks = state.tasksByDay[day] || [];
      const newTask = { id: Date.now(), title: task.title, description: task.description };
      return {
        ...state,
        tasksByDay: { ...state.tasksByDay, [day]: [...tasks, newTask] },
      };
    }
    case DELETE_TASK: {
      const { day, taskId } = action.payload;
      const tasks = (state.tasksByDay[day] || []).filter((t) => t.id !== taskId);
      return {
        ...state,
        tasksByDay: { ...state.tasksByDay, [day]: tasks },
      };
    }
    case SET_SELECTED_DAY:
      return { ...state, selectedDay: action.payload };
    default:
      return state;
  }
}
