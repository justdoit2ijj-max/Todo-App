import { state } from "../state";

export function savingToLocalStorage() {
    localStorage.setItem('Todos', JSON.stringify(state.Todos))
}