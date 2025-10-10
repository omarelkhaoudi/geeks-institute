import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions";
import "../components/Todo.css"; // import du style

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""}`}
    >
      <span onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.text}
      </span>

      <button onClick={() => dispatch(removeTodo(todo.id))}>
        ❌
      </button>
    </li>
  );
}
