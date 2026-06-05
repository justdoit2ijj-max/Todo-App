import { state } from "../state";
export function storingAllTodos() {
    const TodoInputValue = document.getElementById('todo-input').value;
    if (TodoInputValue === "") return;
    const taskObj = {
        id: crypto.randomUUID(),
        task: TodoInputValue,
        completed: false
    }
    state.Todos.push(taskObj);
}
export function storeCompletedTodos(button) {
    const id = button.dataset.id;
    const todo = state.Todos.find(todo => todo.id === id)
    if (!todo) return;
    todo.completed = !todo.completed;
}
export function todosState() {
    const todoType = document.querySelector('input[name="type"]:checked').value;
    state.todosType = todoType;
}
