# Frontend Mentor - Todo App Solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). The app lets users create, complete, filter, delete, theme-toggle, and reorder todos.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for interactive elements
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all, active, and completed todos
- Clear all completed todos
- Toggle light and dark mode
- Drag and drop to reorder items on the list
- Keep todos saved after refreshing the page

### Links

- Solution URL: Add your Frontend Mentor solution URL here
- Live Site URL: Add your live site URL here

## My Process

### Built With

- Semantic HTML5
- Tailwind CSS
- CSS custom properties
- Mobile-first responsive layout
- Vanilla JavaScript modules
- LocalStorage for saved todos
- [SortableJS](https://sortablejs.github.io/Sortable/) for drag and drop
- [Vite](https://vite.dev/) for development and builds

### What I Learned

This project helped me practice splitting JavaScript into smaller modules while keeping `main.js` focused on app setup and event listeners.

One useful part was syncing SortableJS drag order back into app state:

```js
export function updateTodosOrder(todosContainer) {
    const orderedIds = [...todosContainer.children].map(todo => todo.dataset.id);
    const orderedTodos = orderedIds.map(id => state.Todos.find(todo => todo.id === id));

    state.Todos = state.Todos.map(todo => {
        if (!orderedIds.includes(todo.id)) return todo;
        return orderedTodos.shift();
    });
    savingToLocalStorage();
}
```

I also worked on theme logic by using one theme value to update both the background image and the sun/moon icon.

### Continued Development

Areas I want to keep improving:

- Cleaner naming for modules and functions as the app grows
- Better accessibility for drag and drop interactions
- More consistent empty, completed, and filtered states
- Persisting the selected theme in localStorage

### AI Collaboration

I used AI assistance to review module structure, debug theme toggling, fix completed todo button styling, and connect SortableJS ordering back to `state.Todos`.

## Author

- Frontend Mentor: Add your Frontend Mentor profile link here
