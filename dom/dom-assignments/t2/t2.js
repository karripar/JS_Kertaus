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

// Loop through the todoList array and add
todoList.forEach(todo => {
  const li = document.createElement('li');
  // Create <input> element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `todo-${todo.id}`;
  checkbox.checked = todo.completed;

  // Create <label> element
  const label = document.createElement('label');
  label.htmlFor = checkbox.id;
  label.textContent = todo.task;

  li.appendChild(checkbox);
  li.appendChild(label);
  list.appendChild(li);

});
