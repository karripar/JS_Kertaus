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
const list = document.querySelector('ul'); // Modify this selector based on your actual HTML structure

// Loop through the todoList and insert li elements
todoList.forEach(todo => {
  const item = `
    <li>
      <input type="checkbox" id="todo-${todo.id}" ${todo.completed ? 'checked' : ''}>
      <label for="todo-${todo.id}">${todo.task}</label>
    </li>`;
  list.insertAdjacentHTML('beforeend', item);
});


