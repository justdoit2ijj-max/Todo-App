import { state } from "../state";
import iconCheck from "../../images/icon-check.svg";
import iconCross from "../../images/icon-cross.svg";

export function render() {
    const noOfTodos = document.getElementById('no-of-todos')
    const todos = document.getElementById('todos')
    const TodoInput = document.getElementById('todo-input')

    todos.innerHTML = "";

    let list = state.Todos;

    if (state.todosType === "active") {
        list = state.Todos.filter(todo => todo.completed === false);
    } else if (state.todosType === "completed") {
        list = state.Todos.filter(todo => todo.completed === true);
    }

    for (let i = 0; i < list.length; i++) {
        const completed = list[i].completed;
        const taskClasses = completed
            ? 'text-purple-300 line-through'
            : 'text-gray-600';
        const innerDivClasses = completed
            ? 'bg-linear-to-r from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)]'
            : 'bg-primrary';
        const checkIcon = completed
            ? `<img src="${iconCheck}" alt="check icon">`
            : '';

        const div = document.createElement('div')
        div.className = "draggable flex items-center justify-between px-4 py-3 xl:py-4 border-b border-gray-600";
        div.draggable = true;
        div.dataset.id = list[i].id;
        div.innerHTML =
            `<div class="flex items-center gap-x-3">
                <button class="w-7 h-7 rounded-full p-px bg-gray-600 transition duration-500 hover:bg-linear-to-r from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] complete-btn" data-id="${list[i].id}">
                    <div class="complete-inner-div w-full h-full rounded-full flex items-center justify-center ${innerDivClasses}">
                        ${checkIcon}
                    </div>
                </button>              
                <p class="font-josefin font-normal ${taskClasses}">${list[i].task}</p>
            </div>
            <button type="button" class="del-btn cursor-pointer" data-id="${list[i].id}">
                <img src="${iconCross}" alt="cross icon">
            </button>`
        todos.appendChild(div);
    }
    TodoInput.value = "";
    if (state.todosType === "completed") {
        noOfTodos.textContent = `${list.length} tasks completed`;
    } else {
        noOfTodos.textContent = `${list.length} tasks left`;
    }
}
