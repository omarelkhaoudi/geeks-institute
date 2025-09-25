// app.js
import { TodoList } from "./todo.js";

// Créer une instance
const myTodo = new TodoList();

// Ajouter des tâches
myTodo.addTask("Learn Node.js modules");
myTodo.addTask("Practice JavaScript");
myTodo.addTask("Build a Todo App");

// Marquer une tâche comme terminée
myTodo.completeTask(1); // Marque la 2ème tâche comme terminée

// Lister toutes les tâches
myTodo.listTasks();
