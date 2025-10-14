import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    { id: 1, name: 'Work' },
    { id: 2, name: 'Personal' },
    { id: 3, name: 'Fitness' },
  ],
  tasks: [
    { id: 1, title: 'Finish project report', categoryId: 1, completed: false },
    { id: 2, title: 'Buy groceries', categoryId: 2, completed: true },
    { id: 3, title: 'Go to gym', categoryId: 3, completed: false },
  ],
};

const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, newTitle } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.title = newTitle;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    editCategory: (state, action) => {
      const { id, newName } = action.payload;
      const category = state.categories.find((c) => c.id === id);
      if (category) category.name = newName;
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter((c) => c.id !== action.payload);
      state.tasks = state.tasks.filter((t) => t.categoryId !== action.payload);
    },
  },
});

// Export actions
export const {
  addTask,
  editTask,
  deleteTask,
  toggleTaskCompletion,
  addCategory,
  editCategory,
  deleteCategory,
} = trackerSlice.actions;

// --- Selectors using createSelector ---
const selectTasks = (state) => state.tracker.tasks;
const selectCategories = (state) => state.tracker.categories;

export const selectTasksByCategory = createSelector(
  [selectTasks, (_, categoryId) => categoryId],
  (tasks, categoryId) => tasks.filter((task) => task.categoryId === categoryId)
);

export const selectCompletedTasks = createSelector([selectTasks], (tasks) =>
  tasks.filter((t) => t.completed).length
);

export const selectCategoryById = createSelector(
  [selectCategories, (_, id) => id],
  (categories, id) => categories.find((c) => c.id === id)
);

export default trackerSlice.reducer;
