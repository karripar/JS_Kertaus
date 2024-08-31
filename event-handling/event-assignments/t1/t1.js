'use strict';

// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const target = document.querySelector('ul');
const newButton = document.querySelector('.add-btn');
const todoDialog = document.querySelector('#todo-dialog');
const todoForm = document.querySelector('#todo-form');
const formInput = document.querySelector('#form-input');

function renderTodoList() {
  target.innerHTML = ''; // Clear existing content

  for (const item of todoList) {
    if (item) {
      // Create the HTML structure for each todo item with a delete button
      const todoHTML = `
        <li>
          <input type="checkbox" data-id="${item.id}" ${
        item.completed && 'checked'
      }>
          <div>${item.task}</div>
          <button class="delete-btn" data-id="${item.id}">Delete</button>
        </li>
      `;

      // Insert the todoHTML into the target list
      target.insertAdjacentHTML('beforeend', todoHTML);
    }
  }

  // Attach event listeners to the checkboxes and delete buttons
  attachEventListeners();
}

function attachEventListeners() {
  const checkboxes = target.querySelectorAll('input[type="checkbox"]');
  for (const checkbox of checkboxes) {
    checkbox.addEventListener('change', function () {
      const itemId = parseInt(checkbox.dataset.id, 10);
      const todoItem = todoList.find(todo => todo.id === itemId);
      if (todoItem) {
        todoItem.completed = checkbox.checked;
        console.log('Updated todoList:', todoList);
      }
    });
  }

  const deleteButtons = target.querySelectorAll('.delete-btn');
  for (const button of deleteButtons) {
    button.addEventListener('click', function () {
      const itemId = parseInt(button.dataset.id, 10);
      const todoItemIndex = todoList.findIndex(todo => todo.id === itemId);
      if (todoItemIndex !== -1) {
        todoList.splice(todoItemIndex, 1); // Remove the item from the array
        const listItem = button.parentNode;
        target.removeChild(listItem); // Remove the item from the html
        console.log('Update:', todoList);
      }
    });
  }
}

// Event listener for opening the dialog
newButton.addEventListener('click', function () {
  todoDialog.showModal();
});

// Event listener for adding a new todo
todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const newTask = formInput.value.trim();
  if (newTask) {
    const newItem = {
      id: todoList.length + 1,
      task: newTask,
      completed: false,
    };
    todoList.push(newItem);

    // Add the new item directly to the DOM
    const todoHTML = `
      <li>
        <input type="checkbox" data-id="${newItem.id}">
        <div>${newItem.task}</div>
        <button class="delete-btn" data-id="${newItem.id}">Delete</button>
      </li>
    `;
    target.insertAdjacentHTML('beforeend', todoHTML);

    // Reattach event listeners to the new checkbox and delete button
    attachEventListeners();

    todoDialog.close();
    formInput.value = '';
    console.log('Update:', todoList);
  }
});

// start up and list refresh in the html
renderTodoList();
