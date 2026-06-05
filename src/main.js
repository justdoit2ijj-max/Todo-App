import { storingAllTodos } from "./components/storing";
import { render } from "./components/rendering";
import { todosState } from "./components/storing";
import { savingToLocalStorage } from "./components/localStorage";
import { storeCompletedTodos } from "./components/storing";
import { state } from "./state";
import { deletebtn } from "./components/delete";
import { deleteAllCompletedTasks } from "./components/delete";
import { toggleImg } from "./components/toggletheme";
import { toggleThemeType } from "./components/toggletheme";
import Sortable from "sortablejs";
import { toggleTheme } from "./components/toggletheme";
import { updateTodosOrder } from "./components/dragging";

function getTodos() {
    state.Todos = JSON.parse(localStorage.getItem('Todos')) || []
    render();
};

toggleImg();
getTodos();

const TodoInput = document.getElementById('todo-input');
const deleteAllCompleted = document.getElementById('delete-all-completed');
const todosContainer = document.getElementById('todos');
const bgImg = document.getElementById('bg-img');
const toggleThemeBtn = document.getElementById('toggle-theme-btn');

bgImg.src = state.themeImg;

TodoInput.addEventListener('keydown', e => {
    if (e.key == "Enter") {
        storingAllTodos();
        todosState();
        render();
        savingToLocalStorage();
    };
});

document.querySelectorAll('input[name="type"]').forEach(input => {
    input.addEventListener('change', () => {
        todosState();
        render();
    });
});


todosContainer.addEventListener('click', e => {
    const btn = e.target.closest('.complete-btn');

    if (!btn) return;

    storeCompletedTodos(btn);
    render();
    savingToLocalStorage();
});

todosContainer.addEventListener('click', e => {
    const btn = e.target.closest('.del-btn');

    if (!btn) return;
    deletebtn(btn);
});

deleteAllCompleted.addEventListener('click', () => {
    deleteAllCompletedTasks();
});

toggleThemeBtn.addEventListener('click', () => {
    toggleThemeType();
    toggleImg();
    bgImg.src = state.themeImg;
    toggleTheme()
});
new Sortable(todosContainer, {
    animation: 150,
    onEnd: () => updateTodosOrder(todosContainer)
})
