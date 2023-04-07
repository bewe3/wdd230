document.addEventListener('DOMContentLoaded', () => {
  const fruitOptions = document.querySelectorAll('.fruit');

  // Fetch fruit options from JSON file
  fetch('../documents/fruityvice.json')
    .then(response => response.json())
    .then(data => {
      const fruitData = data.fruits;

      // Populate fruit options in form
      fruitOptions.forEach(select => {
        fruitData.forEach(fruit => {
          const option = document.createElement('option');
          option.value = fruit.name;
          option.textContent = fruit.name;
          select.appendChild(option);
        });
      });
    });

  const form = document.getElementById('specialty-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const entries = formData.entries();
    const data = Object.fromEntries(entries);

    window.location.href = `confirmation.html`;
  });
});
