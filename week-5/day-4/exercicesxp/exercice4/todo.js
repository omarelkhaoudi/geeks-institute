// todo.js

export class TodoList {
  constructor() {
    this.tasks = [];
  }

  // Ajouter une tâche
  addTask(task) {
    this.tasks.push({ task, completed: false });
    console.log(`✅ Task added: "${task}"`);
  }

  // Marquer une tâche comme terminée
  completeTask(index) {
    if (index < 0 || index >= this.tasks.length) {
      console.log("❌ Invalid task index");
      return;
    }
    this.tasks[index].completed = true;
    console.log(`✔️ Task completed: "${this.tasks[index].task}"`);
  }

  // Lister toutes les tâches
  listTasks() {
    console.log("\n📋 Todo List:");
    this.tasks.forEach((t, i) => {
      const status = t.completed ? "✅ Done" : "⏳ Pending";
      console.log(`${i + 1}. ${t.task} - ${status}`);
    });
  }
}
