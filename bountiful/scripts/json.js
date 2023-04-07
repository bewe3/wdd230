document.addEventListener('DOMContentLoaded', () => {
  const fruitOptions = document.querySelectorAll('.fruit');
  const form = document.getElementById('specialty-form');

  fetch('../documents/fruityvice.json')
    .then(response => response.json())
    .then(data => {
      const fruitData = data.fruits;

      fruitOptions.forEach(select => {
        fruitData.forEach(fruit => {
          const option = document.createElement('option');
          option.value = fruit.name;
          option.textContent = fruit.name;
          select.appendChild(option);
        });
      });
    });

  
    if (form) {
      let fruitData = [];
      console.log(fruitData);

      form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        const entries = formData.entries();
        const data = Object.fromEntries(entries);

        fetch('../documents/fruityvice.json')
          .then(response => response.json())
          .then(jsonData => {
            fruitData = jsonData.fruits;

            const selectedFruits = [data.fruit1, data.fruit2, data.fruit3];
            let carbohydrates = 0, protein = 0, fat = 0, sugar = 0, calories = 0;

            selectedFruits.forEach(fruitName => {
              const fruit = fruitData.find(fruit => fruit.name === fruitName);
              if (fruit) {
                carbohydrates += fruit.nutritions.carbohydrates;
                protein += fruit.nutritions.protein;
                fat += fruit.nutritions.fat;
                sugar += fruit.nutritions.sugar;
                calories += fruit.nutritions.calories;
              }
            });

            const queryParams = new URLSearchParams({
              name: data.name,
              email: data.email,
              phone: data.phone,
              fruit1: data.fruit1,
              fruit2: data.fruit2,
              fruit3: data.fruit3,
              special: data.special,
              orderDate: new Date().toISOString(),
              carbohydrates: carbohydrates,
              protein: protein,
              fat: fat,
              sugar: sugar,
              calories: calories
            });
            window.location.href = "confirmation.html?" + queryParams.toString();
          });
      });

    }
});
