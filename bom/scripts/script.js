const input = document.querySelector('input[type="text"]');
const btn = document.querySelector('button[type="submit"]');
const list = document.querySelector('ul#list');

btn.addEventListener('click', function(event) {
  event.preventDefault();
  
  const inputValue = input.value.trim();

  if (!inputValue) {
    return;
  }

  const li = document.createElement('li');
  const deleteBtn = document.createElement('button');
  
  li.textContent = inputValue;
  deleteBtn.textContent = '❌';

  li.appendChild(deleteBtn);
  list.appendChild(li);

  deleteBtn.addEventListener('click', function() {
    list.removeChild(li);
  });

  input.value = '';
  input.focus();
});