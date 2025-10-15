let nextCategoryId = 1;
let nextTodoId = 1;
const genCategoryId = () => `cat-${nextCategoryId++}`;
const genTodoId = () => `todo-${nextTodoId++}`;

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addCategory = (name) => ({
  type: ADD_CATEGORY,
  payload: { id: genCategoryId(), name },
});

export const addTodo = (categoryId, text) => ({
  type: ADD_TODO,
  payload: { categoryId, todo: { id: genTodoId(), text, completed: false } },
});

export const toggleTodo = (categoryId, todoId) => ({
  type: TOGGLE_TODO,
  payload: { categoryId, todoId },
});

export const removeTodo = (categoryId, todoId) => ({
  type: REMOVE_TODO,
  payload: { categoryId, todoId },
});
