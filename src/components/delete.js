import { state } from "../state";
import { savingToLocalStorage } from "./localStorage";
import { render } from "./rendering";

export function deletebtn(btn) {
    const id = btn.dataset.id;
    const todo = state.Todos.find(todo => todo.id === id)
    if (!todo) return;
    state.Todos = state.Todos.filter(todo => todo.id !== id)
    savingToLocalStorage()
    render()
}

export function deleteAllCompletedTasks() {
    state.Todos = state.Todos.filter(todo => todo.completed !== true)
    savingToLocalStorage()
    render()
}