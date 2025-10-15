import { combineReducers } from 'redux';
import { ADD_CATEGORY, ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

const initialCategories = [
  { id: 'cat-1', name: 'Personnel', todos: [] },
  { id: 'cat-2', name: 'Travail', todos: [] },
];

function categoriesReducer(state = initialCategories, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, { id: action.payload.id, name: action.payload.name, todos: [] }];

    case ADD_TODO:
      return state.map((cat) =>
        cat.id === action.payload.categoryId
          ? { ...cat, todos: [...cat.todos, action.payload.todo] }
          : cat
      );

    case TOGGLE_TODO:
      return state.map((cat) =>
        cat.id === action.payload.categoryId
          ? {
              ...cat,
              todos: cat.todos.map((todo) =>
                todo.id === action.payload.todoId
                  ? { ...todo, completed: !todo.completed }
                  : todo
              ),
            }
          : cat
      );

    case REMOVE_TODO:
      return state.map((cat) =>
        cat.id === action.payload.categoryId
          ? { ...cat, todos: cat.todos.filter((todo) => todo.id !== action.payload.todoId) }
          : cat
      );

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  categories: categoriesReducer,
});
