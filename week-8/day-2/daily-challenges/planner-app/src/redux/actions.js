import { ADD_TASK, EDIT_TASK, DELETE_TASK, SET_SELECTED_DAY } from "./types";

export const addTask = (day, task) => ({
  type: ADD_TASK,
  payload: { day, task },
});

export const editTask = (day, taskId, updates) => ({
  type: EDIT_TASK,
  payload: { day, taskId, updates },
});

export const deleteTask = (day, taskId) => ({
  type: DELETE_TASK,
  payload: { day, taskId },
});

export const setSelectedDay = (day) => ({
  type: SET_SELECTED_DAY,
  payload: day,
});
