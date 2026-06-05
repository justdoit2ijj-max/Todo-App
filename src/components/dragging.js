import { state } from "../state";
import { savingToLocalStorage } from "./localStorage";

export function updateTodosOrder(todosContainer) {
    const orderedIds = [...todosContainer.children].map(todo => todo.dataset.id);
    const orderedTodos = orderedIds.map(id => state.Todos.find(todo => todo.id === id));

    state.Todos = state.Todos.map(todo => {
        if (!orderedIds.includes(todo.id)) return todo;
        return orderedTodos.shift();
    });
    savingToLocalStorage();
}
