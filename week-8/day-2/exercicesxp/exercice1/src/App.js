import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1>📝 Redux Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
