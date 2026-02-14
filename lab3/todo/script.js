const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

const addItem = (text, checked = false) => {
  const item = document.createElement('li');
  item.className = 'todo-item';

  const left = document.createElement('div');
  left.className = 'todo-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = checked;

  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  if (checked) {
    span.classList.add('done');
  }

  checkbox.addEventListener('change', () => {
    span.classList.toggle('done');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '🗑';

  deleteBtn.addEventListener('click', () => {
    list.removeChild(item);
  });

  left.appendChild(checkbox);
  left.appendChild(span);

  item.appendChild(left);
  item.appendChild(deleteBtn);

  list.appendChild(item);
};

/* Default items (like in screenshot) */
addItem('First item', true);
addItem('Second item');
addItem('Third item');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = input.value.trim();
  if (value === '') return;

  addItem(value);
  input.value = '';
});
